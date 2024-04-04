<script lang="ts">
	import { bulmaClassnames } from '$lib/svelma/utils/bulma.js';
	import type { BulmaHelper } from '$lib/svelma/utils/bulma.types.js';

	export let bulma: BulmaHelper = {};
	export let hasTextCentered: boolean = false;

	$: cls = bulmaClassnames(bulma, [
		'level-item',
		{
			'has-text-centered': hasTextCentered
		}
	]);
</script>

<div class={cls}>
	<slot />
</div>
