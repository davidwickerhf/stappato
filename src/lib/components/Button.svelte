<script lang="ts">
	export let bgColor = '#FEFCF2';
	export let textColor = '#B65139';
	export let url: string;
</script>

<!-- Reserve btn -->
<div
	style="--color: {textColor}; --bg-color: {bgColor}"
	class="button flex font-semibold uppercase tracking-[2px] py-3 px-6 hover:cursor-pointer hover:bg-black hover:text-background-three justify-center transition-all ease-in-out duration-200"
>
	<a href={url}><slot /></a>
</div>

<style>
	.button {
		color: var(--color);
		background-color: var(--bg-color);
	}
</style>
