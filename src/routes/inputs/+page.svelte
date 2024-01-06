<script lang="ts">
	import WorldImg from '$lib/assets/icon/world.svelte';
	import { Eye } from 'lucide-svelte';
	import { pageTitle } from '$lib/stores';
	import { onMount } from 'svelte';

	onMount(() => {
		pageTitle.update(() => 'Input sections');
	});
</script>

<!-- card -->
<section class="col-span-12 xl:col-span-4">
	<div class="form-control">
		<label for="name" class="label">
			<span class="label-text">Product name</span>
		</label>
		<input id="name" type="text" placeholder="Type here" class="input input-bordered" />
	</div>
	<div class="form-control">
		<label for="category" class="label">
			<span class="label-text">Category</span>
		</label>
		<select id="category" class="select select-bordered">
			<option disabled selected>Pick</option>
			<option>T-shirts</option>
			<option>Dresses</option>
			<option>Hats</option>
			<option>Accessories</option>
		</select>
	</div>
	<div class="form-control">
		<label for="formSize" class="label">
			<span class="label-text">Size (cm)</span>
		</label>
		<div id="formSize" class="flex items-center gap-2">
			<input type="text" placeholder="Width" class="input input-bordered w-1/2" />
			×
			<input type="text" placeholder="Height" class="input input-bordered w-1/2" />
		</div>
	</div>
	<hr class="my-6 border-t-2 border-base-content/5" />
	<div class="form-control">
		<div class="label justify-start gap-2">
			<Eye class="h-4 w-4 text-base-content/30" />
			<span class="label-text text-xs font-bold text-base-content/50">
				Choose product visibility
			</span>
		</div>
	</div>
	<div class="form-control">
		<label class="label cursor-pointer">
			<span class="label-text">Visible only for managers</span>
			<input name="visibility" type="radio" class="radio radio-sm" checked />
		</label>
		<label class="label cursor-pointer">
			<span class="label-text">Visible for all users</span>
			<input name="visibility" type="radio" class="radio radio-sm" checked />
		</label>
	</div>
</section>
<!-- /card -->
<!-- card -->
<section class="card col-span-12 bg-base-100 shadow-sm xl:col-span-5">
	<div class="card-body pb-0">
		<h2 class="card-title">32,800</h2>
		<p>From 84 countries</p>
	</div>
	<WorldImg class="m-4 fill-base-content/80" />
	<!-- svelte:component this={WorldImg} class="m-4 fill-base-content/80" / -->
</section>
<!-- /card -->
<!-- card -->
<section class="card col-span-12 bg-base-100 shadow-sm xl:col-span-3">
	<div class="p-6 pb-0 text-center text-xs font-bold text-base-content/60">Recent events</div>
	<ul class="menu">
		<li>
			<a href={undefined} class="gap-4">
				<div class="avatar">
					<div class="w-6 rounded-full">
						<img alt="avatar" src="https://picsum.photos/80/80?6" />
					</div>
				</div>
				<span class="text-xs">
					<b>New User</b>
					<br />
					2 minutes ago
				</span>
			</a>
		</li>
		<li>
			<a href={undefined} class="gap-4">
				<div class="avatar">
					<div class="w-6 rounded-full">
						<img alt="avatar" src="https://picsum.photos/80/80?7" />
					</div>
				</div>
				<span class="text-xs">
					<b>New product added</b>
					<br />
					1 hour ago
				</span>
			</a>
		</li>
		<li>
			<a href={undefined} class="gap-4">
				<div class="avatar">
					<div class="w-6 rounded-full">
						<img alt="avatar" src="https://picsum.photos/80/80?8" />
					</div>
				</div>
				<span class="text-xs">
					<b>Database update</b>
					<br />
					1 hour ago
				</span>
			</a>
		</li>
		<li>
			<a href={undefined} class="gap-4">
				<div class="avatar">
					<div class="w-6 rounded-full">
						<img alt="avatar" src="https://picsum.photos/80/80?9" />
					</div>
				</div>
				<span class="text-xs">
					<b>Newsletter sent</b>
					<br />
					2 hour ago
				</span>
			</a>
		</li>
		<li>
			<a href={undefined} class="gap-4">
				<div class="avatar">
					<div class="w-6 rounded-full">
						<img alt="avatar" src="https://picsum.photos/80/80?10" />
					</div>
				</div>
				<span class="text-xs">
					<b>New User</b>
					<br />
					2 hours ago
				</span>
			</a>
		</li>
		<li>
			<a href={undefined} class="gap-4">
				<div class="avatar">
					<div class="w-6 rounded-full">
						<img alt="avatar" src="https://picsum.photos/80/80?11" />
					</div>
				</div>
				<span class="text-xs">
					<b>New product added</b>
					<br />
					yesterday
				</span>
			</a>
		</li>
		<li>
			<a href={undefined} class="gap-4">
				<div class="avatar">
					<div class="w-6 rounded-full">
						<img alt="avatar" src="https://picsum.photos/80/80?12" />
					</div>
				</div>
				<span class="text-xs">
					<b>New product added</b>
					<br />
					yesterday
				</span>
			</a>
		</li>
	</ul>
</section>
<!-- /card -->
