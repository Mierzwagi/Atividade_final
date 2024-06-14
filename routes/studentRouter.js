const express = require ("express")
const router = express.Router()
const student = require('../controllers/studentController')

router.post('/signup')
router.get('/:cpf', student.getStudent)
