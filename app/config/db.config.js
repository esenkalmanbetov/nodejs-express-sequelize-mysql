module.exports = {
  // HOST: "localhost",
  // DB: "testdb",
  // USER: "root",
  // PASSWORD: "password",
  // dialect: "mysql",

  HOST: "ec2-184-72-235-159.compute-1.amazonaws.com",
  DB: "da07p9af7715lr",
  USER: "zmtbzshhblgyzj",
  PASSWORD: "939212a0f67de60a52dd1a75133639cacc284255a5fba93b2c1a4ffe7ca25a53",
  dialect: "postgres",

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
