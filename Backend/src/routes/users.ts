import { Router } from "express";
import { saveUsers } from "../controllers/users";

const router = Router();

router.get("/", (req, res) => {
  res.status(200).json({
    msg: "Bienvenidos a Tu Hotel",
  });
});

router.post("/guardar-usuarios", saveUsers);

router.get("*", (req, res) => {
  res.status(404).json({
    msg: "Error 404 | Page Not Found",
  });
});

export default router;
