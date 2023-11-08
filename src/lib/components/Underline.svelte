<script lang="ts">
	import { sidebar, toggleSidebar } from '$lib/store/SidebarStore';

	export let url: string;
</script>

<div class="group flex flex-col w-auto bottom-[-4px]">
	<li
		class="text-lg font-semibold text-background-three hover:cursor-pointer tracking-[3px] uppercase"
	>
		<a href="/"> <slot /> </a>
	</li>
	<div
		class="w-0 h-[2px] bg-background-three group-hover:w-full transition-all ease-in-out duration-100"
	/>
</div>
