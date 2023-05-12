import { DataTypes } from 'sequelize';
export default {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    matrix: {
        type: DataTypes.STRING,
        unique: true
    }
}