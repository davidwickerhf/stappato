<script lang="ts">
	import { padding, paddingY } from '$lib/constants/theme';
	import { mapUrl, reserveUrl } from '$lib/constants/urls';
</script>

<!-- Footer -->
<footer class="flex flex-col w-screen gap-10 md:gap-20 bg-stappatored-three text-background-three">
	<!--  Contents -->
	<div
		class="flex flex-col sm:flex-row sm:flex-wrap w-screen {padding} {paddingY} justify-center sm:justify-start gap-10 basis-0"
	>
		<!-- Items -->
		<!-- Pages -->
		<div class="flex flex-col gap-2 tracking-[1px] flex-grow-0">
			<div class="flex items-center gap-2 font-medium uppercase">
				<span class="material-symbols-outlined" style="font-size: 20px"> home </span>
				Pages
			</div>
			<a href="/" class="flex-grow-0 font-thin hover:underline max-w-fit">About</a>
			<a href="/menu" class="flex-grow-0 font-thin hover:underline max-w-fit">Menu</a>
			<a href="/team" class="flex-grow-0 font-thin hover:underline max-w-fit">Team</a>
			<a href="/contact" class="flex-grow-0 font-thin hover:underline max-w-fit">Contact</a>
		</div>

		<!-- Opening times -->
		<div class="flex flex-col gap-2 tracking-[1px]">
			<div class="flex items-center gap-2 font-medium uppercase">
				<span class="material-symbols-outlined" style="font-size: 20px"> watch </span>
				Opening times
			</div>
			<p class="font-thin">Monday</p>
			<p class="font-thin">Tuesday</p>
			<p class="font-thin">Wednesday</p>
			<p class="font-thin">Thursday</p>
			<p class="font-thin">Friday</p>
			<p class="font-thin">Saturday</p>
			<p class="font-thin">Sunday</p>
		</div>

		<!-- Address -->
		<div class="flex flex-col gap-2 tracking-[1px]">
			<div class="flex items-center gap-2 font-medium uppercase">
				<span class="material-symbols-outlined" style="font-size: 20px"> map </span>
				Address
			</div>
			<p class="font-thin">Markt 36</p>
			<p class="font-thin">6211 CK Maastricht</p>
			<p class="font-thin">Netherlands</p>
			<a href={mapUrl} class="flex items-center gap-4 font-medium max-w-fit"
				><span class="hover:underline">View on maps </span><span class="material-symbols-outlined"
					>arrow_right_alt</span
				></a
			>
		</div>

		<!-- Get in touch -->
		<div class="flex flex-col gap-2 tracking-[1px]">
			<div class="flex items-center gap-2 font-medium uppercase">
				<span class="material-symbols-outlined" style="font-size: 20px"> phone </span>
				Get in touch
			</div>
			<a href={reserveUrl} class="flex items-center gap-4 font-medium max-w-fit"
				><span class="hover:underline">Reserve</span><span class="material-symbols-outlined"
					>arrow_right_alt</span
				></a
			>
			<a href="/contact" class="flex items-center gap-4 font-medium max-w-fit"
				><span class="hover:underline">Contact us </span><span class="material-symbols-outlined"
					>arrow_right_alt</span
				></a
			>
			<a href={mapUrl} class="flex items-center gap-4 font-medium max-w-fit"
				><span class="hover:underline">View on maps </span><span class="material-symbols-outlined"
					>arrow_right_alt</span
				></a
			>
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
		<a href="https://david.wicker.life/" class="{padding} font-thin text-sm hover:underline"
			>© 2023 David Henry Francis Wicker. All rights reserved.</a
		>
	</div>
</footer>

<style lang="postcss">
	:global(html) {
		background-color: theme(colors.background.three);
		font-family: 'Poppins', sans-serif;
	}
</style>
