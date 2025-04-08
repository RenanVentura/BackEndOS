import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const solicitationController = {
  async create(req, res) {
    try {
      const { name, filial, costCenter } = req.user;

      const solicitation = await prisma.solicitation.create({
        data: {
          ...req.body,
          userName: name,
          filial,
          costCenter,
        },
      });

      res.status(201).json(solicitation);
    } catch (error) {
      console.error("Erro ao criar solicitação:", error);
      res.status(500).json({ error: "Erro interno ao criar solicitação." });
    }
  },
  // Listar todas solicitações
  async findAll(req, res) {
    try {
      const solicitations = await prisma.solicitation.findMany();
      res.json(solicitations);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  // Buscar solicitação por ID
  async findById(req, res) {
    try {
      const solicitation = await prisma.solicitation.findUnique({
        where: { id: req.params.id },
      });
      res.json(solicitation);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  // Atualizar solicitação
  async update(req, res) {
    try {
      const solicitation = await prisma.solicitation.update({
        where: { id: req.params.id },
        data: req.body,
      });
      res.json(solicitation);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  // Deletar solicitação (soft delete)
  async delete(req, res) {
    try {
      const solicitation = await prisma.solicitation.update({
        where: { id: req.params.id },
        data: { statusDelete: true },
      });
      res.json(solicitation);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },
};
