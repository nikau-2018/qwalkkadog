
exports.seed = (knex, Promise) => {
  // Deletes ALL existing entries
  return knex('users').del()
    .then( () => {
      // Inserts seed entries
      return knex('users').insert([
        {id: 99901, name: 'Zaine', email: 'Zaine@email.com', location: 'Glenfield', dog_id: 33301, is_walker: false, experience: null, profile_pic: 'https://images.pexels.com/photos/8700/wall-animal-dog-pet.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'},
        {id: 99902, name: 'James', email: 'James@email.com', location: 'Remuera', dog_id: 33302, is_walker: false, experience: null, profile_pic: 'https://images.pexels.com/photos/356378/pexels-photo-356378.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'},
        {id: 99903, name: 'Tom', email: 'Tom@email.com', location: 'Dury', dog_id: 33303, is_walker: false, experience: null, profile_pic: 'https://images.pexels.com/photos/551628/pexels-photo-551628.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'},
        {id: 99904, name: 'Alisa', email: 'alisa@email.com', location: 'Parnell', dog_id: null, is_walker: true, experience: 'advanced', profile_pic: 'https://images.pexels.com/photos/551628/pexels-photo-551628.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'}
      ])
    })
}
