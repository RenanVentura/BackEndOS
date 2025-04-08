import { Router } from "express";
import { solicitationHistoricController } from "../controllers/solicitationHistoricController.js";
import { authenticateToken } from "../../middlewares/auth.js";

const router = Router();

router.post("/", authenticateToken, solicitationHistoricController.create);
router.get("/", authenticateToken, solicitationHistoricController.findAll);
router.get("/:id", authenticateToken, solicitationHistoricController.findById);
router.put("/:id", authenticateToken, solicitationHistoricController.update);
router.delete("/:id", authenticateToken, solicitationHistoricController.delete);

export default router;
