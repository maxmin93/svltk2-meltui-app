<script lang="ts">
	import { pageTitle } from '$lib/stores';
	import { onMount, getContext } from 'svelte';

	const pageMainTitle = getContext('mainTitle') ?? 'Main';
	const pageSubTitle = 'Accordion';
	onMount(() => {
		pageTitle.update(() => pageMainTitle + ' > ' + pageSubTitle);
	});

	import { slide } from 'svelte/transition';
	import { cn } from '$lib/utils';
	const items = [
		{
			id: 'item-1',
			title: 'What is it?',
			description:
				'A collection of accessible & unstyled component builders for Svelte applications.'
		},
		{
			id: 'item-2',
			title: 'Can I customize it?',
			description: 'Totally, it is 100% stylable and overridable.'
		},
		{
			id: 'item-3',
			title: 'Svelte is awesome, huh?',
			description: 'Yes, and so are you!'
		}
	];
	let className = '';
	export { className as class };

	let selected_accordion = 'none';
	function update_accordion(selected_id: string) {
		if (selected_accordion === selected_id) {
			selected_accordion = 'none';
		} else {
			selected_accordion = selected_id;
		}
	}
</script>

<div class={cn('join join-vertical w-full', className)}>
	{#each items as { id, title, description }, i}
		<div
			class="collapse join-item collapse-arrow border bg-base-200"
			on:click={() => update_accordion(id)}
		>
			<input type="radio" {id} checked={selected_accordion === id} />
			<div class="collapse-title text-xl font-medium">{title}</div>
			<div
				class="collapse-content bg-gray-600 pt-2"
				transition:slide={{ delay: 250, duration: 3000 }}
			>
				<p>{description}</p>
			</div>
		</div>
	{/each}
</div>
