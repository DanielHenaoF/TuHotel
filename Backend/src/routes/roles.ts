import { Router } from "express";
import { saveRoles } from "../controllers/roles";

const router = Router();

router.post("/guardar-roles", saveRoles);

export default router;