import fs from "fs";
import path from "path";

export default function handler(req, res) {
  // const { imageName } = req.query;
  const imageName = "1695956650970_Carousel 1.png";
  const imagePath = path.join(process.cwd(), "public", imageName);
  console.log(process.cwd() + "/public/" + imageName);

  fs.access(imagePath, fs.constants.F_OK, (err) => {
    if (err) {
      res.status(404).send("Image not found");
    } else {
      res.sendFile(imagePath);
    }
  });
}
