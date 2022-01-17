const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './sqlite/database.db'
});

sequelize
.sync({
  alter: true,
})
.then(() => {
  console.log("models were syncronyzed!");
});

module.exports = sequelize;