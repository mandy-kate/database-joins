exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('users').insert({id: 1, Name: 'Mandy', Email: 'mandy@email.com'}),
        knex('users').insert({id: 2, Name: 'Kirby', Email: 'kirby@email.com'}),
        knex('users').insert({id: 3, Name: 'Alannah', Email: 'alannah@email.com'}),
        knex('users').insert({id: 4, Name: 'Kate', Email: 'kate@email.com'})
      ]);
    });
};
