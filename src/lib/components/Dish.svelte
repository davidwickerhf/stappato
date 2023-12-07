<script lang="ts">
	export let title: string;
	export let description: string | undefined;
	export let vegetarian: boolean = false;
	export let vegan: boolean = false;
	export let src: string;
</script>

<div
	class="bg-background-three w-[290px] h-[440px] flex flex-col text-darkbrown-three shadow-2xl flex-shrink-0"
>
	<!-- Image -->
	<img alt="dish" {src} />
	<!-- Content -->
	<div class="flex flex-col justify-start h-full gap-4 p-5">
		<!-- Heading -->
		<div class="flex items-center justify-between align-middle">
			<p class="text-xl font-medium uppercase tracking-[3px]">{title}</p>
			<span class="material-symbols-outlined"
				>{vegan ? 'nest_eco_leaf' : vegetarian ? 'nutrition' : ''}</span
			>
		</div>

		<!-- Description -->
		<p>
			{description ?? ''}
		</p>
	</div>
</div>
