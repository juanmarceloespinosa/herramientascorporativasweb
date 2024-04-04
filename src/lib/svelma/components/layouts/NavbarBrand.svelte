<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	export let homeUrl: string;
	export let logoUrl: string;
	export let logoWidth: number;
	export let logoHeight: number;
	export let dataTarget: string | undefined = undefined;
	export let active = false;

	function onMenuToggle() {
		active = !active;
		if (active) dispatch('menu-opened');
		else dispatch('menu-closed');
		dispatch('menu-active-changed', active);
	}
</script>

<div class="navbar-brand">
	<a class="navbar-item" href={homeUrl}>
		<img src={logoUrl} alt="logo" width={logoWidth} height={logoHeight} />
		<slot />
	</a>

	{#if dataTarget}
		<a
			href="/"
			role="button"
			class="navbar-burger"
			class:is-active={active}
			aria-label="menu"
			aria-expanded="false"
			data-target={dataTarget}
			on:click|preventDefault={onMenuToggle}
		>
			<span aria-hidden="true" />
			<span aria-hidden="true" />
			<span aria-hidden="true" />
		</a>
	{/if}
</div>
