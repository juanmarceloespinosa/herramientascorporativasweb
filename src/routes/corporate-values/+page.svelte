<script lang="ts">
	import LayoutTitle from '$lib/components/layouts/LayoutTitle.svelte';
	import Columns from '$lib/svelma/components/common/Columns.svelte';
</script>

<LayoutTitle title="Valores Corporativos">
	<Columns let:Column>
		<Column size="6" offset="3">
			<div class="page">
				<figure class="image is-16by9">
					<img src="/images/corporate-values.jpg" alt="Valores Corporativos" />
				</figure>
				<ul>
					<li>Honestidad, Calidad y Cumplimiento de lo acordado en nuestros contratos</li>
					<li>Sinceridad, Integridad y Transparencia en nuestras propuestas</li>
					<li>Compromiso y Responsabilidad en el tiempo</li>
					<li>Motivación y Proactividad en todas y cada una de las soluciones desarrolladas</li>
					<li>Confianza, Seguridad y Reserva en cuanto a información sensible</li>
					<li>Innovación y Creatividad en el desarrollo de los proyectos</li>
					<li>Eficiencia y Perseverancia garantizan el resultado de nuestro trabajo día a día</li>
				</ul>
			</div>
		</Column>
	</Columns>
</LayoutTitle>

<style lang="less">
	ul {
		list-style-type: disc;
		padding: 1.5rem;
	}
</style>
