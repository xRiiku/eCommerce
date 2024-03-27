import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const { MONGO_URI } = process.env;


export const initDB = () => {
    mongoose.connect(MONGO_URI, {
        authSource: "admin",
    });

    const db = mongoose.connection;
    db.on("error", console.error.bind(console, "Error de conexión a MongoDB:"));
    db.once("open", () => {
        console.log("Conexión exitosa a MongoDB");
    });
};