<script lang="ts">
	import LayoutTitle from '$lib/components/layouts/LayoutTitle.svelte';
	import Columns from '$lib/svelma/components/common/Columns.svelte';
</script>

<LayoutTitle title="Servidores e Infraestructura">
	<Columns let:Column>
		<Column size="6" offset="3">
			<div class="page">
				<figure class="image is-2by1">
					<img src="/images/bg5.jpg" alt="Servidores e Infraestructura" />
				</figure>
				<p>Servicios Administrados. Licenciamiento de Software. Soporte Técnico.</p>
			</div>
		</Column>
	</Columns>
</LayoutTitle>
