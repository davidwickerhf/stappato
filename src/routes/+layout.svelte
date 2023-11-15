<script lang="ts">
	import Sidebar from '../lib/components/Sidebar.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import { navigating } from '$app/stores';

	import { _, locale } from 'svelte-i18n';
	import '../app.css';
	import './styles.css';
	import { sidebar, toggleSidebar } from '$lib/store/SidebarStore';

	$: scrollY = 0;
	$: color = scrollY >= 35 ? '#000' : '#FEFCF2';
	$: if ($navigating) toggleSidebar(false);

	let box: any;
</script>

<!-- Import material icons -->
<link
	rel="stylesheet"
	href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
/>

<Navbar backgroundHeight={scrollY} {color} />
<Sidebar />
<div
	class="fixed flex flex-col w-screen h-full overflow-hidden app overscroll-none bg-background-three"
>
	<main
		class="overflow-scroll overscroll-none"
		bind:this={box}
		on:scroll={() => {
			scrollY = box.scrollTop;
		}}
	>
		<slot />
	</main>

	<!-- Footer -->
	<footer />
</div>

<style lang="postcss">
	:global(html) {
		background-color: theme(colors.background.three);
		font-family: 'Poppins', sans-serif;
	}
</style>
