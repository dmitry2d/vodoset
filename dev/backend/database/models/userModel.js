import { DataTypes } from 'sequelize';
export default {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    username: {
        type: DataTypes.STRING,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
    },
    role: {
        type: DataTypes.STRING,
        defaultValue: 'USER'
    }
}