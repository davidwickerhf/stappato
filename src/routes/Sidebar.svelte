<script>
	import { sidebar } from '$lib/store/SidebarStore';
</script>

<!-- Sidebar -->
<div class="h-full {$sidebar.open ? '' : 'hidden'} pt-20 bg-stappatored-three">
	<p>Sidebar</p>
</div>

<style lang="postcss">
	:global(html) {
		background-color: theme(colors.background.three);
	}
</style>
