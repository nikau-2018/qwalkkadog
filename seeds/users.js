
exports.seed = (knex, Promise) => {
  // Deletes ALL existing entries
  return knex('users').del()
    .then( () => {
      // Inserts seed entries
      return knex('users').insert([
        {id: 99901, name: 'Zaine', email: 'Zaine@email.com', location: 'Glenfield', dog_id: 33301, is_walker: 0, experience: 0},
        {id: 99902, name: 'James', email: 'James@email.com', location: 'Remuera', dog_id: 33302, is_walker: 0, experience: 0},
        {id: 99903, name: 'Tom', email: 'Tom@email.com', location: 'Dury', dog_id: 33303, is_walker: 0, experience: 0},
      ]);
    });
};
