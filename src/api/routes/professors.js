const express = require('express');
const router = express.Router();
const ProfessorController = require('../../controllers/professorController');

router.get('/', ProfessorController.getProfessors);
router.post('/', ProfessorController.createProfessor);

module.exports = router;