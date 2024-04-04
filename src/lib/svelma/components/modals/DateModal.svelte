<script lang="ts">
	import type { Action, Result } from '$lib/svelma/utils/validators.js';
	import { createEventDispatcher } from 'svelte';
	import { icons, type Icons } from '../common/icons.js';
	import ModalCard from '../common/ModalCard.svelte';
	import Field from '../forms/Field.svelte';
	import Label from '../forms/Label.svelte';
	import InputDate from '../forms/InputDate.svelte';
	import Button from '../common/Button.svelte';

	const dispatch = createEventDispatcher();

	export let id: string;
	export let active: boolean;
	export let header: string;
	export let label: string;
	export let value: Date | undefined;
	export let step: string | number | undefined = undefined;
	export let valid: Result | undefined = undefined;
	export let action: Action | undefined = undefined;
	export let okLabel: string = 'Guardar';
	export let okIcon: Icons = 'save';
	export let clrLabel: string = '';
	export let clrIcon: Icons = 'trash';

	let loading: boolean = false;

	$: if (active) onOpen();
	$: isValid = valid == undefined || valid.valid;
	$: isDirty = valid == undefined || valid.dirty;
	$: message = valid?.message || '';
	$: stepNumber = +(step || 0);

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
	function onStep() {
		if (!value) return;
		const dd = value.getDay();
		const mm = value.getMonth();
		const yy = value.getFullYear() - stepNumber;
		value = new Date(yy, mm, dd);
	}
</script>

<ModalCard {active} let:ModalCardHead let:ModalCardFoot>
	<ModalCardHead {header} />
	<Field let:Control helpText={message} helpColor="danger">
		<Label {id}>{label}</Label>
		<Control>
			<InputDate {id} bind:value {action} {step} />
		</Control>
	</Field>
	<ModalCardFoot>
		{#if step}
			<Button {loading} icon={icons.add} text="{stepNumber} años" on:click={onStep} />
		{/if}
		<Button
			{loading}
			disabled={!isValid || !isDirty}
			icon={icons[okIcon]}
			text={okLabel}
			color="primary"
			on:click={onSave}
		/>
		{#if clrLabel}
			<Button {loading} icon={icons[clrIcon]} text={clrLabel} color="info" on:click={onClear} />
		{/if}
		<Button {loading} icon={icons.cancel} text="Cancelar" on:click={onClose} />
	</ModalCardFoot>
</ModalCard>
