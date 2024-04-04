<script lang="ts">
	import { RoleNames, type Client, type ClientUser } from '$lib/models/core';
	import type { MenuAction } from '$lib/utils/stores';
	import MenuActionButton from '../MenuActionButton.svelte';

	export let client: Client | ClientUser;
	export let actions: MenuAction[] | undefined = undefined;
	export let borderless: boolean | undefined = undefined;

	let elActions: HTMLDivElement;

	$: elStyle =
		elActions && actions?.length
			? `min-height: calc(${elActions?.clientHeight ?? 0}px + 1rem);`
			: '';
	$: role = (client as ClientUser).role;
</script>

<div class="details" class:is-borderless={borderless} style={elStyle}>
	<p class="title is-5">{client.razon_social}</p>
	<div class="nit-key">Nit:</div>
	<div class="nit-value">{client.nit}</div>
	{#if role || $$slots.default}
		<div class="role-key">Rol:</div>
		<div class="role-value"><slot>{RoleNames[role]}</slot></div>
	{/if}
	{#if actions}
		<div class="actions" bind:this={elActions}>
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
		grid-template-columns: 3rem 1fr auto;
		grid-template-rows: auto auto auto;
		grid-template-areas:
			'title    title      actions'
			'nit-key  nit-value  actions'
			'role-key role-value actions';
		width: 100%;

		&.is-borderless {
			padding: 0;
			border: none;
		}
		.title {
			grid-area: title;
			margin-bottom: 0;
			text-wrap: pretty;
			text-align: left;
		}
		.nit-key {
			grid-area: nit-key;
			font-weight: bold;
			text-align: left;
		}
		.nit-value {
			grid-area: nit-value;
			text-align: left;
		}
		.role-key {
			grid-area: role-key;
			font-weight: bold;
			text-align: left;
		}
		.role-value {
			grid-area: role-value;
			text-align: left;
		}
		.actions {
			grid-area: actions;
			display: flex;
			flex-direction: column;
			align-items: stretch;
		}
	}
</style>
