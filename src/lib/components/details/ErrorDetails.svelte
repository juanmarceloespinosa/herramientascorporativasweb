<script lang="ts">
	import Panel from '$lib/svelma/components/common/Panel.svelte';

	export let errors: string[] | null;
</script>

{#if errors}
	<Panel color="danger" classes={!errors ? 'hidden' : ''} let:PanelHeading let:PanelBlock>
		<PanelHeading>Errores</PanelHeading>
		{#each errors as err}
			<PanelBlock>{err}</PanelBlock>
		{/each}
	</Panel>
{/if}
