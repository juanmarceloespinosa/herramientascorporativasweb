<script lang="ts">
	import { bulmaClassnames } from '$lib/svelma/utils/bulma.js';
	import type { BulmaHelper, OlType } from '$lib/svelma/utils/bulma.types.js';

	export let bulma: BulmaHelper = {};
	export let type: OlType | undefined = undefined;

	$: cls = bulmaClassnames(bulma, [
		'box',
		{
			[`is-${type}`]: type != undefined
		}
	]);
</script>

<div class={cls}>
	<slot />
</div>
