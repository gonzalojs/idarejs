const low = require('lowdb')
const FileAsync = require('lowdb/adapters/FileAsync')

let db;

async function createConnection() {
  const adapter = new FileAsync('db.json')
  db = await low(adapter)
  db.defaults({
    task: []
  }).write()
}

const getConnection = () => db; // return db

module.exports = {
  createConnection,
  getConnection
}