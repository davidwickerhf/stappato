<script>
	import { sidebar } from '$lib/store/SidebarStore';
</script>

<!-- Sidebar -->
<div
	class="fixed h-screen w-screen {$sidebar.open ? '' : 'hidden'} pt-20 bg-stappatored-three z-10"
>
	<p>Sidebar</p>
</div>

<style lang="postcss">
	:global(html) {
		background-color: theme(colors.background.three);
	}
</style>
