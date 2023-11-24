<script lang="ts">
	import type { Partnership } from '$lib/constants/types';

	export let partnership: Partnership;
</script>

<a href={partnership.href ?? '/'} class="">
	<img class="opacity-75" alt="logo" src={partnership.src} />
</a>
