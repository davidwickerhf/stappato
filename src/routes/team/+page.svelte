<script lang="ts">
	import Employee from '../../lib/components/Employee.svelte';

	import LandingPicture from '$lib/components/LandingPicture.svelte';
	import TextButton from '$lib/components/TextButton.svelte';
	import { h2, padding, paddingY } from '$lib/constants/theme';

	import { _ } from 'svelte-i18n';
	import { employees } from '$lib/constants/contents';

	let open: string = '';
</script>

<svelte:head>
	<title>Stappato Team</title>
	<meta name="description" content="Italian Restaurant in Maastricht" />
</svelte:head>

<!-- Landing picture -->
<LandingPicture title={$_('contents.team.title')} />

<!-- Special requests -->
<section class="relative {padding} {paddingY} mb-20 md:mb-30 lg:mb-40">
	<div class="flex flex-col min-h-fit">
		<h2 class="text-darkbrown-three {h2}">{$_('contents.team.text')}</h2>

		<!-- GRID -->
		<div class="grid grid-cols-1 gap-8 py-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-fit">
			{#each employees as employee, index}
				<Employee {employee} bind:open />
			{/each}
		</div>

		<!-- Link -->
		<TextButton url="/contact">{$_('contents.team.joinText')}</TextButton>
	</div>

	<div class="absolute right-20 -z-10 opacity-20 -bottom-2 md:bottom-6 lg:bottom-4 lg:right-40">
		<img
			alt="Dancing Corks"
			src="/images/corkscrews/Dancing Corks.png"
			class="max-h-[435px] md:max-h-[525px] lg:max-h-[625px]"
		/>
	</div>
</section>
