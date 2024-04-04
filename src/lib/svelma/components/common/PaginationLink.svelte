<script lang="ts">
	import { bulmaClassnames } from '$lib/svelma/utils/bulma.js';
	import type { BulmaHelper } from '$lib/svelma/utils/bulma.types.js';
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	export let bulma: BulmaHelper = {};
	export let page: number;
	export let isCurrent: boolean = false;

	$: cls = bulmaClassnames(bulma, ['box']);
	function onPage() {
		dispatch('page', page);
	}
</script>

<li>
	<a
		href="/"
		class="pagination-link"
		class:is-current={isCurrent}
		aria-label="Goto page {page}"
		on:click|preventDefault={onPage}
	>
		{page}
	</a>
</li>
