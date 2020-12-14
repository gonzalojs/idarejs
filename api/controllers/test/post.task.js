const { getConnection } = require('../../config/database')
const { nanoid }= require('nanoid')

exports.post_task = (req, res) => {
  const newTask = {
    name: req.body.name,
    description: req.body.description,
    id: nanoid()
  }
  getConnection().get('tasks').push(newTask).write()
  return res.status(200).json({
    message: "success"
  })
}