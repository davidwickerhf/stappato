<script>
	import LandingPicture from '../../lib/components/LandingPicture.svelte';

	import { h2, padding, paddingY } from '$lib/constants/theme';

	import { _ } from 'svelte-i18n';
	import { contents } from '$lib/constants/contents';
</script>

<svelte:head>
	<title>Contact Stappato</title>
	<meta name="description" content="Italian Restaurant in Maastricht" />
</svelte:head>

<!-- Landing picture -->
<LandingPicture title={$_('contents.contact.title')} />

<!-- Special requests -->
<section
	class="relative {padding} {paddingY} grid gap-8 grid-cols-[auto_auto] grid-rows-[auto] justify-between align-middle items-center mb-20 md:mb-30 lg:mb-40"
>
	<div class="flex flex-col w-full min-h-fit">
		<h2 class="text-darkbrown-three {h2}">{$_('contents.contact.reachout')}</h2>
		<p class="max-w-[700px] pb-8 pt-2 text">
			{$_(contents.contactPage.contactText)}
		</p>

		<!-- Contact info -->
		<div class="flex flex-col gap-4 text-darkbrown-three">
			<div class="flex items-center gap-4">
				<!-- Call -->
				<span class="material-symbols-outlined">phone</span>
				<p>
					{$_('contents.contact.phoneText')}
					<span class=" whitespace-nowrap hover:underline hover:cursor-pointer"
						>+31 043 3030053</span
					>
				</p>
			</div>
			<div class="flex items-center gap-4">
				<!-- Email -->
				<span class="material-symbols-outlined">mail</span>
				<p>
					{$_('contents.contact.emailText')}
					<a
						href="mailto:info@stappato.nl"
						class="whitespace-nowrap hover:underline hover:cursor-pointer">info@stappato.nl</a
					>
				</p>
			</div>
		</div>
	</div>

	<div
		class="absolute -rotate-[70deg] right-20 -z-10 opacity-20 -top-2 md:top-6 lg:top-4 lg:right-40"
	>
		<img
			alt="Dancing Corks"
			src="/images/corkscrews/Flying Cork.png"
			class="max-h-[435px] md:max-h-[525px] lg:max-h-[625px]"
		/>
	</div>
</section>
