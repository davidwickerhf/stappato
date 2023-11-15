<script lang="ts">
	import Button from './Button.svelte';

	import { sidebar, toggleSidebar } from '$lib/store/SidebarStore';
	import Language from './Language.svelte';
	import Underline from './Underline.svelte';
	import { padding, theme } from '$lib/constants/theme';
	import { reserveUrl } from '$lib/constants/urls';

	export let color = '#FEFCF2';
	export let backgroundHeight = 0;
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<!-- To each page add xxx margin to the top (including image overflow) -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- Navbar -->
<div
	class="fixed z-50 flex items-center justify-between w-screen h-20 py-6 mt-0 align-middle border-black navbar {padding}"
	style="border-bottom-width: {$sidebar.open ? '0px' : '1px'}"
>
	<!-- Menu button -->
	<div
		class="flex flex-col justify-center transition-colors duration-200 ease-in-out md:hidden"
		style="color: {color};"
	>
		<div
			class="transition-all duration-100 ease-in-out cursor-default select-none material-symbols-outlined hover:cursor-pointer hover:scale-125"
			on:click={() => toggleSidebar()}
		>
			<span class=""> {$sidebar.open ? 'close' : 'menu'} </span>
		</div>
	</div>

	<!-- Navigation buttons -->
	<ul class="hidden gap-8 md:flex">
		<Underline url="/" {color}>About</Underline>
		<Underline url="/menu" {color}>Menu</Underline>
		<Underline url="/team" {color}>Team</Underline>
		<Underline url="contact" {color}>Contact</Underline>
	</ul>

	<!-- Action buttons -->
	<div class="flex gap-4">
		<div class="hidden sm:flex">
			<Button
				bgColor={theme.colors.stappatored.three}
				textColor={theme.colors.background.three}
				url={reserveUrl}>Reserve</Button
			>
		</div>

		<!-- Language btn -->
		<Language {color} />
	</div>
</div>

<!-- Stappato logo -->
<div
	class="fixed left-[50%] translate-x-[-50%] w-fit hidden lg:flex flex-col h-20 z-[60] justify-center"
>
	<img
		alt="logo"
		class="h-full mix-blend-luminosity max-h-[48px] grayscale"
		src="images/corkscrews/Dancing Corks.png"
	/>
</div>

<!-- Background -->
<div
	class="fixed z-40 w-screen bg-white max-h-20"
	style="height: {backgroundHeight}px; background-color: {$sidebar.open
		? 'rgba(0,0,0,0)'
		: 'rgba(255,255,255,1)'}"
/>
