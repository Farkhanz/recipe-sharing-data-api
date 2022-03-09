import { Sequelize } from "sequelize";
import dbset from "../config/database.js";

const { DataTypes } = Sequelize;

const Recipefood = dbset.define('foods',{
    name: {
        type: DataTypes.STRING
    },
    url: {
        type: DataTypes.STRING
    },
    description: {
        type: DataTypes.STRING
    }
}, {
    freezeTableName: true
});

export default Recipefood;