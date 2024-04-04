<script lang="ts">
	import LayoutTitle from '$lib/components/layouts/LayoutTitle.svelte';
	import Columns from '$lib/svelma/components/common/Columns.svelte';
</script>

<LayoutTitle title="Networking">
	<Columns let:Column>
		<Column size="6" offset="3">
			<div class="page">
				<figure class="image is-2by1">
					<img src="/images/bg4.jpg" alt="Networking" />
				</figure>
				<p>Redes LAN, Cableado Estructurado. Redes WAN, Enlaces de Fibra. Soporte Técnico.</p>
			</div>
		</Column>
	</Columns>
</LayoutTitle>
