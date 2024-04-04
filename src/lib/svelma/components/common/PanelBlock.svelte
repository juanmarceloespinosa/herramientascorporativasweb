<script lang="ts">
	import { bulmaClassnames } from '$lib/svelma/utils/bulma.js';
	import type { BulmaHelper } from '$lib/svelma/utils/bulma.types.js';
	import type { ClsArgument } from '$lib/svelma/utils/classnames';

	export let bulma: BulmaHelper = {};
	export let href: string | undefined = undefined;
	export let isButton: boolean = false;
	export let classes: ClsArgument = '';

	$: cls = bulmaClassnames(bulma, ['panel-block', classes]);
</script>

{#if href}
	<a {href} class={cls}>
		<slot />
	</a>
{:else if isButton}
	<a href="/" class={cls} on:click|preventDefault>
		<slot />
	</a>
{:else}
	<div class={cls}>
		<slot />
	</div>
{/if}

<style lang="less">
	:global(.panel-block > form > button > *) {
		flex: 1;
		width: 100%;
	}
</style>
