import { Router } from "express";
import { equipmentController } from "../controllers/equipmentController.js";

const router = Router();

router.post("/", equipmentController.create);
router.get("/", equipmentController.findAll);
router.get("/:id", equipmentController.findById);
router.put("/:id", equipmentController.update);

export default router;
