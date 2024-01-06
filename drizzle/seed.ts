import { drizzle } from 'drizzle-orm/bun-sqlite';
// @ts-ignore
import { Database } from 'bun:sqlite';
import { faker } from '@faker-js/faker';
import * as schema from '../src/lib/server/schema';

if (!('SQLITE_DB' in process.env)) throw new Error('SQLITE_DB not found on .env.development');

const main = async () => {
	const sqlite = new Database(process.env.SQLITE_DB as string);
	const db = drizzle(sqlite);
	const data: (typeof schema.users.$inferInsert)[] = [];

	for (let i = 0; i < 20; i++) {
		data.push({
			username: faker.internet.userName(),
			email: faker.internet.email()
		});
	}

	console.log('Seed start');
	await db.insert(schema.users).values(data);
	console.log('Seed done');
};

main();
