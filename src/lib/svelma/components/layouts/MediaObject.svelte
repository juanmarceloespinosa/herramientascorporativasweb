<script lang="ts">
	import { bulmaClassnames } from '$lib/svelma/utils/bulma.js';
	import type { BulmaHelper } from '$lib/svelma/utils/bulma.types.js';

	export let bulma: BulmaHelper = {};

	$: cls = bulmaClassnames(bulma, ['media']);
</script>

<article class={cls}>
	<slot />
</article>
