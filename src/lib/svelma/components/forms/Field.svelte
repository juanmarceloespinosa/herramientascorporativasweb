<script lang="ts">
	import { bulmaClassnames } from '$lib/svelma/utils/bulma.js';
	import type { BulmaHelper, Colors, FieldAlign } from '$lib/svelma/utils/bulma.types.js';
	import { classnames } from '$lib/svelma/utils/classnames.js';
	import Control from './Control.svelte';
	import FieldBody from './FieldBody.svelte';
	import FieldLabel from './FieldLabel.svelte';

	export let bulma: BulmaHelper = {};
	export let helpText: string | undefined = undefined;
	export let helpColor: Colors | undefined = undefined;
	export let addons: boolean | undefined = undefined;
	export let addonsCentered: boolean | undefined = undefined;
	export let addonsRight: boolean | undefined = undefined;
	export let grouped: FieldAlign | undefined = undefined;
	export let isGroupedMultiline: boolean = false;
	export let isHorizontal: boolean = false;

	$: cls = bulmaClassnames(bulma, [
		'field',
		{
			'has-addons': addons,
			'has-addons-centered': addonsCentered,
			'has-addons-right': addonsRight,
			'is-grouped': grouped,
			[`is-grouped-${grouped}`]: grouped && grouped != 'left',
			'is-grouped-multiline': grouped && isGroupedMultiline,
			'is-horizontal': isHorizontal
		}
	]);
	$: clsHelp = classnames('help', {
		[`is-${helpColor}`]: helpColor != undefined
	});
</script>

<div class={cls}>
	<slot {Control} {FieldLabel} {FieldBody} />
	{#if helpText}
		<p class={clsHelp}>{helpText}</p>
	{/if}
</div>
