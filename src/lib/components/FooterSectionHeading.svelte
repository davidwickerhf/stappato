<script lang="ts">
	export let icon: string;
</script>

<div class="flex items-center gap-2 font-medium uppercase">
	<span class="material-symbols-outlined" style="font-size: 20px"> {icon} </span>
	<slot />
</div>
