import { drizzle } from 'drizzle-orm/bun-sqlite';
import { sql } from 'drizzle-orm';
// @ts-ignore
import { Database } from 'bun:sqlite';
import { SQLITE_DB } from '$env/static/private';
import * as schema from './schema';

const sqlite = new Database(SQLITE_DB);
export const db = drizzle(sqlite, { schema });

const query = sql`select "bun:sqlite" as text`;
const result = db.get<{ text: string }>(query);
console.log('database: ' + result?.text);
