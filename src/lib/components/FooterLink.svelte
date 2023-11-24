<script lang="ts">
	export let href: string;
</script>

<a {href} class="flex items-center gap-4 font-medium max-w-fit"
	><span class="hover:underline"><slot /></span><span class="material-symbols-outlined"
		>arrow_right_alt</span
	></a
>
