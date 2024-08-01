import { Router } from "express";
import {
  createHotel,
  createRoom,
  updateHotel,
  updateRoom,
  deleteHotel,
  deleteRoom,
} from "../controllers/admin";

const router = Router();

router.post("/hotels", createHotel);
router.put("/hotels/:id", updateHotel);
router.delete("/hotels/:id", deleteHotel);

router.post("/rooms", createRoom);
router.put("/rooms/:id", updateRoom);
router.delete("/rooms/:id", deleteRoom);