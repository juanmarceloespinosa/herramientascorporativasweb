<script lang="ts">
	import { bulmaClassnames } from '$lib/svelma/utils/bulma.js';
	import type { BulmaHelper, Colors, ContentSize } from '$lib/svelma/utils/bulma.types.js';

	export let bulma: BulmaHelper = {};
	export let value: number;
	export let max: number = 100;
	export let indeterminate: boolean = false;
	export let size: ContentSize | 'normal' | undefined = undefined;
	export let color: Colors | undefined = undefined;

	$: cls = bulmaClassnames(bulma, [
		'progress',
		{
			[`is-${size}`]: size != undefined,
			[`is-${color}`]: color != undefined
		}
	]);
</script>

{#if !indeterminate}
	<progress class={cls} {value} {max}>
		<slot>
			{value.toFixed(0)}%
		</slot>
	</progress>
{:else}
	<progress class={cls}><slot /></progress>
{/if}
