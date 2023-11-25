<script lang="ts">
	import Footer from '../lib/components/Footer.svelte';

	import Sidebar from '../lib/components/Sidebar.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import { navigating } from '$app/stores';
	import { page } from '$app/stores';

	import { _ } from 'svelte-i18n';
	import '../app.css';
	import './styles.css';
	import { toggleSidebar } from '$lib/store/SidebarStore';
	import { afterNavigate } from '$app/navigation';

	$: scrollY = 0;
	$: color = scrollY >= 35 ? '#000' : '#FEFCF2';
	$: if ($navigating) toggleSidebar(false);

	let box: any;

	afterNavigate(() => {
		document.getElementById('content')?.scrollTo(0, 0);
	});
</script>

<!-- Import material icons -->
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="true" />

<link
	rel="stylesheet"
	href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
/>

<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="true" />
<link
	href="https://fonts.googleapis.com/css2?family=Notable&family=Poppins:wght@300;400;500;600;700&display=swap"
	rel="stylesheet"
/>

<Navbar
	backgroundHeight={$page.url.pathname != '/' ? 80 : scrollY}
	color={$page.url.pathname != '/' ? 'black' : color}
/>

<Sidebar />
<div
	class="fixed flex flex-col w-screen h-full overflow-hidden app overscroll-none bg-background-three"
>
	<div
		id="content"
		class="flex flex-col justify-between min-h-[100dvh] overflow-scroll overscroll-none"
		bind:this={box}
		on:scroll={() => {
			scrollY = box.scrollTop;
		}}
	>
		<main>
			<slot />
		</main>

		<Footer />
	</div>
</div>

<style lang="postcss">
	:global(html) {
		background-color: theme(colors.background.three);
		font-family: 'Poppins', sans-serif;
	}
</style>
