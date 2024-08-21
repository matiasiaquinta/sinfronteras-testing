/*
    process.env.PORT -> es para que detecte el puerto del servidor.
    token -> "secret"
    frontend_url -> "http://localhost:5173"
*/

//APP
/* export const PORT = process.env.PORT;

//MONGODB
export const DB_HOST = process.env.DB_HOST;
export const DB_DATABASE = process.env.DB_DATABASE;
export const DB_PORT = process.env.DB_PORT;
export const DB_URL = process.env.DB_URL;

export const FRONTEND_URL = process.env.FRONTEND_URL;
*/

//JWT
export const JWT_SECRET = process.env.JWT_SECRET;
export const JWT_EXPIRES = process.env.JWT_EXPIRES;

export const FRONTEND_URL = process.env.FRONTEND_URL || "http://localhost:5173";

export const DB_HOST = process.env.DB_HOST || "localhost";
export const DB_PORT = process.env.DB_PORT || 5444;
export const DB_DATABASE = process.env.DB_DATABASE || "postgres";
export const DB_USER = process.env.DB_USER || "postgres";
export const DB_PASSWORD = process.env.DB_PASSWORD || "mysecretpassword";

export const PORT = process.env.PORT || 4000;
