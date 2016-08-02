var config = require ('./knexfile').development
var knex = require ('knex')(config)

knex.from('todos')
.innerJoin('users', 'users.id', 'todos.user_id')
.then(function (data) {
    console.log("I got the records!", data)
})

.catch (function (err) {
    console.log(err)
})

.finally (function () {
    knex.destroy()
})

var config = require('./knexfile').development
var knex = require('knex')(config)

function logError (err) {
  console.log('Error', err)
}

function closeDB () {
knex.destroy()
}

function printTable () {
return knex('users')
  .select()
  .then( function (data) {
    console.log("the table: ", data)
    })
  .catch(logError)
  .finally(closeDB)
}

printTable()

