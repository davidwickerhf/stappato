<script lang="ts">
	import { padding } from '$lib/constants/theme';
	export let src: string = 'images/images/menu.jpg';
	export let title: string;
</script>

<div class="relative z-0 h-[550px] overflow-clip">
	<img alt="landing" {src} class="absolute object-cover w-screen h-[100dvh] min-h-[500px]" />
	<div class="absolute w-full h-full bg-[rgba(0,0,0,.5)]" />

	<section
		class="absolute flex flex-col items-center justify-center w-screen h-full gap-8 {padding}  align-middle text-background-three"
	>
		<!-- Heading -->
		<div class="flex flex-col items-center justify-center gap-6">
			<h1 class="pt-20 text-5xl uppercase sm:text-6xl md:text-7xl xl:text-8xl">{title}</h1>
		</div>
	</section>
</div>
