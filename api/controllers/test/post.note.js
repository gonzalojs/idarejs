const { nanoid } = require('nanoid')


exports.post_note = (req, res) => {
  return resstatus(200).json({
    message: 'success'
  })
}