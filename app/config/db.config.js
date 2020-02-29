module.exports = {
  // HOST: "localhost",
  // USER: "root",
  // PASSWORD: "password",
  // DB: "testdb",
  // dialect: "mysql",
  
  // HOST: "ec2-3-230-106-126.compute-1.amazonaws.com",
  // DB: "d5hdlrtrpck956",
  // USER: "qrhhuvveqvggwl",
  // PASSWORD: "883fb7ebc1603c4e55e172b91fb40a4087f72255a7be7ed1564b176f36e58a24",
  // dialect: "postgres",
  
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};