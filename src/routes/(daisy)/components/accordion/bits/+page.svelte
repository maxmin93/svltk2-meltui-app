<script lang="ts">
	import { pageTitle } from '$lib/stores';
	import { onMount, getContext } from 'svelte';

	const pageMainTitle = getContext('mainTitle') ?? 'Main';
	const pageSubTitle = 'Accordion';
	onMount(() => {
		pageTitle.update(() => pageMainTitle + ' > ' + pageSubTitle);
	});

	import { cn } from '$lib/utils';
	import { createAccordion, melt } from '@melt-ui/svelte';
	import { slide } from 'svelte/transition';
	import { ChevronDown, ChevronUp } from 'lucide-svelte';
	const {
		elements: { content, item, trigger, root },
		helpers: { isSelected }
	} = createAccordion({
		defaultValue: 'item-1'
	});

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
</script>

<div class={cn('mx-auto w-[18rem] max-w-full sm:w-[25rem] sm:max-w-[70%]', className)} {...$root}>
	{#each items as { id, title, description }, i}
		<div use:melt={$item(id)} class="border-dark-10 group border-b px-1.5">
			<h2
				class="flex w-full flex-1 cursor-pointer items-center justify-between py-5 text-[15px] font-medium transition-all [&[data-state=open]>span>svg]:rotate-180"
				use:melt={$trigger(id)}
			>
				{title}
				<span
					class="sq-8 hover:bg-dark-10 inline-flex items-center justify-center rounded-[7px] bg-transparent transition-all"
				>
					{#if $isSelected(id)}
						<ChevronDown class="sq-[18px] transition-all duration-200" />
					{:else}
						<ChevronUp class="sq-[18px] transition-all duration-200" />
					{/if}
				</span>
			</h2>
			{#if $isSelected(id)}
				<div
					class={cn('content', 'pb-[25px] text-sm tracking-[-0.01em]')}
					use:melt={$content(id)}
					transition:slide={{ duration: 400 }}
				>
					<div class="px-5 py-4">
						{description}
					</div>
				</div>
			{/if}
		</div>
	{/each}
</div>

<style lang="postcss">
	.content {
		box-shadow: inset 0px 1px 0px theme('colors.neutral.300');
	}
</style>
