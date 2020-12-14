const { getConnection } = require('../../config/database')

exports.get_task = (req, res) => {
  const tasks = getConnection().get('tasks').value()
  return res.status(200).json({
    message: tasks
  })
}