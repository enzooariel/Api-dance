import express from 'express';
import {
    getAllLocations,
    getLocationById,
    createLocation,
    updateLocation,
    deleteLocation
} from '../controllers/locationController.js';
import auth from '../middleware/auth.js';

const router = express.Router();

router.get('/', auth, getAllLocations);
router.get('/:id', auth, getLocationById);
router.post('/', auth, createLocation);
router.put('/:id', auth, updateLocation);
router.delete('/:id', auth, deleteLocation);

export default router;