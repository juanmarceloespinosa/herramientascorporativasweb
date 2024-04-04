<script lang="ts">
	import { bulmaClassnames } from '$lib/svelma/utils/bulma.js';
	import type { BulmaHelper } from '$lib/svelma/utils/bulma.types.js';

	export let bulma: BulmaHelper = {};
	export let hasAddons: boolean = false;

	$: cls = bulmaClassnames(bulma, [
		'tags',
		{
			'has-addons': hasAddons
		}
	]);
</script>

<div class={cls}>
	<slot />
</div>
