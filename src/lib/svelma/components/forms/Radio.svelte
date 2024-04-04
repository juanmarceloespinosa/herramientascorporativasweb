<script lang="ts">
	import { bulmaClassnames } from '$lib/svelma/utils/bulma.js';
	import type { BulmaHelper } from '$lib/svelma/utils/bulma.types.js';
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	export let bulma: BulmaHelper = {};
	export let id: string;
	export let name: string;
	export let checked: boolean;
	export let disabled: boolean = false;

	$: cls = bulmaClassnames(bulma, ['radio']);

	const handleInput = (e: Event) => {
		const target = e.target as HTMLInputElement;
		checked = target.checked;
		dispatch('value-changed', { name: id, value: checked });
	};
</script>

<label class={cls}>
	<input type="radio" {id} {name} {checked} {disabled} on:change={handleInput} />
	<slot />
</label>
