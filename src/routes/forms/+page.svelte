<script lang="ts">
	import { pageTitle } from '$lib/stores';
	import { onMount } from 'svelte';

	onMount(() => {
		pageTitle.update(() => 'Form sections');
	});
</script>

<!-- card -->
<section class="col-span-12 xl:col-span-4">
	<label class="label">
		<span class="label-text">Product management</span>
	</label>
	<ul class="flex flex-col gap-4 p-1">
		<li class="flex items-start gap-4">
			<img
				class="h-14 w-14 shrink-0 rounded-btn"
				width="56"
				height="56"
				src="https://picsum.photos/80/80?id=1"
				alt="Product"
			/>
			<div class="flex grow flex-col gap-1">
				<div class="text-sm">Portable fidget spinner</div>
				<div class="text-xs text-base-content/50">Space Gray</div>
				<div class="font-mono text-xs text-base-content/50">$299</div>
			</div>
			<div class="join justify-self-end bg-base-100">
				<button class="btn btn-ghost join-item btn-xs">–</button>
				<input class="input join-item input-ghost input-xs w-10 text-center" value="1" />
				<button class="btn btn-ghost join-item btn-xs">+</button>
			</div>
		</li>
		<li class="flex items-start gap-4">
			<img
				class="h-14 w-14 shrink-0 rounded-btn"
				width="56"
				height="56"
				src="https://picsum.photos/80/80?id=2"
				alt="Product"
			/>
			<div class="flex grow flex-col gap-1">
				<div class="text-sm">Wooden VR holder</div>
				<div class="text-xs text-base-content/50">Casual Red</div>
				<div class="font-mono text-xs text-base-content/50">$199</div>
			</div>
			<div class="join justify-self-end bg-base-100">
				<button class="btn btn-ghost join-item btn-xs">–</button>
				<input class="input join-item input-ghost input-xs w-10 text-center" value="1" />
				<button class="btn btn-ghost join-item btn-xs">+</button>
			</div>
		</li>
		<li class="flex items-start gap-4">
			<img
				class="h-14 w-14 shrink-0 rounded-btn"
				width="56"
				height="56"
				src="https://picsum.photos/80/80?id=3"
				alt="Product"
			/>
			<div class="flex grow flex-col gap-1">
				<div class="text-sm">Portable keychain</div>
				<div class="text-xs text-base-content/50">Normal Yellow</div>
				<div class="font-mono text-xs text-base-content/50">$299</div>
			</div>
			<div class="join justify-self-end bg-base-100">
				<button class="btn btn-ghost join-item btn-xs">–</button>
				<input class="input join-item input-ghost input-xs w-10 text-center" value="1" />
				<button class="btn btn-ghost join-item btn-xs">+</button>
			</div>
		</li>
	</ul>
</section>
<!-- /card -->
<!-- card -->
<section class="col-span-12 xl:col-span-4">
	<div class="form-control">
		<label class="label">
			<span class="label-text">Product name</span>
		</label>
		<input type="text" placeholder="Type here" class="input input-bordered" />
	</div>
	<div class="form-control">
		<label class="label">
			<span class="label-text">Category</span>
		</label>
		<select class="select select-bordered">
			<option disabled selected>Pick</option>
			<option>T-shirts</option>
			<option>Dresses</option>
			<option>Hats</option>
			<option>Accessories</option>
		</select>
	</div>

	<div class="form-control">
		<label class="label cursor-pointer">
			<span class="label-text">Public</span>
			<input type="checkbox" class="toggle toggle-sm" checked />
		</label>
	</div>
	<div class="form-control">
		<label class="label cursor-pointer">
			<span class="label-text">Featured product</span>
			<input type="checkbox" class="toggle toggle-sm" checked />
		</label>
	</div>
</section>
<!-- /card -->
<!-- card -->
<section class="col-span-12 xl:col-span-4">
	<div class="form-control">
		<label class="label">
			<span class="label-text">Size (cm)</span>
		</label>
		<div class="flex items-center gap-2">
			<input type="text" placeholder="Width" class="input input-bordered w-1/2" />
			×
			<input type="text" placeholder="Height" class="input input-bordered w-1/2" />
		</div>
	</div>
	<div class="form-control">
		<div class="py-4 text-xs text-base-content/70">
			Set a audience range for this product.
			<br />
			This is optional
		</div>
		<input type="range" min="0" max="100" value="25" class="range range-xs" step="25" />
		<div class="flex w-full justify-between px-2 py-2 text-xs">
			<span>0</span>
			<span>25</span>
			<span>50</span>
			<span>75</span>
			<span>100</span>
		</div>
	</div>
	<div class="form-control">
		<div class="flex gap-4 py-4">
			<button class="btn btn-outline">Save draft</button>
			<button class="btn btn-primary grow">Save and publish</button>
		</div>
	</div>
</section>
<!-- /card -->
