<script lang="ts">
	import { pageTitle } from '$lib/stores';
	import { onMount, getContext } from 'svelte';

	const pageMainTitle = getContext('mainTitle') ?? 'Main';
	const pageSubTitle = 'Toast';
	onMount(() => {
		pageTitle.update(() => pageMainTitle + ' > ' + pageSubTitle);
	});

	import { createToaster, melt } from '@melt-ui/svelte';
	import { flip } from 'svelte/animate';
	import { fly } from 'svelte/transition';
	import { X } from 'lucide-svelte';

	type ToastData = {
		title: string;
		description: string;
		color: string;
	};

	const {
		elements: { content, title, description, close },
		helpers: { addToast },
		states: { toasts },
		actions: { portal }
	} = createToaster<ToastData>();

	const toastData: ToastData[] = [
		{
			title: 'success',
			description: 'Congratulations! It worked!',
			color: 'bg-green-500'
		},
		{
			title: 'warning',
			description: 'Please check again.',
			color: 'bg-orange-500'
		},
		{
			title: 'error',
			description: 'Something did not work!',
			color: 'bg-red-500'
		},
		{
			title: 'info',
			description: '12 unread messages. Tap to see.',
			color: 'bg-blue-500'
		}
	];

	function addRandomToast() {
		addToast({
			data: toastData[Math.floor(Math.random() * toastData.length)]
		});
	}
</script>

<!-- <div class="container"> -->
<button
	class="inline-flex items-center justify-center rounded-xl bg-white px-4 py-3
  font-medium leading-none text-magnum-700 shadow hover:opacity-75"
	on:click={addRandomToast}
>
	Show toast
</button>
<!-- </div> -->

<div class="toast" use:portal>
	{#each $toasts as { id, data } (id)}
		<div
			use:melt={$content(id)}
			animate:flip={{ duration: 500 }}
			in:fly={{ duration: 150, x: '100%' }}
			out:fly={{ duration: 150, x: '100%' }}
			class="alert alert-{data.title}"
		>
			<div class="">
				<h3 use:melt={$title(id)} class="flex items-center gap-2 font-semibold capitalize">
					<span class="square-1.5 rounded-full {data.color} px-1">&nbsp;</span>
					{data.title}
				</h3>
				<div use:melt={$description(id)}>
					{data.description}
				</div>
			</div>
			<button
				use:melt={$close(id)}
				class="square-6 grid place-items-center rounded-full text-magnum-500
          hover:bg-magnum-900/50"
			>
				<X class="square-4" />
			</button>
		</div>
	{/each}

	<!-- sample toast -->
	<!-- div class="alert alert-info">
		<div>
			<h3 class="flex items-center gap-2 font-semibold">
				<span class="square-1.5 rounded-full bg-green-500 px-1">&nbsp;</span>
				Sample Toast
			</h3>
			<span>New message arrived.</span>
		</div>
		<button
			class="square-6 absolute right-6 top-6 grid place-items-center rounded-full text-magnum-500
          hover:bg-magnum-900/50"
		>
			<X class="square-4" />
		</button>
	</div -->
</div>
