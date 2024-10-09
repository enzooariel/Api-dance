import express from 'express';
import {
    getAllDanceStyles,
    getDanceStyleById,
    createDanceStyle,
    updateDanceStyle,
    deleteDanceStyle
} from '../controllers/danceStyleController.js';
import auth from '../middleware/auth.js';

const router = express.Router();

router.get('/', auth, getAllDanceStyles);
router.get('/:id', auth, getDanceStyleById);
router.post('/', auth, createDanceStyle);
router.put('/:id', auth, updateDanceStyle);
router.delete('/:id', auth, deleteDanceStyle);

export default router;