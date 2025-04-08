import { Router } from "express";
import { categoryEquipmentController } from "../controllers/categoryEquipmentController.js";
import { authenticateToken } from "../../middlewares/auth.js";

const router = Router();

router.post("/", authenticateToken, categoryEquipmentController.create);
router.get("/", authenticateToken, categoryEquipmentController.findAll);
router.put("/:id", authenticateToken, categoryEquipmentController.update);

export default router;
