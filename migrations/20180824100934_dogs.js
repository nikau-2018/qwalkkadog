exports.up = (knex, Promise) => {
  return knex.schema.createTable('dogs', (table) => {
    table.increments('id').primary()
    table.string('name')
    table.string('size')
    table.string('location')
    table.string('gender')
    table.string('breed')
    table.string('bio')
    table.string('profile_pic')
    table.integer('user_id').references('users.id')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('dogs')
}
