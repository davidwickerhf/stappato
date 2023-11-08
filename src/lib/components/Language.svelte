<script>
	import { locale, locales } from 'svelte-i18n';
</script>

<div class="flex justify-between h-12 border-dark-three border-2 text-alabaster-two align-middle">
	{#each $locales as l}
		<button
			on:click={() => {
				locale.set(l);
			}}
			class="w-12 h-full text-center align-middle justify-center cursor-none {$locale?.slice(
				0,
				2
			) === l
				? 'bg-dark-three text-alabaster-two'
				: ' text-dark-three '} "
		>
			{l}
		</button>
	{/each}
</div>
