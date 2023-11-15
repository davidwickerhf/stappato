<script>
	import { theme } from '$lib/constants/theme';
</script>

<div
	class="flex lg:row-span-2 w-full max-h-[275px] lg:max-h-[375px] lg:max-w-[550px] transition-all duration-200 ease-in-out"
>
	<a
		href="https://maps.app.goo.gl/Wv3ZNrFMotgb3Qq68"
		class="w-full h-full transition-all duration-200 ease-in-out map hover:cursor-pointer lg:bg-[auto_100%] bg-[100%_auto] hover:bg-[120%_auto] lg:hover:bg-[auto_120%]"
		style="--white: {theme.colors.background.three};"
	>
		<img
			class="invisible w-full h-full"
			alt="map hidden "
			src="/images/assets/stappatomap.png"
			style="visibility: hidden;"
		/>
	</a>
</div>

<style lang="scss">
	.map {
		z-index: 10;
		background-color: var(--white);
		background-image: url('/images/assets/stappatomap.png');
		mix-blend-mode: darken;
		background-position: center center;
		background-repeat: no-repeat;
	}
</style>
