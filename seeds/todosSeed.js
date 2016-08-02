
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('todos').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('todos').insert({done: 'true', description: 'Tidy Room', user_id: 16}),
        knex('todos').insert({done: 'false', description: 'Get Sleep', user_id: 16}),
        knex('todos').insert({done: 'true', description: 'Buy Groceries', user_id: 16})
      ]);
    });
};
