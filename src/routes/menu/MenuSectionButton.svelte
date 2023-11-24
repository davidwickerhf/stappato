<script lang="ts">
	export let selected: boolean = true;
	export let section: string;
</script>

<a href="/menu/" class="flex items-center gap-4 text-lg group tracking-[3px]">
	<p class="group-hover:underline">{section}</p>
	<div
		class="flex select-none transition-all duration-200 ease-in-out h-full items-center {selected
			? ' inline-block rotate-45'
			: ''}"
	>
		<span class="inline-block select-none material-symbols-outlined"> arrow_right_alt </span>
	</div>
</a>
