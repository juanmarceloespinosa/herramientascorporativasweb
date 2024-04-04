<script lang="ts">
	import Carousel from '$lib/components/home/Carousel.svelte';
	import HomeSlide from '$lib/components/home/HomeSlide.svelte';

	const images = [
		'/images/bg1.jpg',
		'/images/bg2.jpg',
		'/images/bg3.png',
		'/images/bg4.jpg',
		'/images/bg5.jpg'
	];
</script>

<svelte:head>
	{#each images as href}
		<link rel="preload" as="image" {href} />
	{/each}
</svelte:head>

<Carousel period={5000} count={5} let:currentIndex let:duration let:Slide let:size let:dirLeft>
	<Slide active={currentIndex == 0} {duration} {size} {dirLeft}>
		<HomeSlide
			background="/images/bg1.jpg"
			href="/software-development"
			title="Desarrollo de Software"
		>
			Aplicaciones Web. Aplicaciones Móviles. SharePoint y Office 365.
		</HomeSlide>
	</Slide>
	<Slide active={currentIndex == 1} {duration} {size} {dirLeft}>
		<HomeSlide background="/images/bg2.jpg" href="/amazon-aws" title="Hosting & Amazon AWS">
			Servicios en la nube. Amazon Web Services Cloud. Pago por hora de uso. Reserva de instancias.
			Hosting Desde 10$us. el...
		</HomeSlide>
	</Slide>
	<Slide active={currentIndex == 2} {duration} {size} {dirLeft}>
		<HomeSlide background="/images/bg3.png" href="/testing-qa" title="Testing & QA">
			Software Quality Assurance, Software Testing, Test Automation, Mobile Software Testing.
		</HomeSlide>
	</Slide>
	<Slide active={currentIndex == 3} {duration} {size} {dirLeft}>
		<HomeSlide background="/images/bg4.jpg" href="/networking" title="Networking">
			Redes LAN, Cableado Estructurado. Redes WAN, Enlaces de Fibra. Soporte Técnico.
		</HomeSlide>
	</Slide>
	<Slide active={currentIndex == 4} {duration} {size} {dirLeft}>
		<HomeSlide
			background="/images/bg5.jpg"
			href="/infrastructure"
			title="Servidores e Infraestructura"
		>
			Servicios Administrados. Licenciamiento de Software. Soporte Técnico.
		</HomeSlide>
	</Slide>
</Carousel>
