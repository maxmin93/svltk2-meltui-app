import { db } from '$lib/server';
import { users } from '$lib/server/schema';
import type { PageServerLoad, Actions } from './$types';
import { withCursorPagination } from 'drizzle-pagination';
import { count } from 'drizzle-orm';

const pageSize = 4;

export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		const lastId = data.get('lastId');
		console.log(`lastId = '${lastId}'`);

		const pageUsers = await db.query.users.findMany(
			withCursorPagination({
				limit: pageSize,
				cursors: [[users.id, 'asc', lastId]]
			})
		);
		// for DEBUG
		for (let index = 0; index < pageUsers.length; index++) {
			const element = pageUsers[index];
			console.log(`[${index}] ${element.id} ${element.email}`);
		}
		return { pageUsers };
	}
} satisfies Actions;

export const load: PageServerLoad = async () => {
	let usersSize = await db.select({ value: count() }).from(users);
	console.log(`Users.size = ${usersSize.at(-1)?.value}`);

	let pageUsers = await db.select().from(users).orderBy(users.id).limit(pageSize);
	// for DEBUG
	// for (let index = 0; index < pageUsers.length; index++) {
	// 	const element = pageUsers[index];
	// 	console.log(`[${index}] ${element.id} ${element.email}`);
	// }
	return {
		pageUsers,
		usersSize: usersSize.at(-1)?.value
	};
};
