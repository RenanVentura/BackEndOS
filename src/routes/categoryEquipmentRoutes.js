import { Router } from "express";
import { categoryEquipmentController } from "../controllers/categoryEquipmentController.js";

const router = Router();

router.post("/", categoryEquipmentController.create);
router.get("/", categoryEquipmentController.findAll);
router.put("/:id", categoryEquipmentController.update);

export default router;
