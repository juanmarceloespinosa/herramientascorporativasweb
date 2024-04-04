<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	export let header: string = '';

	function onClose() {
		dispatch('close');
	}
</script>

<header class="modal-card-head">
	<p class="modal-card-title"><span>{header}</span><slot /></p>
	<button class="delete" type="button" aria-label="close" on:click={onClose} />
</header>

<style>
	.modal-card-title {
		display: flex;
		flex-direction: row;
		align-items: center;
	}
</style>
