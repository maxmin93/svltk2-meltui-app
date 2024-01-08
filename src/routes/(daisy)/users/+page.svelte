<script lang="ts">
	import { pageTitle } from '$lib/stores';
	import { onMount } from 'svelte';
	import { enhance } from '$app/forms';

	function updateUsers(newUsers: any[]) {
		if (newUsers.length === 0) return;
		allUsers = [...allUsers, ...newUsers];
		lastId = allUsers.at(-1)?.id;
		remainsSize = (data.usersSize ?? 0) - allUsers.length;
		console.log(`lastId = '${lastId}' (remains ${remainsSize})`);
	}

	onMount(() => {
		pageTitle.update(() => 'Users');
		updateUsers(data.pageUsers);
	});

	import type { PageData, ActionData } from './$types';
	export let data: PageData;
	export let form: ActionData;
	let allUsers: any[] = [];
	let lastId: string | undefined = undefined;

	$: remainsSize = (data.usersSize ?? 0) - allUsers.length;
	$: if (form) updateUsers(form.pageUsers);
</script>

<div class="flex w-[90vw] flex-col pl-4 md:pl-8 lg:w-[60vw]">
	{#if allUsers.length == 0 || remainsSize > 0}
		<div class="grid w-full place-content-center">
			<form method="POST" use:enhance>
				<input type="hidden" name="lastId" value={lastId} />
				<button type="submit" class="btn btn-primary">remains more.. {remainsSize}</button>
			</form>
		</div>
	{/if}

	<table class="table">
		<!-- head -->
		<thead>
			<tr>
				<th></th>
				<th>Email</th>
				<th>Name</th>
			</tr>
		</thead>
		<tbody>
			{#each allUsers as item, i (i)}
				<tr class="hover">
					<th>{i + 1}</th>
					<td>{item.email} </td>
					<td>{item.username}</td>
				</tr>
			{/each}
		</tbody>
	</table>
</div>
