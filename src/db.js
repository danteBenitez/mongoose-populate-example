import mongoose from "mongoose";

export async function connectToDb() {
    try {
        await mongoose.connect(process.env.DB_URI);
        console.log('Conexión exitosa a base de datos');
    } catch(err) {
        console.log('Error al conectar a base de datos: ', err);
    }
}