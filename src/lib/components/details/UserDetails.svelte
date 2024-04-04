<script lang="ts">
	import { RoleNames, type User } from '$lib/models/core';
	import { classnames } from '$lib/svelma/utils/classnames';
	import type { MenuAction } from '$lib/utils/stores';
	import MenuActionButton from '../MenuActionButton.svelte';

	export let user: User;
	export let hideRole: boolean = false;
	export let borderless: boolean | undefined = undefined;
	export let actions: MenuAction[] = [];

	let elActions: HTMLDivElement;

	$: elStyle =
		elActions && actions.length
			? `min-height: calc(${elActions?.clientHeight ?? 0}px + 1rem);`
			: '';

	$: cls = classnames('user-details', {
		'is-borderless': borderless,
		'has-background-warning-light': user.disabled,
	});
</script>

<div class={cls} style={elStyle}>
	<p class="title is-5">{user.name}</p>
	<div class="email-key">Correo Electrónico:</div>
	<div class="email-value">{user.email}</div>
	{#if !hideRole}
		<div class="role-key">Rol:</div>
		<div class="role-value">
			{#if $$slots.default}
				<slot />
			{:else}
				{RoleNames[user.role ?? '-'] || '-'}
			{/if}
		</div>
	{/if}
	{#if $$slots.actions || actions.length}
		<div class="actions" bind:this={elActions}>
			<slot name="actions">
				{#each actions as action}
					<MenuActionButton {action} />
				{/each}
			</slot>
		</div>
	{/if}
</div>

<style lang="less">
	.user-details {
		width: 100%;
		padding: 1rem;
		border: 1px solid lightgray;
		border-radius: 0.5rem;
		display: grid;
		grid-template-columns: 1fr auto;
		grid-template-rows: auto auto auto auto auto;
		grid-template-areas:
			'title       actions'
			'email-key   actions'
			'email-value actions'
			'role-key    actions'
			'role-value  actions';

		&.is-borderless {
			padding: 0;
			border: none;
		}

		.title {
			grid-area: title;
			margin-bottom: 0;
			text-align: left;
		}
		.email-key {
			grid-area: email-key;
			font-weight: bold;
			text-align: left;
		}
		.email-value {
			grid-area: email-value;
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
