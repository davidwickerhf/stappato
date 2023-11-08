<script>
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
	<!-- To each page add xxx margin to the top (including image overflow) -->
	<div class="px-6 py-6">
		<span class="material-symbols-outlined md:invisible"> menu </span>
	</div>

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
