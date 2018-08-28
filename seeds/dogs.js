
exports.seed = (knex, Promise) => {
  // Deletes ALL existing entries
  return knex('dogs').del()
    .then(() => {
      // Inserts seed entries
      return knex('dogs').insert([
        {id: 33301, name: 'Rocco', size: 'Large', location: 'Otara', gender: 'Male', breed: 'Chihuahua', bio: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.', profile_pic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK9XcFIFqxYuVu_H9Hgv5yVTRIsv_arT9teAZ4-LN5ghb0DcpE', user_id: 99901},
        {id: 33302, name: 'Fluffy', size: 'Medium', location: 'Remuera', gender: 'Female', breed: 'Poodle', bio: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.', profile_pic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK9XcFIFqxYuVu_H9Hgv5yVTRIsv_arT9teAZ4-LN5ghb0DcpE', user_id: 99902},
        {id: 33303, name: 'Harry', size: 'Small', location: 'Clevedon', gender: 'Male', breed: 'Beagle', bio: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.', profile_pic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK9XcFIFqxYuVu_H9Hgv5yVTRIsv_arT9teAZ4-LN5ghb0DcpE', user_id: 99903}
      ])
    })
}
