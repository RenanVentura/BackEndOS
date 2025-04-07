import { Router } from "express";
import { solicitationHistoricController } from "../controllers/solicitationHistoricController.js";

const router = Router();

router.post("/", solicitationHistoricController.create);
router.get("/", solicitationHistoricController.findAll);
router.get("/:id", solicitationHistoricController.findById);
router.put("/:id", solicitationHistoricController.update);
router.delete("/:id", solicitationHistoricController.delete);

export default router;
