<script lang="ts">
	export let url: string;
</script>

<a
	href={url}
	class="flex items-center flex-grow-0 gap-4 pt-8 align-middle transition-all duration-200 ease-in-out max-w-fit text-darkbrown-three hover:scale-105"
>
	<p class="tracking-[2px]"><slot /></p>
	<span class="material-symbols-outlined">chevron_right</span>
</a>
