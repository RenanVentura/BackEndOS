import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const prisma = new PrismaClient();

// Criar novo usuário
export const create = async (req, res) => {
  try {
    const {
      email,
      name,
      password,
      levelUser,
      statusDelete,
      filial,
      costCenter,
    } = req.body;

    // Verifica se já existe um usuário com o mesmo email
    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ message: "E-mail já cadastrado" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: {
        email,
        name,
        password: hashedPassword,
        levelUser,
        statusDelete,
        filial,
        costCenter,
      },
    });

    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Listar todos os usuários
export const findAll = async (req, res) => {
  try {
    const users = await prisma.user.findMany();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Atualizar um usuário
export const update = async (req, res) => {
  try {
    const { email, name, password, levelUser, statusDelete, costCenter } =
      req.body;

    let updatedData = {
      email,
      name,
      levelUser,
      statusDelete,
      costCenter,
    };

    // Se for enviada nova senha, criptografa
    if (password) {
      updatedData.password = await bcrypt.hash(password, 10);
    }

    const user = await prisma.user.update({
      where: { id: req.params.id },
      data: updatedData,
    });

    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Login de usuário
export const login = async (req, res) => {
  const { email, senha } = req.body;

  try {
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      return res.status(401).json({ message: "Usuário não encontrado" });
    }

    const senhaCorreta = await bcrypt.compare(senha, user.password);

    if (!senhaCorreta) {
      return res.status(401).json({ message: "Senha incorreta" });
    }

    const token = jwt.sign(
      { id: user.id, nivel: user.levelUser },
      "seuSegredoJWT", // Substitua por process.env.JWT_SECRET em produção
      { expiresIn: "1h" }
    );

    res.json({ token, nivel: user.levelUser });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
