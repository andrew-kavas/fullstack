export const up = knex => {
  return knex.schema.createTable('users', table => {
    table.increments('id').primary();
    table.string('username').notNullable();
    table.string('email').notNullable().unique();
    table.timestamps(true, true);
  });
};

export const down = knex => {
  return knex.schema.dropTable('users');
};
