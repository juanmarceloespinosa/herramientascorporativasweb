<script lang="ts">
	import { type ClientContact } from '$lib/models/core';
	import Icon from '$lib/svelma/components/common/Icon.svelte';
	import { getContactTypeIcons } from '$lib/utils/appIcons';
	import type { MenuAction } from '$lib/utils/stores';
	import MenuActionButton from '../MenuActionButton.svelte';

	export let contact: ClientContact;
	export let actions: MenuAction[] | undefined = undefined;
	export let borderless: boolean | undefined = undefined;

	$: icon = getContactTypeIcons(contact.type);
</script>

<div class="details view" class:is-borderless={borderless}>
	<input type="hidden" name="id" value={contact.id} />
	<input type="hidden" name="type" value={contact.type} />
	<input type="hidden" name="description" value={contact.description} />
	<div class="type">
		<Icon {icon} />
	</div>
	<p class="description title is-5">{contact.description}</p>
	<div class="value">
		{#if $$slots.default}
			<slot />
		{:else}
			<div class="pre">{contact.value}</div>
		{/if}
	</div>
	{#if actions}
		<div class="actions">
			{#each actions as action}
				<MenuActionButton {action} />
			{/each}
		</div>
	{/if}
</div>

<style lang="less">
	.details {
		padding: 1rem;
		border: 1px solid lightgray;
		border-radius: 0.5rem;
		display: grid;
		grid-template-columns: auto 1fr;
		grid-template-rows: auto auto auto;
		grid-template-areas:
			'type    description actions'
			'value   value       actions';
		width: 100%;

		&.is-borderless {
			padding: 0;
			border: none;
		}
		.type {
			grid-area: type;
		}
		.description {
			grid-area: description;
			margin-bottom: 0;
			text-wrap: pretty;
			text-align: left;
		}
		.value {
			grid-area: value;
			text-align: left;
		}
		.pre {
			white-space: pre;
		}
		.actions {
			grid-area: actions;
			display: flex;
			flex-direction: column;
			align-items: stretch;
		}
	}
</style>
