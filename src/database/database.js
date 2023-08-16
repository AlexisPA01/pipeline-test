import { Sequelize } from 'sequelize';
import config from "../../config";

const sequelize = new Sequelize(config.database, config.user, config.password, {
    host:config.host,
    dialect: 'mysql',
    define: {
        freezeTableName: true,
        timestamps:false
    }
  });

export {sequelize}