import { Router } from "express";
import userRoutes from "./userRoutes.js";
import solicitationRoutes from "./solicitationRoutes.js";
import equipmentRoutes from "./equipmentRoutes.js";
import filialRoutes from "./filialRoutes.js";
import categoryEquipmentRoutes from "./categoryEquipmentRoutes.js";
import solicitationHistoricRoutes from "./solicitationHistoricRoutes.js";

const router = Router();

router.use("/users", userRoutes);
router.use("/solicitation", solicitationRoutes);
router.use("/Equipament", equipmentRoutes);
router.use("/filial", filialRoutes);
router.use("/categoryEquipment", categoryEquipmentRoutes);
router.use("/solicitationHistoric", solicitationHistoricRoutes);

export default router;
