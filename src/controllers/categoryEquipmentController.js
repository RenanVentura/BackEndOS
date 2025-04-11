import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const categoryEquipmentController = {
  // Criar nova categoria
  async create(req, res) {
    try {
      const category = await prisma.categoryEquipment.create({
        data: req.body,
      });
      res.json(category);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  // Listar todas categorias

  async findAll(req, res) {
    const { deleted } = req.query;

    try {
      const category = await prisma.categoryEquipment.findMany({
        where: {
          statusDelete: deleted === "true" ? true : false,
        },
      });

      res.json(category);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },
  // Atualizar categoria
  async update(req, res) {
    try {
      const category = await prisma.categoryEquipment.update({
        where: { id: req.params.id },
        data: req.body,
      });
      res.json(category);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },
};
