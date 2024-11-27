export const up = knex => {
  return knex.schema.createTable('test', t => {
    t.increments('id').primary();
    t.string('name').notNullable().unique();
    t.jsonb('args').notNullable();
  });
};

export const down = knex => {
  return knex.schema.dropTable('test');
};
