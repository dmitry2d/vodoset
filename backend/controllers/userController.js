
import apiError from '../errors/apiError.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { models } from '../database/models/index.js';

function sign (payload) {
    return jwt.sign (
        payload,
        process.env.SECRET_KEY,
        {expiresIn: '24h'}
    )
}

export async function register (req, res, next) {
    const {username, password, role} = req.query;
    if (!username || !password) {
        return next(apiError.badRequest('Missing Username or Password'));
    }
    const foundUser = await models.User.findOne ({where:{username}});
    if (foundUser) {
        return next(apiError.badRequest('Username Already Registered'));
    }
    const hashPassword = await bcrypt.hash(password, 5);
    const user = await models.User.create({username, role, password: hashPassword});
    const token = sign({id: user.id, username, role});
    return res.json({token});
}

export async function login (req, res, next) {
    const {username, password} = req.query;
    if (!username || !password) {
        return next(apiError.badRequest('Missing Username or Password'));
    }
    const user = await models.User.findOne ({where:{username}});
    if (!user) {
        return next(apiError.badRequest('Username Not Registered'));
    }
    const comparePassword = bcrypt.compareSync (password, user.password);
    if (!comparePassword) {
        return next(apiError.badRequest('Wrong Password'));
    }
    const token = sign({id: user.id, username: user.username, role: user.role});
    return res.json({token});
}

export function check (req, res, next) {
    const user = req.user;
    const token = sign({id: user.id, username: user.username, role: user.role});
    return res.json({token});
}