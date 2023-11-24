<script lang="ts">
	import FooterLink from './FooterLink.svelte';

	import FooterSectionHeading from './FooterSectionHeading.svelte';

	import { padding, paddingRight, paddingTop } from '$lib/constants/theme';
	import { mapUrl, reserveUrl } from '$lib/constants/urls';
	import { times } from '$lib/constants/contents';
	import type { OpeningTime, Time } from '$lib/constants/types';

	import { _ } from 'svelte-i18n';

	function getTimeString(time: Time | undefined) {
		let timeString = '';
		// Add hours
		if (time!.hour < 9) {
			timeString = 0 + time!.hour.toString();
		} else {
			timeString += time!.hour.toString();
		}
		timeString += ':';

		// Add minutes
		if (time!.minutes < 9) {
			timeString = timeString + 0 + time!.minutes;
		} else {
			timeString = timeString + time!.minutes;
		}
		return timeString;
	}

	function getOpeningTimeString(time: OpeningTime) {
		if (time.open) {
			let timeString = '';

			// CALCULATE FROM TIME
			timeString +=
				$_('contents.footer.from') +
				' ' +
				getTimeString(time.fromTime!) +
				' ' +
				$_('contents.footer.to') +
				' ' +
				getTimeString(time.toTime!);
			return timeString;
		}
		return $_('contents.footer.closed');
	}
</script>

<!-- Footer -->
<footer class="z-10 flex flex-col w-screen bg-stappatored-three text-background-three">
	<!--  Contents -->
	<div class="flex items-start justify-between">
		<div
			class="flex flex-col xl:flex-row w-screen {padding} py-12 justify-center sm:justify-start gap-10 md:gap-20 items-start max-w-fit"
		>
			<!-- Items -->
			<div class="flex flex-col justify-between gap-10 sm:flex-row md:gap-20">
				<!-- Opening times -->
				<div class="flex flex-col gap-2 tracking-[1px]">
					<FooterSectionHeading icon="watch"
						>{$_('contents.footer.openingtimes')}</FooterSectionHeading
					>
					{#each times as time}
						<p class="font-thin">
							<span class="font-medium">{time.day}</span>: {time.open
								? $_('contents.footer.from') +
								  ' ' +
								  getTimeString(time.fromTime) +
								  ' ' +
								  $_('contents.footer.to') +
								  ' ' +
								  getTimeString(time.toTime)
								: $_('contents.footer.closed')}
						</p>
					{/each}
				</div>

				<!-- Address -->
				<div class="flex flex-col gap-2 tracking-[1px]">
					<FooterSectionHeading icon="map">{$_('contents.footer.address')}</FooterSectionHeading>
					<p class="font-thin">Markt 36</p>
					<p class="font-thin">6211 CK Maastricht</p>
					<p class="font-thin">{$_('contents.footer.netherlands')}</p>
					<FooterLink href={mapUrl}>{$_('contents.footer.viewonmaps')}</FooterLink>
				</div>
			</div>

			<div class="flex flex-col justify-between w-full gap-10 xl:w-fit md:gap-20 sm:flex-row">
				<!-- Pages -->
				<div class="flex flex-col gap-2 tracking-[1px]">
					<FooterSectionHeading icon="home">{$_('contents.footer.pages')}</FooterSectionHeading>
					<a href="/" class="flex-grow-0 font-thin hover:underline max-w-fit"
						>{$_('contents.navbar.about')}</a
					>
					<a href="/menu" class="flex-grow-0 font-thin hover:underline max-w-fit"
						>{$_('contents.navbar.menu')}</a
					>
					<a href="/team" class="flex-grow-0 font-thin hover:underline max-w-fit"
						>{$_('contents.navbar.team')}</a
					>
					<a href="/contact" class="flex-grow-0 font-thin hover:underline max-w-fit"
						>{$_('contents.navbar.contact')}</a
					>
				</div>

				<!-- Get in touch -->
				<div class="flex flex-col gap-2 tracking-[1px]">
					<FooterSectionHeading icon="phone"
						>{$_('contents.footer.getintouch')}</FooterSectionHeading
					>
					<FooterLink href={reserveUrl}>{$_('contents.navbar.reserve')}</FooterLink>
					<FooterLink href="/contact">{$_('contents.landing.contactBtn')}</FooterLink>
					<FooterLink href={mapUrl}>{$_('contents.footer.viewonmaps')}</FooterLink>
				</div>
			</div>
		</div>
		<div
			class="hidden {paddingTop} sm:flex sm:max-w-[25%] md:max-w-[25%] lg:max-w-[20%] xl:max-w-[12%] max-h-full {paddingRight} items-end h-full"
		>
			<img
				alt="Diving cork"
				src="/images/corkscrews/Diving Cork.png"
				class="bg-stappatored-three mix-blend-darken"
			/>
		</div>
	</div>

	<!-- Bottom bar -->
	<div class="flex w-screen border-t-[1px] border-background-three h-20 align-center items-center">
		<!-- Logo -->
		<p
			class="uppercase tracking-[4px] font-[Notable] h-full flex items-center border-r-[1px] {padding} text-lg"
		>
			Stappato
		</p>
		<!-- Copyright -->
		<a
			href="https://david.wicker.life/"
			class="{padding} font-thin text-sm hover:underline md:text-base"
			>© 2023 David Henry Francis Wicker. All rights reserved.</a
		>
	</div>
</footer>
