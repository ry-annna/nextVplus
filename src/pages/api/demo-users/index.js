const UsersModel = require("./models/demo-akun.js");
import { createRouter } from "next-connect";

const router = createRouter();

router
  .use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "POST, GET");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    next();
  })
  .get(async (req, res) => {
    try {
      const [data] = await UsersModel.getAllUsers();

      res.json({
        status: 200,
        message: "GET all users sukses",
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
        data: data,
      });
    } catch (error) {
      res.status(500).json({
        status: 500,
        message: "GET all users gagal",
        serverMessage: error,
      });
    }
  })
  .post(async (req, res) => {
    try {
      await UsersModel.createNewUser(req.body);
      res.status(201).json({
        status: 201,
        message: "CREATE new user sukses",
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      });
    } catch (error) {
      res.status(500).json({
        status: 500,
        message: "CREATE new user gagal",
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

// export const config = {
//   api: {
//     bodyParser: false,
//   },
// };
