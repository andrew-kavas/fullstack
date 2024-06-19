export const up = knex => {
  return knex.schema
    .createTable('groups', t => {
      t.increments('id').primary();
      t.string('name').notNullable().unique();
      t.timestamps(true, true);
    })

    .createTable('memberships', t => {
      t.increments('id').primary();
      t.integer('groupId')
        .notNullable()
        .references('groups.id')
        .onUpdate('cascade')
        .onDelete('set null');
      t.integer('userId')
        .notNullable()
        .references('users.id')
        .onUpdate('cascade')
        .onDelete('set null');
      t.unique(['groupId', 'userId']);
      t.timestamps(true, true);
    });
};

export const down = knex => {
  return knex.schema.dropTable('memberships').dropTable('groups');
};
