<script lang="ts">
	import type { Action, Result } from '$lib/svelma/utils/validators.js';
	import { createEventDispatcher } from 'svelte';
	import { icons } from '../common/icons.js';
	import ModalCard from '../common/ModalCard.svelte';
	import Field from '../forms/Field.svelte';
	import Label from '../forms/Label.svelte';
	import Input from '../forms/Input.svelte';
	import Button from '../common/Button.svelte';

	const dispatch = createEventDispatcher();

	export let id: string;
	export let active: boolean;
	export let header: string;
	export let label: string;
	export let value: number;
	export let valid: Result | undefined = undefined;
	export let action: Action | undefined = undefined;
	export let okLabel: string = 'Guardar';
	export let okIcon: string = icons.save;
	export let cancelText: string = 'Cancelar';
	export let cancelIcon: string = icons.cancel;
	export let clrLabel: string = '';
	export let clrIcon: string = icons.trash;

	let loading: boolean = false;

	$: if (active) onOpen();
	$: isValid = valid == undefined || valid.valid;
	$: isDirty = valid == undefined || valid.dirty;
	$: message = valid?.message || '';

	function onOpen() {
		loading = false;
	}
	function onClose() {
		active = false;
	}
	function onClear() {
		dispatch('clear', null);
	}
	function onSave() {
		if (!isValid || !isDirty) return;
		loading = true;
		dispatch('accept');
	}
</script>

<ModalCard {active} let:ModalCardHead let:ModalCardFoot>
	<ModalCardHead {header} />
	<Field let:Control helpText={message} helpColor="danger">
		<Label {id}>{label}</Label>
		<Control>
			<Input type="number" {id} bind:value {action} />
		</Control>
	</Field>
	<ModalCardFoot>
		<Button
			{loading}
			disabled={!isValid || !isDirty}
			icon={okIcon}
			text={okLabel}
			color="primary"
			on:click={onSave}
		/>
		{#if clrLabel}
			<Button {loading} icon={clrIcon} text={clrLabel} color="info" on:click={onClear} />
		{/if}
		<Button {loading} icon={cancelIcon} text={cancelText} on:click={onClose} />
	</ModalCardFoot>
</ModalCard>
