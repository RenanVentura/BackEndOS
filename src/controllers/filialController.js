import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const filialController = {
  async create(req, res) {
    try {
      const { name } = req.body;
      const filial = await prisma.filial.create({
        data: {
          name,
          statusDelete: false,
        },
      });
      res.status(201).json(filial);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  async findAll(req, res) {
    try {
      const { status } = req.query;
      const filiais = await prisma.filial.findMany({
        where: {
          statusDelete: status === "inactive" ? true : false,
        },
        orderBy: {
          name: "asc",
        },
      });
      res.json(filiais);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async update(req, res) {
    try {
      const { id } = req.params;
      const { name } = req.body;

      const filial = await prisma.filial.update({
        where: { id },
        data: { name },
      });
      res.json(filial);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  async toggleStatus(req, res) {
    try {
      const { id } = req.params;
      const filial = await prisma.filial.findUnique({ where: { id } });

      if (!filial) {
        return res.status(404).json({ error: "Filial não encontrada" });
      }

      const updatedFilial = await prisma.filial.update({
        where: { id },
        data: { statusDelete: !filial.statusDelete },
      });

      res.json(updatedFilial);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },
};
