<script>
	import { createCollapsible, melt } from '@melt-ui/svelte';
	import { slide } from 'svelte/transition';
	import { ChevronsUpDown, X, BookOpen } from 'lucide-svelte';
	import { faker } from '@faker-js/faker/locale/ko';
	import { now, getLocalTimeZone } from '@internationalized/date';
	import date from 'date-and-time';

	const {
		elements: { root, content, trigger },
		states: { open }
	} = createCollapsible();

	let localTime = now(getLocalTimeZone()); // Asia/Seoul
	const yesterday = date.addDays(localTime.toDate(), -1);
</script>

<p>Hello</p>
