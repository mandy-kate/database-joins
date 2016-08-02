var config = require('./knexfile').development
var knex = require('knex')(config)

function logError (err) {
  console.log('error', err)
}

function exitDB () {
    knex.destroy()
}

function deleteRow(ID){
  return knex('users')
   .where('id', '=', ID)
   .del()
   .catch(logError)
   .finally(exitDB)
}

function printEntity(){
return knex('users')
  .select()
  .then( function (data) {
    console.log("Entity:", data)
    })
  .catch(logError)
  .finally(exitDB)
}

deleteRow('7')
printEntity()