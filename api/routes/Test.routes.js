const {
  Router
} = require('express')
const router = Router()

const getNoteController = require('../controllers/test/get.notes')
const postTaskController = require('../controllers/test/post.task')

router.get('/tasks', getNoteController.get_task)

router.post('/new', postTaskController.post_task)


module.exports = router