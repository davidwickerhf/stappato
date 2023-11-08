<script>
	import Sidebar from './Sidebar.svelte';
	import Navbar from '$lib/components/Navbar.svelte';

	import { _, locale } from 'svelte-i18n';
	import '../app.css';
	import './styles.css';
</script>

<!-- Import material icons -->
<link
	rel="stylesheet"
	href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
/>

<Navbar />
<div class="app fixed overflow-hidden h-full w-screen">
	<Sidebar />

	<main class="overflow-hidden">
		<slot />
	</main>

	<!-- Footer -->
	<footer />
</div>

<style lang="postcss">
	:global(html) {
		background-color: theme(colors.background.three);
	}
</style>
