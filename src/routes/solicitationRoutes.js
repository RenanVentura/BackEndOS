import { Router } from "express";
import solicitationController from "../controllers/solicitationController.js";
import { authenticateToken } from "../../middlewares/auth.js";

const router = Router();

router.post("/", authenticateToken, solicitationController.create);
router.get("/", authenticateToken, solicitationController.findAll);
router.get("/last", authenticateToken, solicitationController.lastNumber);
router.get("/:id", authenticateToken, solicitationController.findById);
router.put("/:id", authenticateToken, solicitationController.update);
router.delete("/:id", authenticateToken, solicitationController.delete);

export default router;
