<script lang="ts">
	import type { Contact } from '$lib/models/core';
	import Button from '$lib/svelma/components/common/Button.svelte';
	import IconText from '$lib/svelma/components/common/IconText.svelte';
	import { icons } from '$lib/svelma/components/common/icons';
	import { createEventDispatcher } from 'svelte';
	import Detail from './Detail.svelte';

	const dispatch = createEventDispatcher();

	export let contact: Contact;
	export let borderless: boolean | undefined = undefined;

	function onClose(contact: Contact) {
		return () => {
			dispatch('close', contact);
		};
	}
</script>

<div class="details" class:is-borderless={borderless}>
	<div class="detail-column">
		<Detail label="Nombre">{contact.name}</Detail>
		<Detail label="Correo Electrónico">{contact.email}</Detail>
		<Detail label="Teléfono">{contact.phone || ''}</Detail>
		<Detail label="Mensaje">{contact.message || ''}</Detail>
	</div>
	<div class="detail-column">
		<Detail label="Asunto">{contact.subject || ''}</Detail>
		<Detail label="Servicio">{contact.service || ''}</Detail>
		<Detail label="Presupuesto">{contact.budget || ''}</Detail>
	</div>
	<div class="actions">
		<Button size="small" color="link" on:click={onClose(contact)}>
			<IconText icon={icons.close} text="Cerrar" />
		</Button>
	</div>
</div>

<style lang="less">
	.details {
		position: relative;
		padding: 1rem;
		border: 1px solid lightgray;
		border-radius: 0.5rem;
		display: flex;
		flex-direction: row;
		width: 100%;

		.detail-column {
			display: flex;
			flex-direction: column;
			flex: 1;
		}

		.actions {
			position: absolute;
			top: 0;
			right: 0;
			grid-area: actions;
			display: flex;
			flex-direction: column;
			align-items: stretch;
		}
	}
</style>
