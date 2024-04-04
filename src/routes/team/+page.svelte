<script lang="ts">
	import LayoutTitle from '$lib/components/layouts/LayoutTitle.svelte';
	import Columns from '$lib/svelma/components/common/Columns.svelte';
</script>

<LayoutTitle title="Equipo">
	<Columns let:Column>
		<Column size="6" offset="3">
			<div class="page">
				<figure class="image is-2by1">
					<img src="/images/team.png" alt="team" />
				</figure>
				<p>
					Nuestro personal se encuentra en constante actualización y cuenta con experiencia en
					diversos campos que abarcan desde el Desarrollo de Aplicaciones Corporativas, Diseño
					Gráfico, Consultoría y Asesoría en Informática, Seguridad, Gestión Empresarial y
					Optimización de Procedimientos y Recursos.
				</p>
				<p>
					Somos profesionales comprometidos en llevar a su empresa a una transformación digital a
					través de la implementación de soluciones que hagan más eficientes sus procesos, mejoren
					sus ventas y posicionen mejor su marca, ofreciendo solidez tanto al proveer soluciones
					tecnológicas conocidas y de fabricantes con trayectoria, como al desarrollar e implementar
					herramientas propias y a medida a través de nuestra Fábrica de Software.
				</p>
			</div>
		</Column>
	</Columns>
</LayoutTitle>
