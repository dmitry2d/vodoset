import { DataTypes } from 'sequelize';
export default {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        default: ''
    },
    surname: {
        type: DataTypes.STRING,
        default: ''
    },
    lastname: {
        type: DataTypes.STRING,
        default: ''
    },
    pos: {
        type: DataTypes.STRING,
        default: ''
    },
    dept: {
        type: DataTypes.STRING,
        default: ''
    }
}