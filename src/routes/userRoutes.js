import express from "express";
import {
  create,
  findAll,
  update,
  login,
} from "../controllers/userController.js";

const router = express.Router();

router.get("/", findAll);
router.post("/", create);
router.put("/:id", update);
router.post("/login", login);

export default router;
