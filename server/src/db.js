import mongoose from "mongoose";
import { DB_PORT, DB_URL } from "./config.js";
//import Alumno from "./models/alumno.model.js";

export const connectDB = async () => {
    try {
        await mongoose.connect(DB_URL);
        console.log("MongoDB is connected");
        console.log("Server running on port " + DB_PORT);
    } catch (error) {
        console.error(error);
    }
};
