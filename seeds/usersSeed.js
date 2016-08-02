exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('users').insert({Name: 'Mandy', Email: 'mandy@email.com'}),
        knex('users').insert({Name: 'Kirby', Email: 'kirby@email.com'}),
        knex('users').insert({Name: 'Alannah', Email: 'alannah@email.com'}),
        knex('users').insert({Name: 'Kate', Email: 'kate@email.com'})
      ]);
    });
};
