const dbPool = require("../../config/database.js");

const getAllUsers = () => {
  const SQLQuery = "SELECT * FROM `real-akun`";

  return dbPool.execute(SQLQuery);
};

const createNewUser = (body) => {
  const SQLQuery = `INSERT INTO \`real-akun\` (nama, email, telp) VALUES ('${body.nama}', '${body.email}', '${body.telp}')`;

  return dbPool.execute(SQLQuery);
};

module.exports = { getAllUsers, createNewUser };
