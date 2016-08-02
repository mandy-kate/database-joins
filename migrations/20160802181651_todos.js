
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('todos', function (table) {
    table.increments('id')
    table.boolean('done')
    table.string('description')
    table.integer('user_id')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('todos')
};
