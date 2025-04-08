import { Router } from "express";
import { filialController } from "../controllers/filialController.js";
import { authenticateToken } from "../../middlewares/auth.js";

const router = Router();

router.post("/", authenticateToken, filialController.create);
router.get("/", authenticateToken, filialController.findAll);
router.put("/:id", authenticateToken, filialController.update);

export default router;
