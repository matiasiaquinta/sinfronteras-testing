import mongoose from "mongoose";
import { MONGODB_URI } from "./config.js";
//import Alumno from "./models/alumno.model.js";

export const connectDB = async () => {
    try {
        await mongoose.connect(MONGODB_URI);
        console.log("MongoDB is connected");

        const alumnos = await Alumno.find();
        console.log("encontrados:", alumnos);
    } catch (error) {
        console.error(error);
    }
};

//import mongoose from "mongoose";
//
//export const connectDB = async () => {
//    try {
//        await mongoose.connect("mongodb://localhost/sinfronteras-prueba");
//        console.log(">>> DB is connected");
//    } catch (error) {
//        console.log(error);
//    }
//};
