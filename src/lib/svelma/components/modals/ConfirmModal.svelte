<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { icons } from '../common/icons';
	import ModalCard from '../common/ModalCard.svelte';
	import ModalCardBody from '../common/ModalCardBody.svelte';
	import Button from '../common/Button.svelte';
	import type { ButtonColor } from '$lib/svelma/utils/bulma.types';

	const dispatch = createEventDispatcher();

	export let active: boolean;
	export let header: string;
	export let okText: string = 'Aceptar';
	export let okIcon: string = icons.save;
	export let okColor: ButtonColor = 'primary';
	export let cancelText: string = 'Cancelar';
	export let cancelIcon: string = icons.cancel;
	export let loading: boolean = false;

	$: if (active) onOpen();

	function onOpen() {
		loading = false;
	}
	function onClose() {
		active = false;
		dispatch('close');
	}
	function onAccept() {
		loading = true;
		dispatch('accept');
	}
</script>

<ModalCard {active} classes="text-modal" let:ModalCardHead let:ModalCardFoot let:ModalCardBody>
	<ModalCardHead {header} on:close={onClose} />
	<ModalCardBody><slot /></ModalCardBody>
	<ModalCardFoot>
		<Button {loading} icon={okIcon} text={okText} color={okColor} on:click={onAccept} />
		<Button {loading} icon={cancelIcon} text={cancelText} on:click={onClose} />
	</ModalCardFoot>
</ModalCard>
