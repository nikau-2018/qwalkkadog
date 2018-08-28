
exports.up = (knex, Promise) => {
    return knex.schema.table('dogs', table => {
        table.integer('user_id')
    })
}

exports.down = (knex, Promise) => {
  return knex.schema.table('dogs', table => {
      table.dropColumn('user_id')
  })
}
