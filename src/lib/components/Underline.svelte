<script lang="ts">
	export let url: string;
	export let color: string;
</script>

<div
	class="transition-all ease-in-out duration-200 group flex flex-col w-auto bottom-[-4px]"
	style="color: {color};"
>
	<li class="  font-semibold hover:cursor-pointer tracking-[2px] uppercase">
		<a class="mix-blend-color-burn" href={url}> <slot /> </a>
	</li>
	<div
		class="w-0 h-[2px] group-hover:w-full transition-all ease-in-out duration-200"
		style="background-color: {color};"
	/>
</div>
