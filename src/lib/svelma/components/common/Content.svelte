<script lang="ts">
	import { bulmaClassnames } from '$lib/svelma/utils/bulma.js';
	import type { BulmaHelper, ContentSize } from '$lib/svelma/utils/bulma.types.js';

	export let bulma: BulmaHelper = {};
	export let size: ContentSize | undefined = undefined;

	$: cls = bulmaClassnames(bulma, [
		'content',
		{
			[`is-${size}`]: size != undefined
		}
	]);
</script>

<div class={cls}>
	<slot />
</div>
