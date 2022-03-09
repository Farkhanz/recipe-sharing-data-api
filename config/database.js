import sequelize from "sequelize";

const dbset = new sequelize('recipe_db','root','', {
    host: "localhost",
    dialect: "mysql"
});

export default dbset;