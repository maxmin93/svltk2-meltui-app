<script lang="ts">
	import { pageTitle } from '$lib/stores';
	import { onMount } from 'svelte';

	onMount(() => {
		pageTitle.update(() => 'Payment information');
	});

	const digitPattern = 'd{(3, 4)}';
</script>

<!-- card -->
<section class="card col-span-12 bg-base-100 xl:col-span-5">
	<form class="card-body" action="">
		<div class="alert alert-success">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-6 w-6 shrink-0 stroke-current"
				fill="none"
				viewBox="0 0 24 24"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
				/>
			</svg>
			<span>Your payment was successful</span>
		</div>
		<div class="form-control">
			<label class="label">
				<span class="label-text">Card Number</span>
			</label>
			<input
				type="text"
				class="input input-bordered font-mono"
				pattern={digitPattern}
				title="16 digits card number"
				minlength="16"
				maxlength="16"
				required
			/>
		</div>
		<div class="grid grid-cols-2 gap-2">
			<div class="form-control">
				<label class="label">
					<span class="label-text">CVV</span>
				</label>
				<input
					type="text"
					placeholder="XXX"
					pattern={digitPattern}
					title="3 or 4 digits CVV number"
					minlength="3"
					maxlength="4"
					required
					class="input input-bordered text-center font-mono"
				/>
			</div>
			<div class="form-control">
				<label class="label">
					<span class="label-text">Expiration date</span>
				</label>
				<div class="input input-bordered grid grid-cols-2 gap-2">
					<input
						placeholder="MM"
						type="text"
						pattern="\d{2}"
						title="2 digits month number"
						minlength="2"
						maxlength="2"
						class="text-center font-mono"
						required
					/>
					<input
						placeholder="YY"
						type="text"
						pattern="\d{2}"
						title="2 digits year number"
						minlength="2"
						maxlength="2"
						class="text-center font-mono"
						required
					/>
				</div>
			</div>
		</div>
		<div class="form-control">
			<label class="label">
				<span class="label-text">Name</span>
			</label>
			<input type="text" class="input input-bordered" />
		</div>
		<div class="form-control mt-4 gap-4">
			<label class="flex cursor-pointer gap-4">
				<input type="checkbox" class="checkbox checkbox-sm" checked />
				<span class="label-text">Save my card information for future payments</span>
			</label>
			<label class="flex cursor-pointer gap-4">
				<input required type="checkbox" class="checkbox checkbox-sm" checked />
				<span class="label-text">Accept terms of use and privac policy</span>
			</label>
		</div>
		<div class="form-control">
			<div class="flex items-end py-4">
				<button class="btn btn-primary grow">Confirm Payment</button>
			</div>
		</div>
	</form>
</section>
<!-- /card -->
<!-- card -->
<section class="card col-span-12 overflow-hidden bg-base-100 shadow-sm xl:col-span-7">
	<div class="card-body grow-0">
		<div class="flex justify-between gap-2">
			<h2 class="card-title grow">
				<a class="link-hover link">Recent user transactions</a>
			</h2>
			<button class="btn btn-sm">See all users</button>
			<button class="btn btn-sm">Settings</button>
		</div>
	</div>
	<div class="overflow-x-auto">
		<table class="table table-zebra">
			<tbody>
				<tr>
					<td class="w-0"><input type="checkbox" class="checkbox" /></td>
					<td>
						<div class="flex items-center gap-4">
							<div class="avatar">
								<div class="mask mask-squircle h-10 w-10">
									<img src="https://picsum.photos/80/80?1" alt="Avatar Tailwind CSS Component" />
								</div>
							</div>
							<div>
								<div class="text-sm font-bold">Hart Hagerty</div>
								<div class="text-xs opacity-50">United States</div>
							</div>
						</div>
					</td>
					<td>Feb 2nd</td>
					<td>
						<svg
							data-src="https://unpkg.com/heroicons/20/solid/arrow-up-right.svg"
							class="inline-block h-5 w-5 text-success"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 20 20"
							fill="currentColor"
							aria-hidden="true"
							data-id="svg-loader_3"
						>
							<path
								fill-rule="evenodd"
								d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
								clip-rule="evenodd"
							></path>
						</svg>
						180 USD
					</td>
				</tr>
				<tr>
					<td class="w-0"><input type="checkbox" class="checkbox" /></td>
					<td>
						<div class="flex items-center gap-4">
							<div class="avatar">
								<div class="mask mask-squircle h-10 w-10">
									<img src="https://picsum.photos/80/80?2" alt="Avatar Tailwind CSS Component" />
								</div>
							</div>
							<div>
								<div class="text-sm font-bold">Brice Swyre</div>
								<div class="text-xs opacity-50">China</div>
							</div>
						</div>
					</td>
					<td>Sep 2nd</td>
					<td>
						<svg
							data-src="https://unpkg.com/heroicons/20/solid/arrow-up-right.svg"
							class="inline-block h-5 w-5 text-success"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 20 20"
							fill="currentColor"
							aria-hidden="true"
							data-id="svg-loader_4"
						>
							<path
								fill-rule="evenodd"
								d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
								clip-rule="evenodd"
							></path>
						</svg>
						250 USD
					</td>
				</tr>
				<tr>
					<td class="w-0"><input type="checkbox" class="checkbox" /></td>
					<td>
						<div class="flex items-center gap-4">
							<div class="avatar">
								<div class="mask mask-squircle h-10 w-10">
									<img src="https://picsum.photos/80/80?3" alt="Avatar Tailwind CSS Component" />
								</div>
							</div>
							<div>
								<div class="text-sm font-bold">Marjy Ferencz</div>
								<div class="text-xs opacity-50">Russia</div>
							</div>
						</div>
					</td>
					<td>Sep 2nd</td>
					<td>
						<svg
							data-src="https://unpkg.com/heroicons/20/solid/arrow-up-right.svg"
							class="inline-block h-5 w-5 text-success"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 20 20"
							fill="currentColor"
							aria-hidden="true"
							data-id="svg-loader_5"
						>
							<path
								fill-rule="evenodd"
								d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
								clip-rule="evenodd"
							></path>
						</svg>
						250 USD
					</td>
				</tr>
				<tr>
					<td class="w-0"><input type="checkbox" class="checkbox" /></td>
					<td>
						<div class="flex items-center gap-4">
							<div class="avatar">
								<div class="mask mask-squircle h-10 w-10">
									<img src="https://picsum.photos/80/80?4" alt="Avatar Tailwind CSS Component" />
								</div>
							</div>
							<div>
								<div class="text-sm font-bold">Yancy Tear</div>
								<div class="text-xs opacity-50">Brazil</div>
							</div>
						</div>
					</td>
					<td>Sep 2nd</td>
					<td>
						<svg
							data-src="https://unpkg.com/heroicons/20/solid/arrow-down-right.svg"
							class="inline-block h-5 w-5 text-error"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 20 20"
							fill="currentColor"
							aria-hidden="true"
							data-id="svg-loader_6"
						>
							<path
								d="M6.28 5.22a.75.75 0 00-1.06 1.06l7.22 7.22H6.75a.75.75 0 000 1.5h7.5a.747.747 0 00.75-.75v-7.5a.75.75 0 00-1.5 0v5.69L6.28 5.22z"
							></path>
						</svg>
						250 USD
					</td>
				</tr>
				<tr>
					<td class="w-0"><input type="checkbox" class="checkbox" /></td>
					<td>
						<div class="flex items-center gap-4">
							<div class="avatar">
								<div class="mask mask-squircle h-10 w-10">
									<img src="https://picsum.photos/80/80?5" alt="Avatar Tailwind CSS Component" />
								</div>
							</div>
							<div>
								<div class="text-sm font-bold">Marjy Ferencz</div>
								<div class="text-xs opacity-50">Russia</div>
							</div>
						</div>
					</td>
					<td>Sep 2nd</td>
					<td>
						<svg
							data-src="https://unpkg.com/heroicons/20/solid/arrow-down-right.svg"
							class="inline-block h-5 w-5 text-error"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 20 20"
							fill="currentColor"
							aria-hidden="true"
							data-id="svg-loader_7"
						>
							<path
								d="M6.28 5.22a.75.75 0 00-1.06 1.06l7.22 7.22H6.75a.75.75 0 000 1.5h7.5a.747.747 0 00.75-.75v-7.5a.75.75 0 00-1.5 0v5.69L6.28 5.22z"
							></path>
						</svg>
						250 USD
					</td>
				</tr>
				<tr>
					<td class="w-0"><input type="checkbox" class="checkbox" /></td>
					<td>
						<div class="flex items-center gap-4">
							<div class="avatar">
								<div class="mask mask-squircle h-10 w-10">
									<img src="https://picsum.photos/80/80?6" alt="Avatar Tailwind CSS Component" />
								</div>
							</div>
							<div>
								<div class="text-sm font-bold">Hart Hagerty</div>
								<div class="text-xs opacity-50">United States</div>
							</div>
						</div>
					</td>
					<td>Jul 2nd</td>
					<td>
						<svg
							data-src="https://unpkg.com/heroicons/20/solid/arrow-up-right.svg"
							class="inline-block h-5 w-5 text-success"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 20 20"
							fill="currentColor"
							aria-hidden="true"
							data-id="svg-loader_8"
						>
							<path
								fill-rule="evenodd"
								d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
								clip-rule="evenodd"
							></path>
						</svg>
						320 USD
					</td>
				</tr>

				<tr>
					<td class="w-0"><input type="checkbox" class="checkbox" /></td>
					<td>
						<div class="flex items-center gap-4">
							<div class="avatar">
								<div class="mask mask-squircle h-10 w-10">
									<img src="https://picsum.photos/80/80?1" alt="Avatar Tailwind CSS Component" />
								</div>
							</div>
							<div>
								<div class="text-sm font-bold">Hart Hagerty</div>
								<div class="text-xs opacity-50">United States</div>
							</div>
						</div>
					</td>
					<td>Feb 2nd</td>
					<td>
						<svg
							data-src="https://unpkg.com/heroicons/20/solid/arrow-up-right.svg"
							class="inline-block h-5 w-5 text-success"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 20 20"
							fill="currentColor"
							aria-hidden="true"
							data-id="svg-loader_3"
						>
							<path
								fill-rule="evenodd"
								d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
								clip-rule="evenodd"
							></path>
						</svg>
						180 USD
					</td>
				</tr>
			</tbody>
		</table>
	</div>
</section>
<!-- /card -->
