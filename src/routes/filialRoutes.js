import { Router } from "express";
import { filialController } from "../controllers/filialController.js";

const router = Router();

router.post("/", filialController.create);
router.get("/", filialController.findAll);
router.put("/:id", filialController.update);

export default router;
