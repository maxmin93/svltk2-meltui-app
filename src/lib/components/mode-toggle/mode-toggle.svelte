<script lang="ts">
	import { Moon, Sun } from 'lucide-svelte';
	import { resetMode, setMode } from 'mode-watcher';
	import { createDropdownMenu, melt } from '@melt-ui/svelte';
	import { writable } from 'svelte/store';
	import { fly } from 'svelte/transition';

	const settingsSync = writable(true);
	const hideMeltUI = writable(false);

	const {
		elements: { trigger, menu, item, separator, arrow },
		builders: { createSubmenu, createMenuRadioGroup, createCheckboxItem },
		states: { open }
	} = createDropdownMenu({
		forceVisible: true,
		loop: true
	});
</script>

<button class="trigger" type="button" use:melt={$trigger} aria-label="Toggle mode">
	<Sun
		class="dark:-roate-90 h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:scale-0"
	/>
	<Moon
		class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
	/>
	<span class="sr-only">Toggle theme</span>
</button>

<!-- svelte-ignore a11y-interactive-supports-focus -->
{#if $open}
	<ul
		role="menu"
		class="menu dropdown-content z-[1] w-20 rounded-box bg-base-100 p-2 shadow"
		use:melt={$menu}
		transition:fly={{ duration: 150, y: -10 }}
	>
		<li role="menuitem" class="item" use:melt={$item} on:click={() => setMode('light')}>
			<a>Light</a>
		</li>
		<li role="menuitem" class="item" use:melt={$item} on:click={() => setMode('dark')}>
			<a>Dark</a>
		</li>
		<li use:melt={$arrow} />
	</ul>
{/if}

<style lang="postcss">
	.trigger {
		@apply inline-flex h-9 w-9 items-center justify-center rounded-full bg-white;
		@apply text-magnum-900 transition-colors hover:bg-white/90;
		@apply data-[highlighted]:ring-magnum-400 data-[highlighted]:ring-offset-2 !important;
		@apply p-0 text-sm font-medium  data-[highlighted]:outline-none;
	}
</style>
