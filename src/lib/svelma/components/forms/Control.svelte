<script lang="ts">
	import { bulmaClassnames } from '$lib/svelma/utils/bulma.js';
	import type { BulmaHelper } from '$lib/svelma/utils/bulma.types.js';
	import Icon from '../common/Icon.svelte';

	export let bulma: BulmaHelper = {};
	export let iconLeft: string | undefined = undefined;
	export let iconRight: string | undefined = undefined;
	export let isExpanded: boolean = false;
	export let isLoading: boolean = false;

	$: cls = bulmaClassnames(bulma, [
		'control',
		{
			'has-icons-left': iconLeft != undefined,
			'has-icons-right': iconRight != undefined,
			'is-expanded': isExpanded,
			'is-loading': isLoading
		}
	]);
</script>

<div class={cls}>
	<slot />
	{#if iconLeft}
		<Icon icon={iconLeft} iconClass="icon is-left is-small" />
	{/if}
	{#if iconRight}
		<Icon icon={iconRight} iconClass="icon is-right is-small" />
	{/if}
</div>
