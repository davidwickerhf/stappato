<script lang="ts">
	import { ReviewType } from '$lib/constants/types';
	import { number } from 'svelte-i18n';

	export let src: string | undefined = undefined;
	export let comment: string;

	// Review variables
	export let rating: number | undefined = undefined;
	export let origin: ReviewType | undefined = undefined;

	// User variables
	export let name: string;
</script>

<!-- Review -->
<div
	class="flex shadow-2xl sm:min-h-[345px] md:h-[390px] lg:h-[425px] {origin == ReviewType.Tim
		? 'bg-stappatored-three text-background-three sm:text-black sm:bg-background-three'
		: 'bg-background-three'}"
>
	<!-- Content -->
	<div class="flex flex-col justify-between px-8 py-10">
		<div class="flex flex-col gap-6">
			<!-- Rating -->
			{#if rating}
				<div class="flex pb-4">
					<!-- {#if origin == ReviewType.TheFork} -->
					<div
						class="h-[68px] w-[68px] rounded-full bg-darkbrown-three flex justify-center items-center align-middle"
					>
						<p class="text-xl font-medium text-background-three">{rating}</p>
					</div>
					<!-- {:else} -->
					<!-- <div class="flex w-full gap-2">
							{#each Array(rating).keys() as num}
								<span
									class=" material-symbols-outlined text-darkbrown-three"
									style="font-size: 50px;">star</span
								>
							{/each}
						</div>
					{/if} -->
				</div>
			{/if}

			<!-- Comment -->
			<p class="leading-[1.8] text-md">
				{comment}
			</p>
		</div>

		<!-- Name -->
		<div class="flex flex-col items-end gap-1 pt-10">
			<p class="font-semibold tracking-[1px]">{name}</p>
			<p class="font-thin tracking-[1px]">{origin}</p>
		</div>
	</div>

	<!-- Profile picture -->
	{#if src != undefined}
		<img alt="Tim's profile" class="hidden sm:flex max-w-[35%] object-cover mt-10" {src} />
	{/if}
</div>

<style>
	.material-symbols-outlined {
		font-variation-settings: 'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24;
	}
</style>
