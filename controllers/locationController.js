import Location from '../models/location.js';

// Obtener todas las locaciones
export const getAllLocations = async (req, res) => {
    try {
        const locations = await Location.find();
        res.json(locations);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Obtener una locación por ID
export const getLocationById = async (req, res) => {
    try {
        const location = await Location.findById(req.params.id);
        if (!location) return res.status(404).json({ message: 'Location not found' });
        res.json(location);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Crear una nueva locación
export const createLocation = async (req, res) => {
    const location = new Location(req.body);
    try {
        const newLocation = await location.save();
        res.status(201).json(newLocation);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Actualizar una locación
export const updateLocation = async (req, res) => {
    try {
        const updatedLocation = await Location.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedLocation) return res.status(404).json({ message: 'Location not found' });
        res.json(updatedLocation);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Eliminar una locación
export const deleteLocation = async (req, res) => {
    try {
        const deletedLocation = await Location.findByIdAndDelete(req.params.id);
        if (!deletedLocation) return res.status(404).json({ message: 'Location not found' });
        res.json({ message: 'Location deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


