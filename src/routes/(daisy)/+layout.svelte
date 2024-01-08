<script lang="ts">
	import DaisyIcon from '$lib/assets/icon/daisy.svelte';
	import {
		Home,
		Users,
		Grid2X2,
		Combine,
		PieChart,
		CreditCard,
		FileText,
		Inbox,
		Sliders,
		Menu,
		Bell
	} from 'lucide-svelte';
	import { pageTitle } from '$lib/stores';

	import { ModeWatcher } from 'mode-watcher';
	import Message from '$lib/components/header/Message.svelte';
	import { Toaster as DefaultSonner } from '$lib/components/sonner';
	import { ModeToggle } from '$lib/components/mode-toggle';
</script>

<ModeWatcher />
<DefaultSonner />

<div class="drawer min-h-screen bg-base-100 lg:drawer-open">
	<input id="my-drawer" type="checkbox" class="drawer-toggle" />

	<!-- content -->
	<main class="drawer-content">
		<div class="grid grid-cols-12 grid-rows-[min-content] gap-y-12 p-4 lg:gap-x-12 lg:p-10">
			<!-- header -->
			<header class="col-span-12 flex items-center gap-2 lg:gap-4">
				<!-- lg 미만 스크린에서 사용할 햄버거 메뉴 -->
				<label for="my-drawer" class="btn btn-square btn-ghost drawer-button lg:hidden">
					<Menu class="h-5 w-5" />
				</label>

				<!-- Page Title -->
				<div class="grow">
					<h1 class="lg:text-2xl lg:font-semibold">{$pageTitle}</h1>
				</div>

				<!-- SEARCH input -->
				<div>
					<input type="text" placeholder="Search" class="input input-sm rounded-full max-sm:w-24" />
				</div>

				<!-- ALRAM dropdown -->
				<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
				<div class="dropdown dropdown-end z-10">
					<div tabindex="0" class="btn btn-circle btn-ghost">
						<div class="indicator">
							<span class="badge indicator-item badge-error badge-xs"></span>
							<Bell class="h-5 w-5" />
						</div>
					</div>
					<ul
						tabindex="0"
						class="menu dropdown-content mt-3 w-80 rounded-box bg-base-100 p-2 shadow-2xl"
					>
						<Message
							msgEvent="New message"
							msgContent="Alice: Hi, did you get my files?"
							msgAvatar="https://picsum.photos/80/80?1"
						/>
						<Message
							msgEvent="Reminder"
							msgContent="Your meeting is at 10am"
							msgAvatar="https://picsum.photos/80/80?2"
						/>
						<Message
							msgEvent="New payment"
							msgContent="Received $1900 from Alice"
							msgAvatar="https://picsum.photos/80/80?3"
						/>
						<Message
							msgEvent="New payment"
							msgContent="Received $2500 from John Doe"
							msgAvatar="https://picsum.photos/80/80?4"
						/>
					</ul>
				</div>
				<!-- /dropdown -->

				<!-- PROFILE dropdown -->
				<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
				<div class="dropdown dropdown-end z-10">
					<div tabindex="0" class="avatar btn btn-circle btn-ghost">
						<div class="w-10 rounded-full">
							<img alt="profile" src="https://picsum.photos/80/80?5" />
						</div>
					</div>
					<ul
						tabindex="0"
						class="menu dropdown-content mt-3 w-52 rounded-box bg-base-100 p-2 shadow-2xl"
					>
						<li>
							<a href={undefined}>Profile</a>
						</li>
						<li>
							<a href={undefined}>
								Inbox
								<span class="badge badge-success">12</span>
							</a>
						</li>
						<li><a href={undefined}>Settings</a></li>
						<li><a href={undefined}>Logout</a></li>
					</ul>
				</div>
				<!-- /dropdown -->

				<!-- Toggle mode -->
				<ModeToggle />
				<!-- /Toggle mode -->
			</header>
			<!-- /header -->

			<!-- page -->
			<slot />
			<!-- /page -->
		</div>
	</main>
	<!-- /content -->

	<aside class="drawer-side z-10">
		<label for="my-drawer" class="drawer-overlay"></label>
		<!-- sidebar menu -->
		<nav class="flex min-h-screen w-72 flex-col gap-2 overflow-y-auto bg-base-100 px-6 py-10">
			<div class="mx-4 flex items-center gap-2 font-black">
				<DaisyIcon />
				Daisy Corp
			</div>
			<ul class="menu">
				<li>
					<a href="/dashboard" class="active">
						<Home class="h-5 w-5" />
						Dashboard
					</a>
				</li>
				<li>
					<details>
						<summary>
							<Grid2X2 class="h-5 w-5" />
							Pages
						</summary>
						<ul>
							<li><a href="/forms">Forms</a></li>
							<li><a href="/inputs">Inputs</a></li>
							<li><a href="/payment">Payment</a></li>
						</ul>
					</details>
				</li>
				<li>
					<details>
						<summary>
							<Combine class="h-5 w-5" />
							Components
						</summary>
						<ul>
							<li><a href="/components">All Transactions</a></li>
							<li><a href="/components/accordion">Accordion</a></li>
							<li><a href="/components/pagination">Pagination</a></li>
							<li><a href="/components/toast">Toast</a></li>
							<li><a href={undefined}>Successful Transactions</a></li>
						</ul>
					</details>
				</li>
				<li>
					<a href={undefined}>
						<PieChart class="h-5 w-5" />
						Stats
					</a>
				</li>
				<li>
					<a href={undefined}>
						<FileText class="h-5 w-5" />
						Logs
					</a>
				</li>
				<li>
					<a href={undefined}>
						<Inbox class="h-5 w-5" />
						Messages
						<span class="badge badge-info badge-sm">12</span>
					</a>
				</li>
				<li>
					<a href="/users">
						<Users class="h-5 w-5" />
						Users
					</a>
				</li>
				<li>
					<details>
						<summary>
							<Sliders class="h-5 w-5" />
							Settings
						</summary>
						<ul>
							<li><a href={undefined}>General</a></li>
							<li><a href={undefined}>Themes</a></li>
							<li><a href={undefined}>Routes</a></li>
							<li><a href={undefined}>Comments</a></li>
							<li><a href={undefined}>Media</a></li>
							<li><a href={undefined}>Roles</a></li>
							<li><a href={undefined}>Merchants</a></li>
							<li>
								<a href={undefined}>Tools</a>
								<ul>
									<li><a href={undefined}>Files</a></li>
									<li><a href={undefined}>Scripts</a></li>
									<li><a href={undefined}>Suggestions</a></li>
								</ul>
							</li>
							<li><a href={undefined}>Databases</a></li>
							<li><a href={undefined}>Gateways</a></li>
							<li><a href={undefined}>Plugins</a></li>
							<li><a href={undefined}>API</a></li>
							<li><a href={undefined}>Support</a></li>
						</ul>
					</details>
				</li>
			</ul>
		</nav>
		<!-- /sidebar menu -->
	</aside>
</div>
