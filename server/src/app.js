import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import cors from "cors";

import authRoutes from "./routes/auth.routes.js";
import alumnosRoutes from "./routes/alumnos.routes.js";
import planRoutes from "./routes/plan.routes.js";
import { FRONTEND_URL } from "./config.js";

const app = express();

//middlewares
//app.use(
//    cors({
//        origin: "http://localhost:5173",
//        credentials: true,
//    })
//);
//app.use(
//    cors({
//        credentials: true,
//        origin: FRONTEND_URL,
//    })
//);
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use(cookieParser());

// TESTING
app.get("/test", (req, res) => {
    res.json({ mensaje: "hola" });
});

app.use("/api/auth", authRoutes);
app.use("/api", alumnosRoutes);
app.use("/api", planRoutes);

export default app;
