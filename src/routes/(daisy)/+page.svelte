<script>
	import { toast } from 'svelte-sonner';
</script>

<div class="flex min-w-max flex-col items-center p-8">
	<button
		class="rounded-lg bg-primary px-8 py-4 text-2xl font-bold"
		on:click={() => toast('My first toast')}>Give me a toast</button
	>
</div>
