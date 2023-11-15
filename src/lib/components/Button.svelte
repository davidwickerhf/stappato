<script lang="ts">
	import { theme } from '$lib/constants/theme';

	export let bgColor = '#FEFCF2';
	export let textColor = '#B65139';
	export let url: string;
	export let padding = 24;
</script>

<!-- Reserve btn -->
<div
	style="--color: {textColor}; --bg-color: {bgColor}; --white: {theme.colors.background
		.three}; padding-right: {padding}px; padding-left: {padding}px;"
	class="button flex sm:max-w-fit font-semibold uppercase tracking-[2px] py-3 hover:cursor-pointer justify-center transition-all ease-in-out duration-200 align-middle items-center"
>
	<a href={url}><slot /></a>
</div>

<style lang="scss">
	.button {
		color: var(--color);
		background-color: var(--bg-color);

		&:hover {
			color: var(--white);
			background-color: black;
		}
	}
</style>
