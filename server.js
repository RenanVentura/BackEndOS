import express from "express";
import cors from "cors";
import routes from "./src/routes/index.js";

const app = express();

app.use(express.json());
const allowedOrigins = [
  "http://localhost:5173",
  "https://front-end-os.vercel.app",
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true, // caso use cookies ou headers personalizados
  })
);
app.use("/api", routes);

app.listen(3000);
