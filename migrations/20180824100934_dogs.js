exports.up = (knex, Promise) => {
  return knex.schema.createTable('dogs', (table) => {
    table.increments('id').primary()
    table.string('name')
    table.string('size')
    table.string('location')
    table.integer('gender')
    table.integer('breed')
    table.integer('bio')
    table.integer('profile_pic')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('dogs')
}
