import { DataTypes } from 'sequelize';
import { sequelize } from '../database/database';

import { Developer } from './Developer';

export const Game = sequelize.define('Game', {
    Id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    Name: {
        type: DataTypes.STRING(250)
    },
    Gender: {
        type: DataTypes.STRING(250)
    },
    Platform: {
        type: DataTypes.STRING(250)
    },
    Price: {
        type: DataTypes.INTEGER
    },
    IdDeveloper: {
        type: DataTypes.INTEGER,
        references: {
            model: 'Developer',
            key: 'Id'
        }
    }
})

Game.belongsTo(Developer, { foreignKey : 'IdDeveloper'});