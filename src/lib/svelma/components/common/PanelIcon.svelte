<script lang="ts">
	import { bulmaClassnames } from '$lib/svelma/utils/bulma.js';
	import type { BulmaHelper } from '$lib/svelma/utils/bulma.types.js';
	import Icon from './Icon.svelte';

	export let bulma: BulmaHelper = {};
	export let icon: string;

	$: cls = bulmaClassnames(bulma, ['panel-icon']);
</script>

<div class={cls}>
	<Icon {icon} />
</div>
