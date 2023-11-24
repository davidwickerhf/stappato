<script>
	import { padding, paddingY, theme } from '$lib/constants/theme';
	import { reserveUrl } from '$lib/constants/urls';
	import { sidebar } from '$lib/store/SidebarStore';
	import Button from './Button.svelte';
	import Language from './Language.svelte';
	import Underline from './Underline.svelte';
</script>

<!-- Sidebar -->
<div
	class="fixed h-[100dvh] w-screen {$sidebar.open ? '' : 'hidden'} pt-20 bg-stappatored-three z-10"
>
	<nav class="{padding} {paddingY}">
		<ul class="flex flex-col w-full gap-6">
			<Underline color={theme.colors.background.three} url="/">About</Underline>
			<Underline color={theme.colors.background.three} url="/menu">Menu</Underline>
			<Underline color={theme.colors.background.three} url="/team">Team</Underline>
			<Underline color={theme.colors.background.three} url="/contact">Contact</Underline>
		</ul>
	</nav>

	<!-- Bottom bar -->
	<div
		class="fixed bottom-0 flex w-full {padding} py-6 border-t border-background-three justify-between"
	>
		<Button url={reserveUrl}>Reserve</Button>
		<Language color={theme.colors.background.three} />
	</div>
</div>

<style lang="postcss">
	:global(html) {
		background-color: theme(colors.background.three);
	}
</style>
