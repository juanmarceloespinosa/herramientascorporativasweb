<script lang="ts">
	import Title from '$lib/svelma/components/common/Title.svelte';

	export let title: string;
	export let background: string;
	export let href: string;
</script>

<div class="slide">
	<img src={background} alt={title} />
	<a {href} class="overlay">
		<Title>{title}</Title>
		<p class="subtitle is-hidden-mobile">
			<slot />
		</p>
	</a>
</div>

<style lang="less">
	.slide {
		width: 100%;
		height: 100%;
		position: relative;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
	img {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
	.overlay {
		z-index: 1000;
		border-radius: 2rem;
		background-color: rgba(255, 255, 255, 0.5);
		padding: 3rem;
	}
</style>
