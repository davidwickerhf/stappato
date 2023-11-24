<script>
	import Employee from '../../lib/components/Employee.svelte';

	import LandingPicture from '$lib/components/LandingPicture.svelte';
	import TextButton from '$lib/components/TextButton.svelte';
	import { h2, padding, paddingY } from '$lib/constants/theme';

	import { _ } from 'svelte-i18n';
	import { employees } from '$lib/constants/contents';
</script>

<svelte:head>
	<title>Stappato Team</title>
	<meta name="description" content="Italian Restaurant in Maastricht" />
</svelte:head>

<!-- Landing picture -->
<LandingPicture title={$_('contents.team.title')} />

<!-- Special requests -->
<section
	class="relative {padding} {paddingY} grid gap-8 grid-cols-[auto_auto] grid-rows-[auto] justify-between align-middle items-center mb-20 md:mb-30 lg:mb-40"
>
	<div class="flex flex-col w-full min-h-fit">
		<h2 class="text-darkbrown-three {h2}">{$_('contents.team.text')}</h2>

		<!-- GRID -->
		<div class="flex flex-row flex-wrap gap-6 py-10">
			{#each employees as employee, index}
				<Employee {employee} />
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
