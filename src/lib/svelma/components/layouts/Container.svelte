<script lang="ts">
	import { bulmaClassnames } from '$lib/svelma/utils/bulma.js';
	import type { BulmaHelper } from '$lib/svelma/utils/bulma.types.js';

	export let bulma: BulmaHelper = {};
	export let isWidescreen: boolean = false;
	export let isFullHD: boolean = false;
	export let isMaxDesktop: boolean = false;
	export let isMaxWidescreen: boolean = false;
	export let isFluid: boolean = false;

	$: cls = bulmaClassnames(bulma, [
		'container',
		{
			'is-widescreen': isWidescreen,
			'is-fullhd': isFullHD,
			'is-max-desktop': isMaxDesktop,
			'is-max-widescreen': isMaxWidescreen,
			'is-fluid': isFluid
		}
	]);
</script>

<div class={cls}>
	<slot />
</div>
