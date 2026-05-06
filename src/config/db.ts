import mongoose from 'mongoose'
import colors from 'colors'


import { setServers } from 'node:dns/promises'
setServers(["1.1.1.1", "8.8.8.8"]);

export const connectDB = async () => {
    try {
        const {connection} = await mongoose.connect(process.env.MONGO_URI)
        const url = `${connection.host}:${connection.port}`
        console.log(colors.cyan.bold(`MongoDB Conectado en ${url}`))
    } catch (error) {
        console.log(colors.bgRed.white.bold(error.message))
        process.exit(1);
    }
}