<script lang="ts">
	import ContactDetails from '$lib/components/details/ContactDetails.svelte';
	import LayoutTitle from '$lib/components/layouts/LayoutTitle.svelte';
	import type { Contact } from '$lib/models/core';
	import Columns from '$lib/svelma/components/common/Columns.svelte';
	import { appFetchJson } from '$lib/utils/fetch';
	import { onMount } from 'svelte';
	import type { PageData } from './$types';

	export let data: PageData;

	$: contacts = data.contacts;

	onMount(() => {});

	async function onClose(e: CustomEvent<Contact>) {
		const contact = e.detail;
		const response = await appFetchJson<Contact, { contacts: Contact[] }>(
			{
				url: ''
			},
			{ method: 'DELETE' },
			contact
		);
		contacts = response!!.contacts;
	}
</script>

<LayoutTitle title="Contactos Admin">
	<Columns let:Column>
		<Column size="6" offset="3">
			{#each contacts as contact (contact.id)}
				<ContactDetails {contact} on:close={onClose} />
			{/each}
		</Column>
	</Columns>
</LayoutTitle>
