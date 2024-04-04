<script lang="ts">
	import Column from '$lib/svelma/components/common/Column.svelte';
	import Columns from '$lib/svelma/components/common/Columns.svelte';
</script>

<div class="layout-responsive">
	<Columns>
		<Column size="4" offset="4"><slot /></Column>
	</Columns>
</div>

<style>
	.layout-responsive {
		max-height: calc(100vh - 52px - 48px);
	}
</style>
