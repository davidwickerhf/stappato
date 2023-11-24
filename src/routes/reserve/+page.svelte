<script lang="ts">
	import LandingPicture from '$lib/components/LandingPicture.svelte';
	import { h2, padding, paddingY } from '$lib/constants/theme';

	import { _ } from 'svelte-i18n';
</script>

<svelte:head>
	<title>Stappato Menu</title>
	<meta name="description" content="Italian Restaurant in Maastricht" />
</svelte:head>

<!-- Landing picture -->
<LandingPicture title={$_('contents.reserve.title')} />

<!-- Reserve section -->
<section class="relative {padding} {paddingY}   bg-white flex flex-col gap-8">
	<!-- Background image -->
	<div class="absolute left-0 z-10 rotate-45 opacity-100 -top-2 md:top-20 lg:top-30">
		<img
			alt="Dancing Corks"
			src="/images/corkscrews/Open Bottle.png"
			class="max-h-[275px] md:max-h-[325px] lg:max-h-[375px]"
		/>
	</div>

	<h2 class="text-darkbrown-three {h2}">{$_('contents.reserve.heading')}</h2>
	<div class="border h-fit min-h-fit bg-darkbrown-three">
		<iframe
			title="booking"
			src="https://widget.thefork.com/aca1fc5b-ac25-4e38-baec-1e4f908fb726"
			style="width: 100%; height:100%; min-height: 800px; overflow:scroll; background-color: white;"
		/>
	</div>
</section>
