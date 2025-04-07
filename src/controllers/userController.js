// userController.js
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const create = async (req, res) => {
  try {
    const user = await prisma.user.create({
      data: {
        email: req.body.email,
        name: req.body.name,
        password: req.body.password,
        levelUser: req.body.levelUser,
        statusDelete: req.body.statusDelete,
        filial: req.body.filial,
      },
    });
    res.json(user);
  } catch (error) {
    res.json({ error: error.message });
  }
};

export const findAll = async (req, res) => {
  try {
    const users = await prisma.user.findMany();
    res.json(users);
  } catch (error) {
    res.json({ error: error.message });
  }
};

export const update = async (req, res) => {
  try {
    const user = await prisma.user.update({
      where: { id: req.params.id },
      data: {
        email: req.body.email,
        name: req.body.name,
        password: req.body.password,
        levelUser: req.body.levelUser,
        statusDelete: req.body.statusDelete,
      },
    });
    res.json(user);
  } catch (error) {
    res.json({ error: error.message });
  }
};
