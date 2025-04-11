import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const filialController = {
  // Criar nova filial
  async create(req, res) {
    try {
      const filial = await prisma.filial.create({
        data: req.body,
      });
      res.json(filial);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  async findAll(req, res) {
    const { deleted } = req.query;

    try {
      const filial = await prisma.filial.findMany({
        where: {
          statusDelete: deleted === "true" ? true : false,
        },
      });

      res.json(filial);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  // Atualizar filial
  async update(req, res) {
    try {
      const filial = await prisma.filial.update({
        where: { id: req.params.id },
        data: req.body,
      });
      res.json(filial);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },
};
