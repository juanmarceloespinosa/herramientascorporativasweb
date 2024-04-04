<script lang="ts">
	import {
		ClientCredentialTypeNames,
		type ClientCredential,
		clientCredentialSchema,
	} from '$lib/models/core';
	import Button from '$lib/svelma/components/common/Button.svelte';
	import Icon from '$lib/svelma/components/common/Icon.svelte';
	import Control from '$lib/svelma/components/forms/Control.svelte';
	import Field from '$lib/svelma/components/forms/Field.svelte';
	import Label from '$lib/svelma/components/forms/Label.svelte';
	import { bulmaHelpers } from '$lib/svelma/utils/bulma';
	import { appIcons, getContactTypeIcons } from '$lib/utils/appIcons';
	import { setAppMessage, type MenuAction } from '$lib/utils/stores';
	import MenuActionButton from '../MenuActionButton.svelte';

	export let credential: ClientCredential;
	export let actions: MenuAction[] | undefined = undefined;
	export let borderless: boolean | undefined = undefined;

	let elUsername: HTMLInputElement;
	let elPassword: HTMLInputElement;

	function copyToClipboard(input: HTMLInputElement) {
		input.select();
		input.setSelectionRange(0, 99999); // For mobile devices
		navigator.clipboard.writeText(input.value);
	}
	function copyUsernameToClipboard() {
		copyToClipboard(elUsername);
		setAppMessage(`Usuario ha sido copiado al portapepeles`);
	}
	function copyPasswordToClipboard() {
		copyToClipboard(elPassword);
		setAppMessage(`Contraseña ha sido copiada al portapepeles`);
	}
</script>

<div class="details client-credentials" class:is-borderless={borderless}>
	<input type="hidden" name="id" value={credential.id} />
	<input type="hidden" name="type" value={credential.type} />
	<div class="type title is-5">
		{ClientCredentialTypeNames[credential.type]}
	</div>
	<div class="username">
		<Field>
			<label class="label" for="username">{clientCredentialSchema.def.username.title}</label>
		</Field>
		<Field addons>
			<Control isExpanded>
				<input
					bind:this={elUsername}
					id="username"
					name="username"
					type="text"
					readonly
					value={credential.username}
					class={bulmaHelpers.input({})}
				/>
			</Control>
			<Control>
				<Button color="primary" title="Copiar al portapapeles" on:click={copyUsernameToClipboard}>
					<Icon icon={appIcons.copy} />
				</Button>
			</Control>
		</Field>
	</div>
	<div class="password">
		<Field>
			<label class="label" for="password">{clientCredentialSchema.def.password.title}</label>
		</Field>
		<Field addons>
			<Control isExpanded>
				<input
					bind:this={elPassword}
					id="password"
					name="password"
					type="password"
					readonly
					value={credential.password}
					class={bulmaHelpers.input({})}
				/>
			</Control>
			<Control>
				<Button color="primary" title="Copiar al portapapeles" on:click={copyPasswordToClipboard}>
					<Icon icon={appIcons.copy} />
				</Button>
			</Control>
		</Field>
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
			'type     type     actions'
			'username username actions'
			'password password actions';
		width: 100%;

		&.is-borderless {
			padding: 0;
			border: none;
		}
		.type {
			grid-area: type;
		}
		.username {
			grid-area: username;
		}
		.password {
			grid-area: password;
		}
		.label {
			padding-top: 0.5rem;
		}
		.actions {
			grid-area: actions;
			display: flex;
			flex-direction: column;
			align-items: stretch;
		}
	}
</style>
