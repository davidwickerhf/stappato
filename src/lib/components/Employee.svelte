<script lang="ts">
	export let name: string;
	export let position: string;
	export let bio: string;
	export let src: string;
</script>

<!-- Individual grid item -->
<div class="w-[295px] h-[445px] shadow-2xl bg-background-three">
	<!-- Profile picture -->
	<div class="relative overflow-hidden h-[195px]">
		<img class="absolute top-0 w-full" alt="staff profile" {src} />
	</div>

	<!-- Content -->
	<div class="flex flex-col gap-4 px-6 py-6">
		<!-- Name and title -->
		<div class="flex flex-col gap-[2px]">
			<p class="font-medium tracking-[1px]">{name}</p>
			<p class="font-thin tracking-[1px]">{position}</p>
		</div>

		<!-- Description -->
		<p>
			{bio}
		</p>
	</div>
</div>
