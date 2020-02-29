module.exports = {
  // HOST: "localhost",
  // DB: "testdb",
  // USER: "root",
  // PASSWORD: "password",
  // dialect: "mysql",
  HOST: process.env.HOST || "localhost",//"http://ec2-184-72-235-159.compute-1.amazonaws.com",
  DB: process.env.DB ||  "testdb",//"da07p9af7715lr",
  USER:process.env.USER || "root",// "zmtbzshhblgyzj",
  PASSWORD: process.env.PASSWORD || "password",//"939212a0f67de60a52dd1a75133639cacc284255a5fba93b2c1a4ffe7ca25a53",
  dialect: process.env.dialect || "mysql",//"postgres",

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
