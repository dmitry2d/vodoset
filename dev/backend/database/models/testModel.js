import { DataTypes } from 'sequelize';
export default {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    call_id: {
        type: DataTypes.INTEGER,
    }
}