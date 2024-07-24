import { Router } from "express";
import { uploadStorage } from "../middlewares/upload";

const router = Router();

router.post("/upload", uploadStorage.single("fichero"), (req, res) => {
  res.send({ a: 1 });
});

export default router;
