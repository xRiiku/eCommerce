import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

import userRoutes from './routes/user.route.js'
import authRoutes  from './routes/auth.route.js'


const app = express();
const PORT = 3001;
const URL = process.env.URL || 'http://localhost';

dotenv.config()
mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    console.log("Connected to MongoDB")
})
.catch((err)=>{
    console.log(err)
})

const allowedOrigins = ['http://localhost:5173', 'https://eCommerce.rikudev.com', 'https://e-commerce-rust-nu.vercel.app'];

const corsOptions = {
  origin: function(origin, callback) {
    // Verificar si el origen de la solicitud está en la lista permitida
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
},
  credentials: true, // Permitir credenciales
}

app.use(express.json());
app.use(cookieParser())
app.use(cors(corsOptions));

app.use("/user", userRoutes)
app.use("/auth", authRoutes)

app.get('/', (req, res) => {
    res.send('Home');
});

app.listen(PORT, () => {
    console.log(`Server listening on ${URL}:${PORT}`);
});

/* middleWare para el manejo de errores */
app.use((err, req, res, next)=>{
    const statusCode = err.statusCode || 500
    const message = err.message || 'Internal Server Error'
    return res.status(statusCode).json({
        success: false,
        message,
        statusCode: statusCode
    })
})