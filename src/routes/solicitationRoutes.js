import { Router } from "express";
import { solicitationController } from "../controllers/solicitationController.js";

const router = Router();

router.post("/", solicitationController.create);
router.get("/", solicitationController.findAll);
router.get("/:id", solicitationController.findById);
router.put("/:id", solicitationController.update);
router.delete("/:id", solicitationController.delete);

export default router;
