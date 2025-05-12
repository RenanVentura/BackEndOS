import express from "express";
import cors from "cors";
import routes from "./src/routes/index.js";

const app = express();

app.use(express.json());
// app.use(cors({ origin: "http://localhost:5173" }));
app.use(cors({ origin: "https://front-end-os.vercel.app/" }));

app.use("/api", routes);

app.listen(3000);
