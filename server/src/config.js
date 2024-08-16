/*
    process.env.PORT -> es para que detecte el puerto del servidor.
*/

export const PORT = process.env.PORT || 4000;
export const MONGODB_URI =
    process.env.MONGODB_URI ||
    "mongodb+srv://sinfronteras:3FlkqeWld1irBtC7@sinfronteras.5lqm1.mongodb.net/sinfronteras?retryWrites=true&w=majority&appName=sinfronteras";
export const TOKEN_SECRET = process.env.TOKEN_SECRET || "secret";

export const FRONTEND_URL = process.env.FRONTEND_URL || "http://localhost:5173";

//export const TOKEN_SECRET = "some secret key";
