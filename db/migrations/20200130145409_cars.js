exports.up = knex =>
  knex.schema.createTable('cars', table => {
    table.increments('car_id')
    table
      .text('make')
      .index()
      .notNullable()
    table
      .text('model')
      .index()
      .notNullable()
    table
      .integer('year', 4)
      .index()
      .notNullable()
  })

exports.down = knex => knex.schema.dropTableIfExists('cars')
