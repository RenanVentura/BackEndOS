import { Router } from "express";
import { equipmentController } from "../controllers/equipmentController.js";
import { authenticateToken } from "../../middlewares/auth.js";

const router = Router();

router.post("/", authenticateToken, equipmentController.create);
router.get("/", authenticateToken, equipmentController.findAll);
router.get("/:id", authenticateToken, equipmentController.findById);
router.put("/:id", authenticateToken, equipmentController.update);

export default router;
