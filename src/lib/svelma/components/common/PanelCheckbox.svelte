<script lang="ts">
	import { bulmaClassnames } from '$lib/svelma/utils/bulma.js';
	import type { BulmaHelper } from '$lib/svelma/utils/bulma.types.js';

	export let bulma: BulmaHelper = {};
	export let checked: boolean;

	$: cls = bulmaClassnames(bulma, ['panel-block']);
</script>

<label class={cls}>
	<input type="checkbox" {checked} on:click />
	<slot />
</label>
