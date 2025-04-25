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

  async findAll(req, res) {
    const {
      deleted,
      urgency,
      startDate,
      endDate,
      requester,
      filial,
      status,
      page = 1,
      limit = 10,
    } = req.query;

    try {
      console.log("REQ.QUERY ===>", req.query);

      const whereConditions = {
        statusDelete: deleted === "true",
      };

      if (urgency) whereConditions.urgency = urgency;

      if (startDate && endDate) {
        const start = new Date(startDate);
        const end = new Date(endDate);

        if (isNaN(start) || isNaN(end)) {
          return res.status(400).json({ error: "Datas inválidas fornecidas." });
        }

        whereConditions.createdAt = {
          gte: start,
          lte: end,
        };
      }

      if (requester) whereConditions.userName = requester;
      if (filial) whereConditions.filial = filial;
      if (status) whereConditions.status = status;

      console.log("FILTRO FINAL ===>", whereConditions);

      const total = await prisma.solicitation.count({ where: whereConditions });
      console.log("QUANTIDADE DE RESULTADOS:", total);

      const solicitations = await prisma.solicitation.findMany({
        where: whereConditions,
        skip: (page - 1) * limit,
        take: limit,
      });

      res.json(solicitations);
    } catch (error) {
      console.error("Erro ao buscar solicitações:", error);
      res.status(500).json({ error: "Erro interno ao buscar solicitações." });
    }
  },

  async findById(req, res) {
    try {
      const solicitation = await prisma.solicitation.findUnique({
        where: { id: req.params.id },
      });

      if (!solicitation) {
        return res.status(404).json({ error: "Solicitação não encontrada." });
      }

      res.json(solicitation);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

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

  async deleteSolicitation(req, res) {
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

  async lastNumber(req, res) {
    try {
      const last = await prisma.solicitation.findFirst({
        orderBy: {
          numSol: "desc",
        },
      });

      console.log("Último número:", last?.numSol);

      res.json(last?.numSol || 0);
    } catch (error) {
      console.error("Erro ao buscar último número:", error);
      res.status(500).json({ error: "Erro interno ao buscar número." });
    }
  },
};

// Exportando com alias para deleteSolicitation
export default {
  create: solicitationController.create,
  findAll: solicitationController.findAll,
  findById: solicitationController.findById,
  update: solicitationController.update,
  delete: solicitationController.deleteSolicitation,
  lastNumber: solicitationController.lastNumber,
};
