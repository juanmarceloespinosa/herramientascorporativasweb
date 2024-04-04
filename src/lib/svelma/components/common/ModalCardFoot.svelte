<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import type { Action, Click } from '$lib/svelma/utils/bulma.types.js';
	import IconText from './IconText.svelte';

	const dispatch = createEventDispatcher();
	export let actions: Action[] | undefined = undefined;

	function onAction(action: Action): Click {
		return (e?: any) => {
			dispatch('action', action);
		};
	}
</script>

<footer class="modal-card-foot">
	{#if actions}
		{#each actions as action (action.name)}
			<button class="button" on:click={onAction(action)}>
				<IconText icon={action.icon} text={action.text} />
			</button>
		{/each}
	{/if}
	<slot />
</footer>
