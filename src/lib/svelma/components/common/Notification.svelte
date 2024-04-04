<script lang="ts">
	import { bulmaClassnames } from '$lib/svelma/utils/bulma.js';
	import type { BulmaHelper, Colors } from '$lib/svelma/utils/bulma.types.js';

	export let bulma: BulmaHelper = {};
	export let color: Colors | undefined = undefined;
	export let hasDelete: boolean = false;
	export let isLight: boolean = false;

	$: cls = bulmaClassnames(bulma, [
		'notification',
		{
			[`is-${color}`]: color != undefined,
			'is-light': isLight,
		},
	]);
</script>

<div class={cls}>
	{#if hasDelete}
		<button class="delete" on:click />
	{/if}
	<slot />
</div>
