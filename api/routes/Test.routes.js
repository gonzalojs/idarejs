const {
  Router
} = require('express')
const router = Router()

const postNoteController = require('../controllers/test/post.note')

router.post('/notes/new', postNoteController.post_note)


module.exports = router