<script>
	import Navbar from '$lib/components/Navbar.svelte';

	import '../app.css';
	import './styles.css';
</script>

<!-- Import material icons -->
<link
	rel="stylesheet"
	href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
/>

<div class="app">
	<!-- Navbar -->
	<Navbar />

	<main>
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
