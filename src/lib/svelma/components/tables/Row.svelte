<script lang="ts">
	import { bulmaClassnames } from '$lib/svelma/utils/bulma.js';
	import type { BulmaHelper } from '$lib/svelma/utils/bulma.types.js';

	export let bulma: BulmaHelper = {};
	export let isSelected: boolean = false;
	export let isBordered: boolean = false;
	export let isStriped: boolean = false;
	export let isNarrow: boolean = false;
	export let isHoverable: boolean = false;
	export let isFullWidth: boolean = false;

	$: cls = bulmaClassnames(bulma, [
		'row',
		{
			'is-selected': isSelected,
			'is-bordered': isBordered,
			'is-striped': isStriped,
			'is-narrow': isNarrow,
			'is-hoverable': isHoverable,
			'is-fullwidth': isFullWidth
		}
	]);
</script>

<tr class={cls}>
	<slot />
</tr>
