const express = require ("express")
const router = express.Router()
const student = require('../controllers/studentController')

router.post('/signup')
router.get('/students', student.getStudents)
router.get('/:cpf', student.getStudent)

module.exports = router;