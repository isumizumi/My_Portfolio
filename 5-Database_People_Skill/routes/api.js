const express     = require('express');
const router      = express.Router();
const controller  = require('../controllers/controllerUser')

router.post('/seed', controller.seed)

router.post('/', controller.addUser)

router.get('/', controller.getAll)

router.get('/:id', controller.getOne)

router.delete('/:id', controller.delete)

router.post('/skill/:id', controller.addSkill)

router.put('/skill:id', controller.updateSkill)

router.delete('/skill/:id', controller.deleteSkill)

module.exports = router;
