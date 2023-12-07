<script lang="ts">
	import type { Employee } from '$lib/constants/types';
	import { _ } from 'svelte-i18n';
	export let employee: Employee;
</script>

<!-- Individual grid item -->
<div class="w-[395px] min-h-[585px] shadow-2xl bg-background-three">
	<!-- Profile picture -->
	<div class="relative overflow-hidden h-[250px]">
		<img class="absolute top-0 w-full" alt="staff profile" src={employee.src} />
	</div>

	<!-- Content -->
	<div class="flex flex-col gap-4 px-6 py-6">
		<!-- Name and title -->
		<div class="flex flex-col gap-[2px]">
			<p class="font-medium tracking-[1px]">{employee.name}</p>
			<p class="font-thin tracking-[1px]">{employee.position}</p>
		</div>

		<!-- Description -->
		<p>
			{$_(employee.bio)}
		</p>
	</div>
</div>
