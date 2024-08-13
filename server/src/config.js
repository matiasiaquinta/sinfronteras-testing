/*
    process.env.PORT -> es para que detecte el puerto del servidor.
*/

//export const PORT = process.env.PORT || 4000;
export const PORT = process.env.PORT || "https://sinfronteras-testing-backend.onrender.com";
export const MONGODB_URI =
    process.env.MONGODB_URI || "mongodb://localhost/sinfronteras-prueba";
export const TOKEN_SECRET = process.env.TOKEN_SECRET || "secret";

export const FRONTEND_URL = process.env.FRONTEND_URL || "http://localhost:5173";

//export const TOKEN_SECRET = "some secret key";
