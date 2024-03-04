<script lang="ts">
	import type { Employee } from '$lib/constants/types';
	import { _ } from 'svelte-i18n';
	export let employee: Employee;

	export let open = '';
</script>

<!-- Individual grid item -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
	class="w-full transition-all duration-300 ease-in-out cursor-pointer sm:w-fit min-h-fit"
	on:click={() => (open = employee.id === open ? '' : employee.id)}
>
	<!-- Profile picture -->
	<div
		class="group aspect-w-1 aspect-h-1 relative w-full h-fit sm:w-[300px] sm:h-[300px] overflow-hidden"
	>
		<!-- Content -->

		<img class="absolute top-0 w-full opacity-100" alt="staff profile" src={employee.src} />
		<img
			class="absolute top-0 w-full transition-all duration-300 ease-in-out opacity-0 group-hover:opacity-100"
			alt="staff profile"
			src={employee.srcColored}
		/>
		<div
			class="absolute bottom-0 z-10 w-full bg-darkbrown-three opacity-95 text-black transition-all ease-in-out duration-300 overflow-hidden {open ===
			employee.id
				? 'h-full'
				: 'h-0 '}"
		>
			<div class="px-6 py-6 text-white">{$_(employee.bio)}</div>
		</div>
	</div>

	<!-- Content -->
	<div class="flex flex-row items-center justify-between w-full gap-4 py-6 text-darkbrown-three">
		<!-- Name and title -->
		<div class="flex flex-col gap-[2px] w-fit">
			<p class="font-medium tracking-[1px] w-fit text-black">{employee.name}</p>
			<p class="font-thin tracking-[1px] w-fit">{employee.position}</p>
		</div>

		<!-- Button -->
		<div class="">
			<span
				class="text-2xl material-symbols-outlined transition-all duration-200 ease-in-out {open ===
				employee.id
					? 'rotate-90'
					: ''}">chevron_right</span
			>
		</div>
	</div>
</div>
