import seedData from '#src/constants/seed-data.js';
import db from '#src/db.js';
import test from '#src/functions/test.js';

const { console, process } = globalThis;

const { users, groups, memberships } = seedData;

process.on('SIGTERM', () => process.exit()).on('SIGINT', () => process.exit());

const seed = async () => {
  const t1 = test({ testParam: 'ok' });
  console.log(t1);

  try {
    await db
      .insert(Object.values(users))
      .into('users')
      .onConflict('id')
      .ignore();

    await db
      .insert(Object.values(groups))
      .into('groups')
      .onConflict('id')
      .ignore();

    await db
      .insert(Object.values(memberships))
      .into('memberships')
      .onConflict('id')
      .ignore();
  } catch (er) {
    console.error(er);
  }

  await db.destroy();
  process.exit();
};

seed();
