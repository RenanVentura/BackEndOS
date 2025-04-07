import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const solicitationHistoricController = {
  // Criar nova solicitação
  async create(req, res) {
    try {
      const solicitationsHistoric = await prisma.solicitationHistoric.create({
        data: req.body,
      });
      res.json(solicitationsHistoric);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  // Listar todas solicitações
  async findAll(req, res) {
    try {
      const solicitationsHistoric =
        await prisma.solicitationHistoric.findMany();
      res.json(solicitationsHistoric);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  // Buscar solicitação por ID
  async findById(req, res) {
    try {
      const solicitationsHistoric =
        await prisma.solicitationHistoric.findUnique({
          where: { id: req.params.id },
        });
      res.json(solicitationsHistoric);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  // Atualizar solicitação
  async update(req, res) {
    try {
      const solicitationsHistoric = await prisma.solicitationHistoric.update({
        where: { id: req.params.id },
        data: req.body,
      });
      res.json(solicitationsHistoric);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  // Deletar solicitação (soft delete)
  async delete(req, res) {
    try {
      const solicitationsHistoric = await prisma.solicitationHistoric.update({
        where: { id: req.params.id },
        data: { statusDelete: true },
      });
      res.json(solicitationsHistoric);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },
};
