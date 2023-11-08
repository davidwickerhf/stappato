<script labg="ts">
	import { sidebar, toggleSidebar } from '$lib/store/SidebarStore';
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<!-- To each page add xxx margin to the top (including image overflow) -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="fixed w-screen px-6 py-6 bg-stappatored-three align-middle flex">
	<div
		class="material-symbols-outlined sm:invisible cursor-default hover:cursor-pointer hover:scale-125 transition-all ease-in-out duration-100 select-none"
		on:click={() => toggleSidebar()}
	>
		<span class=""> menu </span>
	</div>
</div>

<!-- Sidebar -->
<div class="h-screen w-screen {$sidebar.open ? '' : 'hidden'} bg-stappatored-three">
	<p>Sidebar</p>
</div>
