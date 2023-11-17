<script>
	import Employee from '../../lib/components/Employee.svelte';

	import LandingPicture from '$lib/components/LandingPicture.svelte';
	import TextButton from '$lib/components/TextButton.svelte';
	import { h2, padding, paddingY } from '$lib/constants/theme';
</script>

<svelte:head>
	<title>Stappato Team</title>
	<meta name="description" content="Italian Restaurant in Maastricht" />
</svelte:head>

<!-- Landing picture -->
<LandingPicture title="Our team" />

<!-- Special requests -->
<section
	class="relative {padding} {paddingY} grid gap-8 grid-cols-[auto_auto] grid-rows-[auto] justify-between align-middle items-center mb-20 md:mb-30 lg:mb-40"
>
	<div class="flex flex-col w-full min-h-fit">
		<h2 class="text-darkbrown-three {h2}">Meet the stappato team</h2>

		<!-- GRID -->
		<div class="flex flex-row flex-wrap gap-6 py-10">
			<Employee
				bio="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
			labore et dolore magna aliqua."
				name="Tim de Vrouw"
				position="Founder and Chef"
				src="/images/images/tim.jpg"
			/>
			<Employee
				bio="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
			labore et dolore magna aliqua."
				name="Tim de Vrouw"
				position="Founder and Chef"
				src="/images/images/tim.jpg"
			/>
			<Employee
				bio="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
			labore et dolore magna aliqua."
				name="Tim de Vrouw"
				position="Founder and Chef"
				src="/images/images/tim.jpg"
			/>
			<Employee
				bio="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
			labore et dolore magna aliqua."
				name="Tim de Vrouw"
				position="Founder and Chef"
				src="/images/images/tim.jpg"
			/>
			<Employee
				bio="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
			labore et dolore magna aliqua."
				name="Tim de Vrouw"
				position="Founder and Chef"
				src="/images/images/tim.jpg"
			/>
			<Employee
				bio="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
			labore et dolore magna aliqua."
				name="Tim de Vrouw"
				position="Founder and Chef"
				src="/images/images/tim.jpg"
			/>
		</div>

		<!-- Link -->
		<TextButton url="/contact">Want to join the team? Reach out!</TextButton>
	</div>

	<div class="absolute right-20 -z-10 opacity-20 -bottom-2 md:bottom-6 lg:bottom-4 lg:right-40">
		<img
			alt="Dancing Corks"
			src="/images/corkscrews/Dancing Corks.png"
			class="max-h-[435px] md:max-h-[525px] lg:max-h-[625px]"
		/>
	</div>
</section>
