<script lang="ts">
	import { bulmaClassnames } from '$lib/svelma/utils/bulma.js';
	import type { BulmaHelper, IconTextData } from '$lib/svelma/utils/bulma.types.js';
	import type { ClsArgument } from '$lib/svelma/utils/classnames.js';

	export let icons: IconTextData[];
	export let className: ClsArgument = '';
	export let bulma: BulmaHelper = {};
	export let block: boolean = false;

	$: cls = bulmaClassnames(bulma, [className, { block }]);
</script>

<span class="icon-text {cls}">
	{#each icons as i}
		<span class="icon">
			<svg style="width:24px;height:24px" viewBox="0 0 24 24">
				<path fill="currentColor" d={i.icon} />
			</svg>
		</span>
		<span>{i.text}</span>
	{/each}
</span>

<style>
	.icon-text.block {
		display: block;
	}
</style>
