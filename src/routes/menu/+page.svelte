<script lang="ts">
	import MenuSectionButton from './MenuSectionButton.svelte';

	import MenuSection from './MenuSection.svelte';

	import LandingPicture from '$lib/components/LandingPicture.svelte';
	import { padding, paddingY } from '$lib/constants/theme';

	let lunch: boolean = true;
</script>

<svelte:head>
	<title>Stappato Menu</title>
	<meta name="description" content="Italian Restaurant in Maastricht" />
</svelte:head>

<!-- Landing picture -->
<LandingPicture title="Our menu" />

<div class="flex-row flex {padding} {paddingY} gap-24">
	<!-- Sidebar -->
	<div class="flex-col hidden gap-8 text-darkbrown-three lg:flex">
		<!-- Sidebar item -->
		<MenuSectionButton bind:selected={lunch} section="Lunch" />
	</div>

	<!-- Menu contents -->
	<MenuSection
		bind:selected={lunch}
		section={{
			title: 'Lunch',
			fromTime: { hour: 12, minutes: 0 },
			toTime: { hour: 17, minutes: 0 },
			dishes: [
				{
					title: 'Bolognese',
					description: 'Ask our waiters for the ingredients',
					price: 7.5
				}
			]
		}}
	/>
</div>
