const express = require('express');
const router = express.Router();
const ProfessorController = require('../../controllers/professorController');
const { validator } = require('../middlewares/validator');
const UserService = require('../../services/userService');

router.get('/', ProfessorController.getProfessors);
router.post('/', validator(UserService.validate()), ProfessorController.createProfessor);

module.exports = router;