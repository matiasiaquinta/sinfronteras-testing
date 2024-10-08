import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import cors from "cors";
import pg from "pg";
import path from "path"; // Asegúrate de importar `path` para `res.sendFile`
import {
    DB_DATABASE,
    DB_HOST,
    DB_PASSWORD,
    DB_PORT,
    DB_USER,
    FRONTEND_URL,
    PORT,
} from "./config.js";

import authRoutes from "./routes/auth.routes.js";
import alumnosRoutes from "./routes/alumnos.routes.js";
import planRoutes from "./routes/plan.routes.js";

const app = express();
const pool = new pg.Pool({
    host: DB_HOST,
    database: DB_DATABASE,
    user: DB_USER,
    password: DB_PASSWORD,
    port: DB_PORT,
});

// Middlewares
app.use(
    cors({
        origin: FRONTEND_URL,
        credentials: true, // Si necesitas que las cookies sean enviadas entre el frontend y backend
    })
);
app.use(express.json());
app.use(morgan("dev"));
app.use(cookieParser());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api", alumnosRoutes);
app.use("/api", planRoutes);

// Serve frontend (React app)
/* app.use(express.static(path.join(__dirname, "build")));
 */
/* app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "build", "index.html"));
}); */

// Testing endpoints
app.get("/users", async (req, res) => {
    const result = await pool.query("SELECT NOW()");
    console.log(result);

    res.send({
        users: [],
    });
});

app.get("/ping", async (req, res) => {
    const result = await pool.query("SELECT NOW()");

    res.send({
        pong: result.rows[0].now,
    });
});

export default app;

/* import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import cors from "cors";
import pg from "pg";
import {
    DB_DATABASE,
    DB_HOST,
    DB_PASSWORD,
    DB_PORT,
    DB_USER,
    FRONTEND_URL,
    PORT,
} from "./config.js";

import authRoutes from "./routes/auth.routes.js";
import alumnosRoutes from "./routes/alumnos.routes.js";
import planRoutes from "./routes/plan.routes.js";
//import { FRONTEND_URL } from "./config.js";

const app = express();
const pool = new pg.Pool({
    host: DB_HOST,
    database: DB_DATABASE,
    user: DB_USER,
    password: DB_PASSWORD,
    port: DB_PORT,
});

//middlewares
//app.use(
//    cors({
//        origin: "http://localhost:5173",
//        credentials: true,
//    })
//);
app.use(
    cors({
        origin: FRONTEND_URL,
        credentials: true, // si necesitas que las cookies sean enviadas entre el frontend y backend
    })
);
// Catch-all para rutas no manejadas, devuelve el index.html
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "build", "index.html"));
});

//app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use(cookieParser());

// TESTING
app.get("/users", async (req, res) => {
    const result = await pool.query("SELECT NOW()");
    console.log(result);

    res.send({
        users: [],
    });
});

app.get("/ping", async (req, res) => {
    const result = await pool.query("SELECT NOW()");

    res.send({
        pong: result.rows[0].now,
    });
});

app.listen(PORT, () => {
    console.log("server started on port 3000");
});

app.use("/api/auth", authRoutes);
app.use("/api", alumnosRoutes);
app.use("/api", planRoutes);

export default app; */
