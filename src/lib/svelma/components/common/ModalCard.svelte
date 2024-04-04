<script lang="ts">
	import { classnames, type ClsArgument } from '$lib/svelma/utils/classnames.js';
	import ModalCardHead from './ModalCardHead.svelte';
	import ModalCardBody from './ModalCardBody.svelte';
	import ModalCardFoot from './ModalCardFoot.svelte';

	export let active: boolean;
	export let classes: ClsArgument = '';
	export let recreate: boolean = false;

	$: cls = classnames('modal', { 'is-active': active || recreate }, classes);
</script>

{#if recreate && active}
	<div class={cls}>
		<div class="modal-background" />
		<div class="modal-card">
			<slot {ModalCardHead} {ModalCardBody} {ModalCardFoot} />
		</div>
	</div>
{:else if !recreate}
	<div class={cls}>
		<div class="modal-background" />
		<div class="modal-card">
			<slot {ModalCardHead} {ModalCardBody} {ModalCardFoot} />
		</div>
	</div>
{/if}
