const UsersModel = require("./models/index.js");

// import type { NextApiRequest, NextApiResponse } from "next";
import { createRouter, expressWrapper } from "next-connect";
import cors from "cors";
const multer = require("multer");

// const router = createRouter();

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const [data] = await UsersModel.getAllBerita();
      // const imageData = imageDataRaw.gambar;
      const jsonData = JSON.stringify(data);

      const imageBuffer = Buffer.from(data[0].gambar, "base64");
      const titleDecode = atob(data[0].title);
      const deskripsiDecode = atob(data[0].deskripsi);
      const sumberDecode = atob(data[0].sumber);
      // fs.writeFileSync("tes.jpg", imageBuffer);

      res.json({
        status: 200,
        message: "GET all berita sukses",
        // data: [
        //   {
        //     title: titleDecode,
        //     deskripsi: deskripsiDecode,
        //     sumber: sumberDecode,
        //     gambar: imageBuffer,
        //   },
        // ],
        data: data,
      });
    } catch (error) {
      res.status(500).json({
        message: "GET all berita gagal",
        serverMessage: error,
      });
    }
  } else if (req.method === "POST") {
    const { body } = req;
    try {
      await UsersModel.createNewBerita(body);
      res.status(201).json({
        status: 201,
        message: "CREATE new berita sukses",
        data: req.body.gambar,
      });
    } catch (error) {
      res.status(500).json({
        message: "CREATE new berita gagal",
        serverMessage: error,
      });
    }
  }
}
