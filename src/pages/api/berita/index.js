const UsersModel = require("./models/index.js");
import { createRouter } from "next-connect";
const cors = require("cors");
const multer = require("multer");

const router = createRouter();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/gambarBerita");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "_" + file.originalname);
  },
});
const upload = multer({
  storage: storage,
});

const corsOptions = {
  credential: true,
  origin: "*",
  methods: ["GET", "OPTIONS", "PATCH", "DELETE", "POST", "PUT"],
  allowedHeaders: [
    "X-CSRF-Token",
    "X-Requested-With",
    "Accept",
    "Accept-Version",
    "Content-Length",
    "Content-MD5",
    "Content-Type",
    "Date",
    "X-Api-Version",
  ],
  optionsSuccessStatus: 200,
};

router
  .use(cors({ credentials: true, origin: "https://next-vplus.vercel.app" }))
  .get(async (req, res) => {
    try {
      const [data] = await UsersModel.getAllBerita();
      // console.log(data);
      // const imageData = imageDataRaw.gambar;
      // const imageBuffer = Buffer.from(data[0].gambar, "base64");
      // const titleDecode = atob(data[0].title);
      // const deskripsiDecode = atob(data[0].deskripsi);
      // const sumberDecode = atob(data[0].sumber);

      res.json({
        status: 200,
        message: "GET all berita sukses",
        data: [
          ...data,
          // {
          //   title: atob(data[0].title),
          //   deskripsi: atob(data[0].deskripsi),
          //   sumber: atob(data[0].sumber),
          // },
        ],
      });
    } catch (error) {
      res.status(500).json({
        message: "GET all berita gagal",
        serverMessage: error,
      });
    }
  })
  .post(upload.single("gambar"), async (req, res) => {
    try {
      await UsersModel.createNewBerita(req);
      res.status(201).json({
        status: 201,
        message: "CREATE new berita sukses",
      });
    } catch (error) {
      res.status(500).json({
        message: "CREATE new berita gagal",
        serverMessage: error,
      });
    }
  });

export default router.handler({
  onError: (err, req, res) => {
    console.error(err.stack);
    res.status(err.statusCode || 500).end(err.message);
  },
});

export const config = {
  api: {
    bodyParser: false,
  },
};
