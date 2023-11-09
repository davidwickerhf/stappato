<script lang="ts">
	import { sidebar, toggleSidebar } from '$lib/store/SidebarStore';
	import Language from './Language.svelte';
	import Underline from './Underline.svelte';

	export let color = '#FEFCF2';
	export let backgroundHeight = 0;
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<!-- To each page add xxx margin to the top (including image overflow) -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- Navbar -->
<div
	class=" h-20 fixed items-center justify-between w-screen px-6 py-6 md:px-10 align-middle flex mt-0 z-50 border-b-[{$sidebar.open
		? '0px'
		: '1px'}] border-black"
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
		<!-- Reserve btn -->
		<div
			class="hidden sm:flex text-background-three font-semibold uppercase tracking-[2px] py-3 px-6 bg-stappatored-three hover:cursor-pointer hover:bg-black"
		>
			<a href="https://www.thefork.com/restaurant/stappato-r750369">Reserve</a>
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
		class="h-full mix-blend-luminosity max-h-[48px]"
		src="src/lib/images/corkscrews/Dancing Corks.svg"
	/>
</div>

<!-- Background -->
<div
	class="fixed z-40 w-screen bg-white max-h-20"
	style="height: {backgroundHeight}px; background-color: {$sidebar.open
		? 'rgba(0,0,0,0)'
		: 'rgba(255,255,255,1)'}"
/>
