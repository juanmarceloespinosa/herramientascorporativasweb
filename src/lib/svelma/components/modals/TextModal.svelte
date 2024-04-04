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
	export let type: 'text' | 'password' | 'email' | 'tel' | 'number' = 'text';
	export let value: string;
	export let valid: Result | undefined = undefined;
	export let action: Action | undefined = undefined;
	export let okLabel: string = 'Guardar';
	export let okIcon: string = icons.save;
	export let cancelText: string = 'Cancelar';
	export let cancelIcon: string = icons.cancel;
	export let clrLabel: string = '';
	export let clrIcon: string = icons.trash;
	export let loading: boolean = false;

	$: if (active) onOpen();
	$: isValid = valid == undefined || valid.valid;
	$: isDirty = valid == undefined || valid.dirty;
	$: message = valid?.message || '';

	function onOpen() {
		loading = false;
	}
	function onClose() {
		active = false;
		dispatch('close');
	}
	function onClear() {
		dispatch('clear');
	}
	function onSave() {
		if (!isValid || !isDirty) return;
		loading = true;
		dispatch('accept');
	}
</script>

<ModalCard {active} classes="text-modal" let:ModalCardHead let:ModalCardFoot>
	<ModalCardHead {header} on:close={onClose} />
	<Field let:Control helpText={message} helpColor="danger" bulma={{ p: 1 }}>
		<Label {id}>{label}</Label>
		<Control>
			<Input {type} {id} bind:value {action} />
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
