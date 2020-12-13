const db = require('../config/db')
const { nanoid } = require('nanoid')

exports.post_note = (req, res) => {
  const note = req.body
  db.get("notes").push({
    ...note, id: nanoid()
  })
  return resstatus(200).json({
    message: 'success'
  })
}