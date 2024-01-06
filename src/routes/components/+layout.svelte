<script>
	import { setContext } from 'svelte';
	setContext('mainTitle', 'Components');
</script>

<section
	class="section-min-height lg:section-lg-min-height section-min-width lg:section-lg-min-width grid place-content-center border border-red-400"
>
	<slot />
</section>
