import express from "express";
import { PrismaClient } from "@prisma/client";
import cors from "cors";

const prisma = new PrismaClient();

const app = express();
app.use(express.json());
app.use(cors({ origin: "http://localhost:5173" }));

// ----------------------------------------------------- Rota POST
app.post("/users", async (req, res) => {
  await prisma.user
    .create({
      data: {
        email: req.body.email,
        name: req.body.name,
        password: req.body.password,
        levelUser: req.body.levelUser,
        statusDelete: req.body.statusDelete,
        filial: req.body.filial,
      },
    })
    .then((user) => {
      res.json(user);
    })
    .catch((error) => {
      res.json({ error: error.message });
    });
});

app.post("/solicitation", async (req, res) => {
  await prisma.solicitation
    .create({
      data: {
        numSol: req.body.numSol,
        userName: req.body.userName,
        filial: req.body.filial,
        urgency: req.body.urgency,
        atendedAt: req.body.atendedAt,
        categoryEquipment: req.body.categoryEquipment,
        tagEquipment: req.body.tagEquipment,
        equipment: req.body.equipment,
        categoryService: req.body.categoryService,
        description: req.body.description,
        status: req.body.status,
        statusDelete: req.body.statusDelete,
        costCenter: req.body.costCenter,
      },
    })
    .then((solicitation) => {
      res.json(solicitation);
    })
    .catch((error) => {
      res.json({ error: error.message });
    });
});

app.post("/solicitationHistoric", async (req, res) => {
  await prisma.solicitationHistoric
    .create({
      data: {
        numSol: req.body.numSol,
        userName: req.body.userName,
        filial: req.body.filial,
        urgency: req.body.urgency,
        atendedAt: req.body.atendedAt,
        categoryEquipment: req.body.categoryEquipment,
        tagEquipment: req.body.tagEquipment,
        equipment: req.body.equipment,
        categoryService: req.body.categoryService,
        description: req.body.description,
        status: req.body.status,
        statusDelete: req.body.statusDelete,
        costCenter: req.body.costCenter,
      },
    })
    .then((solicitation) => {
      res.json(solicitation);
    })
    .catch((error) => {
      res.json({ error: error.message });
    });
});

app.post("/categoryEquipment", async (req, res) => {
  await prisma.categoryEquipment
    .create({
      data: {
        name: req.body.name,
        statusDelete: req.body.statusDelete,
      },
    })
    .then((categoryEquipment) => {
      res.json(categoryEquipment);
    })
    .catch((error) => {
      res.json({ error: error.message });
    });
});

app.post("/Equipament", async (req, res) => {
  await prisma.equipment
    .create({
      data: {
        tagEquipment: req.body.tagEquipment,
        name: req.body.name,
        filial: req.body.filial,
        statusDelete: req.body.statusDelete,
        categoryEquipment: req.body.categoryEquipment,
      },
    })
    .then((equipament) => {
      res.json(equipament);
    })
    .catch((error) => {
      res.json({ error: error.message });
    });
});

app.post("/filial", async (req, res) => {
  await prisma.filial
    .create({
      data: {
        name: req.body.name,
        statusDelete: req.body.statusDelete,
      },
    })
    .then((filial) => {
      res.json(filial);
    })
    .catch((error) => {
      res.json({ error: error.message });
    });
});

// ----------------------------------------------------- Rota GET
app.get("/users", async (req, res) => {
  const users = await prisma.user
    .findMany()
    .then((users) => {
      res.json(users);
    })
    .catch((error) => {
      res.json({ error: error.message });
    });
});

app.get("/solicitation", async (req, res) => {
  const solicitation = await prisma.solicitation
    .findMany()
    .then((solicitation) => {
      res.json(solicitation);
    })
    .catch((error) => {
      res.json({ error: error.message });
    });
});

app.get("/solicitationHistoric", async (req, res) => {
  const solicitation = await prisma.solicitationHistoric
    .findMany()
    .then((solicitation) => {
      res.json(solicitation);
    })
    .catch((error) => {
      res.json({ error: error.message });
    });
});

app.get("/categoryEquipment", async (req, res) => {
  const categoryEquipment = await prisma.categoryEquipment
    .findMany()
    .then((categoryEquipment) => {
      res.json(categoryEquipment);
    })
    .catch((error) => {
      res.json({ error: error.message });
    });
});

app.get("/Equipament", async (req, res) => {
  const equipament = await prisma.equipment
    .findMany()
    .then((equipament) => {
      res.json(equipament);
    })
    .catch((error) => {
      res.json({ error: error.message });
    });
});

app.get("/filial", async (req, res) => {
  const filial = await prisma.filial
    .findMany()
    .then((filial) => {
      res.json(filial);
    })
    .catch((error) => {
      res.json({ error: error.message });
    });
});

// ----------------------------------------------------- Rota PUT
app.put("/users/:id", async (req, res) => {
  await prisma.user
    .update({
      where: { id: req.params.id },
      data: {
        email: req.body.email,
        name: req.body.name,
        password: req.body.password,
        levelUser: req.body.levelUser,
        statusDelete: req.body.statusDelete,
      },
    })
    .then((user) => {
      res.json(user);
    })
    .catch((error) => {
      res.json({ error: error.message });
    });
});

app.put("/solicitation/:id", async (req, res) => {
  await prisma.solicitation
    .update({
      where: { id: req.params.id },
      data: {
        userName: req.body.userName,
        filial: req.body.filial,
        urgency: req.body.urgency,
        atendedAt: req.body.atendedAt,
        categoryEquipment: req.body.categoryEquipment,
        equipment: req.body.equipment,
        categoryService: req.body.categoryService,
        description: req.body.description,
        status: req.body.status,
        statusDelete: req.body.statusDelete,
      },
    })
    .then((solicitation) => {
      res.json(solicitation);
    })
    .catch((error) => {
      res.json({ error: error.message });
    });
});

app.put("/solicitationHistoric/:id", async (req, res) => {
  await prisma.solicitationHistoric
    .update({
      where: { id: req.params.id },
      data: {
        userName: req.body.userName,
        filial: req.body.filial,
        urgency: req.body.urgency,
        atendedAt: req.body.atendedAt,
        categoryEquipment: req.body.categoryEquipment,
        equipment: req.body.equipment,
        categoryService: req.body.categoryService,
        description: req.body.description,
        status: req.body.status,
        statusDelete: req.body.statusDelete,
      },
    })
    .then((solicitation) => {
      res.json(solicitation);
    })
    .catch((error) => {
      res.json({ error: error.message });
    });
});

app.put("/categoryEquipment/:id", async (req, res) => {
  await prisma.categoryEquipment
    .update({
      where: { id: req.params.id },
      data: {
        name: req.body.name,
        statusDelete: req.body.statusDelete,
      },
    })
    .then((categoryEquipment) => {
      res.json(categoryEquipment);
    })
    .catch((error) => {
      res.json({ error: error.message });
    });
});

app.put("/Equipament/:id", async (req, res) => {
  await prisma.equipment
    .update({
      where: { id: req.params.id },
      data: {
        tag: req.body.tag,
        name: req.body.name,
        filial: req.body.filial,
        statusDelete: req.body.statusDelete,
        categoryEquipment: req.body.categoryEquipment,
      },
    })
    .then((equipament) => {
      res.json(equipament);
    })
    .catch((error) => {
      res.json({ error: error.message });
    });
});

app.put("/filial/:id", async (req, res) => {
  await prisma.filial
    .update({
      where: { id: req.params.id },
      data: {
        name: req.body.name,
        statusDelete: req.body.statusDelete,
      },
    })
    .then((filial) => {
      res.json(filial);
    })
    .catch((error) => {
      res.json({ error: error.message });
    });
});

app.listen(3000);
