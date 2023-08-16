import { DataTypes } from 'sequelize';
import { sequelize } from '../database/database';

export const Developer = sequelize.define('Developer', {
    Id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    Name: {
        type: DataTypes.STRING(250)
    },
    FoundationYear: {
        type: DataTypes.INTEGER
    },
    Country: {
        type: DataTypes.STRING(250)
    },
})