
import { models } from '../database/models/index.js';
import apiError from '../errors/apiError.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { json } from 'sequelize';

function createJWTToken (tokenContent) {
    return jwt.sign (
        tokenContent,
        process.env.SECRET_KEY,
        {expiresIn: '24h'}
    )
}

async function register (req, res, next) {

    const {username, password, role} = req.query;
    if (!username || !password) {
        return next(apiError.badRequest('Missing Username or Password'));
    }

    const existingUser = await models.User.findOne ({where:{username}});
    if (existingUser) {
        return next(apiError.badRequest('Username Already Registered'));
    }

    const encryptedPassword = await bcrypt.hash(password, 5);
    const user = await models.User.create({username, role, password: encryptedPassword});

    const token = createJWTToken({id: user.id, username, role});
    return res.json({token});

}

async function login (req, res, next) {

    const {username, password} = req.query;
    if (!username || !password) {
        return next(apiError.badRequest('Missing Username or Password'));
    }

    const user = await models.User.findOne ({where:{username}});
    if (!user) {
        return next(apiError.badRequest('User is Not Registered'));
    }

    const comparePassword = bcrypt.compareSync (password, user.password);
    if (!comparePassword) {
        return next(apiError.badRequest('Wrong Password'));
    }
    const token = createJWTToken ({id: user.id, username: user.username, role: user.role});
    return res.json({token});

}

async function isAuthorized (req, res, next) {

    const user = req.user;
    const token = createJWTToken({id: user.id, username: user.username, role: user.role});
    return res.json({token});

}

async function getUserList (req, res, next) {

    const userList = await models.User.findAll();
    return res.json({userList});

}

export default {
    login,
    register,
    isAuthorized,
    getUserList
}