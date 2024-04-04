<script lang="ts">
	import { bulmaClassnames } from '$lib/svelma/utils/bulma.js';
	import type { BulmaHelper } from '$lib/svelma/utils/bulma.types.js';
	import type { ClsArgument } from '$lib/svelma/utils/classnames';

	export let bulma: BulmaHelper = {};
	export let classname: ClsArgument = '';

	$: cls = bulmaClassnames(bulma, ['footer', classname]);
</script>

<footer class={cls}>
	<slot />
</footer>
