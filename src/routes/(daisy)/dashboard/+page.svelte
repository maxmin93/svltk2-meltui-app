<script lang="ts">
	import { pageTitle } from '$lib/stores';
	import { onMount } from 'svelte';

	onMount(() => {
		pageTitle.update(() => 'Dashboard');
	});
</script>

<!-- stats -->
<section class="stats stats-vertical col-span-12 w-full shadow-sm xl:stats-horizontal">
	<div class="stat">
		<div class="stat-title">Total Page Views</div>
		<div class="stat-value">89,400</div>
		<div class="stat-desc">21% more than last month</div>
	</div>

	<div class="stat">
		<div class="stat-title">Total Page Views</div>
		<div class="stat-value">89,400</div>
		<div class="stat-desc">21% more than last month</div>
	</div>

	<div class="stat">
		<div class="stat-title">Total Page Views</div>
		<div class="stat-value">89,400</div>
		<div class="stat-desc">21% more than last month</div>
	</div>

	<div class="stat">
		<div class="stat-title">Total Page Views</div>
		<div class="stat-value">89,400</div>
		<div class="stat-desc">21% more than last month</div>
	</div>
</section>
<!-- /stats -->
<!-- card -->
<section class="card col-span-12 overflow-hidden bg-base-100 shadow-sm xl:col-span-6">
	<div class="card-body grow-0">
		<h2 class="card-title">
			<a href={undefined} class="link-hover link">Transactions</a>
		</h2>
	</div>
	<div class="overflow-x-auto">
		<table class="table table-zebra">
			<tbody>
				<tr>
					<td>Cy Ganderton</td>
					<td>Feb 2nd</td>
					<td>
						<svg
							data-src="https://unpkg.com/heroicons/20/solid/arrow-up-right.svg"
							class="inline-block h-5 w-5 text-success"
						></svg>
						180 USD
					</td>
				</tr>
				<tr>
					<td>Hart Hagerty</td>
					<td>Sep 2nd</td>
					<td>
						<svg
							data-src="https://unpkg.com/heroicons/20/solid/arrow-up-right.svg"
							class="inline-block h-5 w-5 text-success"
						></svg>
						250 USD
					</td>
				</tr>
				<tr>
					<td>Jim Hagerty</td>
					<td>Sep 2nd</td>
					<td>
						<svg
							data-src="https://unpkg.com/heroicons/20/solid/arrow-up-right.svg"
							class="inline-block h-5 w-5 text-success"
						></svg>
						250 USD
					</td>
				</tr>
				<tr>
					<td>Hart Hagerty</td>
					<td>Sep 2nd</td>
					<td>
						<svg
							data-src="https://unpkg.com/heroicons/20/solid/arrow-down-right.svg"
							class="inline-block h-5 w-5 text-error"
						></svg>
						250 USD
					</td>
				</tr>
				<tr>
					<td>Hart Hagerty</td>
					<td>Sep 2nd</td>
					<td>
						<svg
							data-src="https://unpkg.com/heroicons/20/solid/arrow-down-right.svg"
							class="inline-block h-5 w-5 text-error"
						></svg>
						250 USD
					</td>
				</tr>
				<tr>
					<td>Brice Swyre</td>
					<td>Jul 2nd</td>
					<td>
						<svg
							data-src="https://unpkg.com/heroicons/20/solid/arrow-up-right.svg"
							class="inline-block h-5 w-5 text-success"
						></svg>
						320 USD
					</td>
				</tr>
			</tbody>
		</table>
	</div>
</section>
<!-- /card -->
<!-- card -->
<section class="card col-span-12 bg-primary text-primary-content shadow-sm xl:col-span-6">
	<div class="card-body pb-0">
		<h2 class="card-title">21,500 USD</h2>
		<a href={undefined} class="link-hover link text-xs">Revenue report →</a>
	</div>
	<tc-column
		class="h-full w-full p-4 pt-0 [--shape-color:oklch(var(--pc))]"
		values="[12,10,12,4,13,16,14,10,12,11,17,18,16,17,20,14,15,13,12,14]"
		min="0"
		shape-radius="4"
		shape-gap="4"
	></tc-column>
</section>
<!-- /card -->
<!-- card -->
<section class="card col-span-12 bg-base-100 shadow-sm xl:col-span-4">
	<div class="card-body">
		<h2 class="card-title">Sources</h2>
		<div class="flex items-center gap-10">
			<div class="grow">
				<div class="flex items-center gap-2">
					<span class="badge badge-xs bg-[#19D6BF]"></span>
					Direct
				</div>
				<div class="flex items-center gap-2">
					<span class="badge badge-xs bg-[#A838FF]"></span>
					Social
				</div>
				<div class="flex items-center gap-2">
					<span class="badge badge-xs bg-[#3C37FF]"></span>
					Search
				</div>
				<div class="flex items-center gap-2">
					<span class="badge badge-xs bg-[#FFBD3C]"></span>
					Email
				</div>
			</div>
			<tc-pie
				class="h-32 w-32 shrink-0 [--shape-color-1:#A838FF] [--shape-color-2:#19D6BF] [--shape-color-3:#3C37FF] [--shape-color-4:#FFBD3C]"
				values="[35,68,22,16]"
				shape-size="30"
				shape-gap="6"
			></tc-pie>
		</div>
	</div>
</section>
<!-- /card -->
<!-- card -->
<section class="card col-span-12 bg-base-100 shadow-sm xl:col-span-4">
	<div class="card-body pb-0">
		<h2 class="card-title">19,000</h2>
		<p>Downloads</p>
	</div>
	<tc-line
		class="h-full w-full rounded-box [--area-opacity:.2] [--shape-color:#19D6BF]"
		values="[6,5,2,11,13,16,14,14,14,15,18,16,18,15,19,16,20,18,12,14]"
		min="0"
	></tc-line>
</section>
<!-- /card -->
<!-- card -->
<section class="card col-span-12 bg-base-100 shadow-sm xl:col-span-4">
	<div class="card-body pb-0">
		<h2 class="card-title">32,800</h2>
		<p>Unique visitors</p>
	</div>
	<tc-line
		class="h-full w-full rounded-box [--area-opacity:.2] [--shape-color:#A838FF]"
		values="[12,10,12,4,13,16,14,10,12,11,17,18,16,17,20,14,15,13,12,14]"
		min="0"
	></tc-line>
</section>
<!-- /card -->
