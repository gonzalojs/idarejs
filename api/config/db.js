const lowdb = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync')

const db = lowdb(new FileSync('db.json'))
db.defaults({
  notes: []
}).write()


module.exports = db