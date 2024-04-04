<script lang="ts">
	import { bulmaClassnames } from '$lib/svelma/utils/bulma.js';
	import type { Action, BulmaHelper } from '$lib/svelma/utils/bulma.types.js';
	import IconText from './IconText.svelte';

	export let bulma: BulmaHelper = {};
	export let actions: Action[];

	$: cls = bulmaClassnames(bulma, ['card-footer']);
</script>

<footer class={cls}>
	{#each actions as action}
		{#if action.href}
			<a href={action.href} class="card-footer-item">
				<IconText icon={action.icon} text={action.text} />
			</a>
		{:else if action.click}
			<a href="/" class="card-footer-item" on:click|preventDefault={action.click}>
				<IconText icon={action.icon} text={action.text} />
			</a>
		{/if}
	{/each}
	<slot />
</footer>
