const express = require('express');
const router = express.Router();

const noteController = require('../controllers/noteController');
const authMiddleware = require('../middlewares/authMiddlewares');

router.post('/:id/create-notes', authMiddleware, noteController.createNote);

router.get('/get-my-all-notes', authMiddleware, noteController.getNotesByUserId);

router.put('/:id/update-note/:noteId', authMiddleware, noteController.updateNote);

router.delete('/:id/delete-note/:noteId', authMiddleware, noteController.deleteNote);

module.exports = router;