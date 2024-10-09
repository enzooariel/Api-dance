import express from 'express';
import mongoose from 'mongoose';
import path from 'path';
import { fileURLToPath } from 'url';
import danceStyleRoutes from './routes/danceStyleRoutes.js';
import locationRoutes from './routes/locationRoutes.js';
import authRoutes from './routes/authRoutes.js';

const app = express();
const PORT = process.env.PORT || 3000;

// Definir __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware
app.use(express.json());

// Servir archivos estáticos
app.use(express.static(path.join(__dirname, 'views')));

// Routes
app.use('/api/dance-styles', danceStyleRoutes);
app.use('/api/locations', locationRoutes);
app.use('/api/auth', authRoutes);

// Página Principal
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// Conectar a MongoDB
mongoose.connect('mongodb://localhost:27017/dance-api', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}).catch(err => {
    console.error('Connection error', err);
});