const dbPool = require("../../config/database.js");
const fs = require("fs");

const getAllBerita = () => {
  const SQLQuery = "SELECT * FROM `berita`";

  return dbPool.execute(SQLQuery);
};

const createNewBerita = (req) => {
  const SQLQuery = `INSERT INTO \`berita\` (gambar, title, deskripsi,sumber) VALUES ('${req.file.filename}', '${req.body.title}', '${req.body.deskripsi}','${req.body.sumber}')`;

  return dbPool.execute(SQLQuery);
};

// const updateUser = (body, id) => {
//   // const table = `demo-akun`;
//   const SQLQuery = `UPDATE \`berita\` SET nama = '${body.nama}', email = '${body.email}', telp = '${body.telp}' WHERE id = ${id}`;

//   return dbPool.execute(SQLQuery);
// };

// const deleteUser = (id) => {
//   const SQLQuery = `DELETE FROM \`berita\` WHERE id = ${id}`;

//   return dbPool.execute(SQLQuery);
// };

module.exports = { getAllBerita, createNewBerita };
