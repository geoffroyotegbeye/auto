import express from 'express';
import { body } from 'express-validator';
import { authenticateToken, isAdmin } from '../middleware/auth.js';
import * as appointmentController from '../controllers/appointmentController.js';

const router = express.Router();

// Route publique - Créer un RDV
router.post(
  '/',
  [
    body('type').isIn(['showroom', 'sav']).withMessage('Type invalide'),
    body('first_name').notEmpty().withMessage('Prénom requis'),
    body('last_name').notEmpty().withMessage('Nom requis'),
    body('email').isEmail().withMessage('Email invalide'),
    body('phone').notEmpty().withMessage('Téléphone requis'),
    body('preferred_date').isDate().withMessage('Date invalide'),
    body('preferred_time').matches(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/).withMessage('Heure invalide')
  ],
  appointmentController.createAppointment
);

// Routes admin
router.get('/', authenticateToken, isAdmin, appointmentController.getAllAppointments);
router.get('/:id', authenticateToken, isAdmin, appointmentController.getAppointmentById);
router.put('/:id', authenticateToken, isAdmin, appointmentController.updateAppointment);
router.delete('/:id', authenticateToken, isAdmin, appointmentController.deleteAppointment);

export default router;
