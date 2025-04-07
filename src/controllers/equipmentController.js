import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const equipmentController = {
  // Criar novo equipamento
  async create(req, res) {
    try {
      const equipment = await prisma.equipment.create({
        data: req.body,
      });
      res.json(equipment);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  // Listar todos equipamentos
  async findAll(req, res) {
    try {
      const equipments = await prisma.equipment.findMany();
      res.json(equipments);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  // Buscar equipamento por ID
  async findById(req, res) {
    try {
      const equipment = await prisma.equipment.findUnique({
        where: { id: req.params.id },
      });
      res.json(equipment);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  // Atualizar equipamento
  async update(req, res) {
    try {
      const equipment = await prisma.equipment.update({
        where: { id: req.params.id },
        data: req.body,
      });
      res.json(equipment);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },
};
