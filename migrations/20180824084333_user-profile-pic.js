
exports.up = (knex, Promise) => {
  return knex.schema.table('users', table => {
      table.string('profile_pic')
  })
}

exports.down = (knex, Promise) => {
    return knex.schema.dropTable('users')
}
