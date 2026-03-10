import express from 'express';
import { body } from 'express-validator';
import { authenticateToken, isAdmin } from '../middleware/auth.js';
import * as quoteController from '../controllers/quoteController.js';

const router = express.Router();

// Route publique - Demande de devis
router.post(
  '/',
  [
    body('type').isIn(['new', 'used', 'leasing']).withMessage('Type invalide'),
    body('first_name').notEmpty().withMessage('Prénom requis'),
    body('last_name').notEmpty().withMessage('Nom requis'),
    body('email').isEmail().withMessage('Email invalide'),
    body('phone').notEmpty().withMessage('Téléphone requis')
  ],
  quoteController.createQuote
);

// Routes admin
router.get('/', authenticateToken, isAdmin, quoteController.getAllQuotes);
router.get('/:id', authenticateToken, isAdmin, quoteController.getQuoteById);
router.put('/:id', authenticateToken, isAdmin, quoteController.updateQuote);
router.delete('/:id', authenticateToken, isAdmin, quoteController.deleteQuote);

export default router;
