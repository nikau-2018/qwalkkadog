exports.up = (knex, Promise) => {
  return knex.schema.createTable('users', (table) => {
    table.increments('id').primary()
    table.string('name')
    table.string('email')
    table.string('location')
    table.integer('dog_id')
    table.string('is_walker')
    table.integer('experience')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('users')
}
