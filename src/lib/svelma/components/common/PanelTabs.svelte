<script lang="ts">
	import { bulmaClassnames } from '$lib/svelma/utils/bulma.js';
	import type { Action, BulmaHelper } from '$lib/svelma/utils/bulma.types.js';
	import IconText from './IconText.svelte';

	export let bulma: BulmaHelper = {};
	export let tabs: Action[];

	$: cls = bulmaClassnames(bulma, ['panel-tabs']);
</script>

<p class={cls}>
	{#each tabs as tab (tab.name)}
		{#if tab.href}
			<a href={tab.href} class:is-active={tab.isActive}>
				<IconText icon={tab.icon} text={tab.text} />
			</a>
		{:else if tab.click}
			<a href="/" class:is-active={tab.isActive} on:click|preventDefault={tab.click}>
				<IconText icon={tab.icon} text={tab.text} />
			</a>
		{/if}
	{/each}
</p>
