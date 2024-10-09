import DanceStyle from '../models/danceStyle.js';

// Obtener todos los estilos de danza
export const getAllDanceStyles = async (req, res) => {
    try {
        const danceStyles = await DanceStyle.find();
        res.json(danceStyles);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Obtener un estilo de danza por ID
export const getDanceStyleById = async (req, res) => {
    try {
        const danceStyle = await DanceStyle.findById(req.params.id);
        if (!danceStyle) return res.status(404).json({ message: 'Dance style not found' });
        res.json(danceStyle);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Crear un nuevo estilo de danza
export const createDanceStyle = async (req, res) => {
    const danceStyle = new DanceStyle(req.body);
    try {
        const newDanceStyle = await danceStyle.save();
        res.status(201).json(newDanceStyle);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Actualizar un estilo de danza
export const updateDanceStyle = async (req, res) => {
    try {
        const updatedDanceStyle = await DanceStyle.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedDanceStyle) return res.status(404).json({ message: 'Dance style not found' });
        res.json(updatedDanceStyle);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Eliminar un estilo de danza
export const deleteDanceStyle = async (req, res) => {
    try {
        const deletedDanceStyle = await DanceStyle.findByIdAndDelete(req.params.id);
        if (!deletedDanceStyle) return res.status(404).json({ message: 'Dance style not found' });
        res.json({ message: 'Dance style deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

