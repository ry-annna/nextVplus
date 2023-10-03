const UsersModel = require("./models/index.js");
import { createRouter } from "next-connect";
const cors = require("cors");
const nextCors = require("nextjs-cors");
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
  origin: ["http://localhost:3000", "https://vplus.id", "https://www.vplus.id"],
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

const corsConfig = {
  credentials: true,
  origin: true,
};

router
  // .use(cors(corsOptions))
  .use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "POST, GET");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    next();
  })
  .get(async (req, res) => {
    // const origin = req.headers.get("origin");
    try {
      const [data] = await UsersModel.getAllBerita();

      // const resData = await data.JSON();

      res.json({
        status: 200,
        message: "GET all berita sukses",
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
        data: [...data],
      });
    } catch (error) {
      res.status(500).json({
        status: 500,
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
