import { DataTypes } from 'sequelize';
export default {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    view: {
        type: DataTypes.STRING,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    icon: {
        type: DataTypes.STRING
    },
    roles: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        defaultValue: ['USER']
    }
}