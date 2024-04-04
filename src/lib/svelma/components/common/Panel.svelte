<script lang="ts">
	import { bulmaClassnames } from '$lib/svelma/utils/bulma.js';
	import type { BulmaHelper, Colors } from '$lib/svelma/utils/bulma.types.js';
	import type { ClsArgument } from '$lib/svelma/utils/classnames';
	import PanelBlock from './PanelBlock.svelte';
	import PanelCheckbox from './PanelCheckbox.svelte';
	import PanelHeading from './PanelHeading.svelte';
	import PanelIcon from './PanelIcon.svelte';
	import PanelTabs from './PanelTabs.svelte';

	export let bulma: BulmaHelper = {};
	export let color: Colors | undefined = undefined;
	export let classes: ClsArgument = '';

	$: cls = bulmaClassnames(bulma, [
		'panel',
		classes,
		{
			[`is-${color}`]: color != undefined,
		},
	]);
</script>

<nav class={cls}>
	<slot {PanelHeading} {PanelBlock} {PanelCheckbox} {PanelIcon} {PanelTabs} />
</nav>
