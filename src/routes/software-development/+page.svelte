<script lang="ts">
	import LayoutTitle from '$lib/components/layouts/LayoutTitle.svelte';
	import Columns from '$lib/svelma/components/common/Columns.svelte';
</script>

<LayoutTitle title="Desarrollo de Software">
	<Columns let:Column>
		<Column size="6" offset="3">
			<div class="page">
				<figure class="image is-2by1">
					<img src="/images/bg1.jpg" alt="Desarrollo de Software" />
				</figure>
				<p>Aplicaciones Web. Aplicaciones Móviles. SharePoint y Office 365.</p>
			</div>
		</Column>
	</Columns>
</LayoutTitle>
