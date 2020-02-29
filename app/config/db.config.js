module.exports = {
  HOST: process.env.HOST || "localhost",
  DB: process.env.DB || "testdb",
  USER: process.env.USER1 || "root",
  PASSWORD: process.env.PASSWORD1 || "password",
  dialect: process.env.dialect || "mysql",

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
