const {
  Router
} = require('express')
const router = Router()

const getNoteController = require('../controllers/test/post.note')

router.get('/tasks', getNoteController.get_task)


module.exports = router