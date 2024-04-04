<script lang="ts">
	import { bulmaClassnames } from '$lib/svelma/utils/bulma.js';
	import type { BulmaHelper } from '$lib/svelma/utils/bulma.types.js';
	import LevelContainer from './LevelContainer.svelte';
	import LevelItem from './LevelItem.svelte';

	export let bulma: BulmaHelper = {};
	export let isMobile: boolean = false;

	$: cls = bulmaClassnames(bulma, [
		'level',
		{
			'is-mobile': isMobile
		}
	]);
</script>

<nav class={cls}>
	<slot {LevelContainer} {LevelItem} />
</nav>
