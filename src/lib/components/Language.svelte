<script>
	import { locale, locales } from 'svelte-i18n';
</script>

<div
	class="flex justify-between h-12 border-dark-three border-2 text-alabaster-two align-middle uppercase text-background-three font-semibold"
>
	<button
		on:click={() => {
			locale.set($locales[($locales.indexOf($locale ?? 'en') + 1) % $locales.length]);
		}}
		class="w-12 h-full text-center align-middle justify-cente uppercase"
	>
		{$locale?.substring(0, 2)}
	</button>
</div>
