<script lang="ts">
	import LayoutTitle from '$lib/components/layouts/LayoutTitle.svelte';
	import Columns from '$lib/svelma/components/common/Columns.svelte';
</script>

<LayoutTitle title="Servicios">
	<Columns let:Column>
		<Column size="6" offset="3">
			<div class="page">
				<figure class="image is-2by1">
					<img src="/images/bg1.jpg" alt="Servicios" />
				</figure>
				<div class="columns list">
					<div class="column is-half">
						<p class="bold">Desarrollo de Software</p>
						<p>Aplicaciones Web</p>
						<p>Aplicaciones Móviles</p>
						<p>Sistemas Contables - Inventario - Activo Fijo</p>
						<p>Control de Personal</p>
						<p>Compra - Ventas - Facturación</p>
						<p>Workflows - BPM</p>
						<p>Aplicaciones SharePoint &amp; Office 365</p>
						<p>Intranet Corporativa y PyME</p>
						<p class="bold">Diseño Web</p>
						<p>Portales e Intranets</p>
						<p>Frontend,&nbsp; Backend, Full Stack</p>
						<p>Transacciones y Pagos en Línea</p>
						<p>WordPress &amp; Joomla</p>
						<p>Comercio Electrónico - eCommerce</p>
						<p class="bold">Hardware</p>
						<p>Servidores</p>
						<p>Estaciones de Trabajo - Workstations</p>
						<p>Portátiles</p>
						<p>Handhelds</p>
						<p>Smartphones</p>
						<p>Networking - Redes LAN - WAN</p>
						<p>Centros de Cómputo</p>
						<p>Seguridad Perimetral - Firewalls</p>
					</div>
					<div class="column is-half">
						<p class="bold">Hosting &amp; Cloud Services</p>
						<p>Almacenamiento en la Nube</p>
						<p>Amazon AWS</p>
						<p>Microsoft Azure</p>
						<p>Alojamiento de Sitios Web</p>
						<p>Servidor de Email y Correo Corporativo</p>
						<p>Administración de DNS</p>
						<p>Registro de Dominios .COM .BO .ORG .NET</p>
						<p>Servicios Administrados</p>
						<p class="bold">Seguridad Electrónica</p>
						<p>CCTV - Circuito Cerrado de TV</p>
						<p>Grabación y Almacenamiento de Video Digital</p>
						<p>Cerca Eléctrica</p>
						<p>Alarmas contra Robo e Incendio</p>
						<p>Lectores Biométricos</p>
						<p class="bold">Soporte</p>
						<p>Mantenimiento de Servidores y PC</p>
						<p>Instalacion y Configuracion de Servicios</p>
						<p>Seguridad de Infraestructura y Redes</p>
						<p class="bold">Consultoria</p>
						<p>Consultoría y Proyectos TI</p>
						<p>Asesoría en Licenciamiento de Software</p>
						<p>Asesoría en Gral.</p>
					</div>
				</div>
			</div>
		</Column>
	</Columns>
</LayoutTitle>

<style lang="less">
	.columns.list {
		p.bold {
			font-weight: bold;
		}
		p:not(.bold) {
			padding-left: 2rem;
		}
	}
</style>
