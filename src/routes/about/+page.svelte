<script lang="ts">
	import LayoutTitle from '$lib/components/layouts/LayoutTitle.svelte';
	import Columns from '$lib/svelma/components/common/Columns.svelte';
</script>

<LayoutTitle title="Quienes Somos">
	<Columns let:Column>
		<Column size="6" offset="3">
			<div class="page">
				<figure class="image is-2by1">
					<img src="/images/about.jpg" alt="about" />
				</figure>
				<p>
					Somos una empresa especializada en el Desarrollo de Software y las Tecnologías de la
					Información y Comunicación. Proveemos servicios integrales de consultoría e implementación
					de aplicaciones corporativas, diseño de portales web, comercio electrónico y marketing
					digital, a través de nuestros productos y servicios profesionales.
				</p>
				<p>
					Nuestra misión es convertirnos en aliados estratégicos de las empresas, ayudando a lograr
					eficiencia, crecimiento sostenible y rentabilidad, entregando resultados reales y
					otorgando valor agregado con nuestras soluciones propuestas.
				</p>
				<p>
					Tenemos la capacidad de afrontar proyectos de cualquier tamaño, dentro de los requisitos,
					alcance y presupuesto del cliente, entregando soluciones que superan las expectativas en
					cada uno de nuestras implementaciones.
				</p>
			</div>
		</Column>
	</Columns>
</LayoutTitle>
