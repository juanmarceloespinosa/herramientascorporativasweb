<script lang="ts">
	import {
		PUBLIC_HOME_LOGO_ALT,
		PUBLIC_HOME_LOGO_SRC,
		PUBLIC_HOME_LOGO_SRCALT
	} from '$env/static/public';
	import Icon from '$lib/svelma/components/common/Icon.svelte';
	import { icons } from '$lib/svelma/components/common/icons';
	import { appIcons } from '$lib/utils/appIcons';
	import type { MenuAction } from '$lib/utils/stores';
	import { slide } from 'svelte/transition';

	const links: MenuAction[] = [
		{
			text: 'Inicio',
			href: '/'
		},
		{
			text: 'Quienes Somos',
			href: '/about'
		},
		{
			text: 'Equipo',
			href: '/team'
		},
		{
			text: 'Valores Corporativos',
			href: '/corporate-values'
		},
		{
			text: 'Servicios',
			href: '/services'
		},
		{
			text: 'Contact',
			href: '/contact'
		}
	];

	let isOpen = false;

	function onOpen() {
		isOpen = !isOpen;
	}
	function onClick() {
		isOpen = false;
	}
</script>

<header id="main-header">
	<div class="is-hidden-mobile">
		<img
			src={PUBLIC_HOME_LOGO_SRC}
			class="custom-logo"
			alt={PUBLIC_HOME_LOGO_ALT}
			decoding="async"
			srcset="{PUBLIC_HOME_LOGO_SRC} 575w, {PUBLIC_HOME_LOGO_SRCALT} 300w"
			sizes="(max-width: 575px) 100vw, 575px"
		/>
		<div class="spacer">&nbsp;</div>
		<div class="links">
			{#each links as link (link.href)}
				<a href={link.href} class="link">{link.text}</a>
			{/each}
		</div>
	</div>
	<div class="is-hidden-tablet">
		<div class="main-header-row">
			<div class="main-header-img">
				<img
					src={PUBLIC_HOME_LOGO_SRC}
					class="custom-logo"
					alt={PUBLIC_HOME_LOGO_ALT}
					decoding="async"
					srcset="{PUBLIC_HOME_LOGO_SRC} 575w, {PUBLIC_HOME_LOGO_SRCALT} 300w"
					sizes="(max-width: 575px) 100vw, 575px"
				/>
			</div>
			<button class="button is-primary" on:click={onOpen}>
				<Icon icon={isOpen ? icons.close : appIcons.menu} />
			</button>
		</div>
		{#if isOpen}
			<div class="links" transition:slide>
				{#each links as link (link.href)}
					<a href={link.href} class="link has-text-white" on:click={onClick}>{link.text}</a>
				{/each}
			</div>
		{/if}
	</div>
</header>

<style lang="less">
	#main-header {
		font-family: 'Poppins', sans-serif;
		font-weight: bold;
		background: rgba(255, 255, 255, 0.1);
	}
	.is-hidden-mobile {
		display: flex;
		flex-direction: row;
		align-items: center;
		padding-left: 5rem;
		padding-right: 5rem;
		max-height: 5.5rem;
		img {
			max-height: 5rem;
		}
	}
	.is-hidden-tablet {
		display: flex;
		flex-direction: column;
		align-items: stretch;
		padding-left: 1rem;
		padding-right: 1rem;

		.main-header-row {
			display: flex;
			flex-direction: row;
			align-items: center;
		}
		.main-header-img {
			flex: 1;
			display: flex;
			justify-content: start;
			align-items: center;
			img {
				max-height: 3rem;
			}
		}
		.links {
			flex-direction: column;
			align-items: stretch;
			gap: 1rem;
			padding: 1rem;
			background-color: #425c8c;
		}
	}
	.spacer {
		flex: 1;
	}
	.links {
		display: flex;
		flex-direction: row;
		gap: 2rem;
		color: #425c8c;
		font-weight: bold;
		padding: 3rem;
	}
</style>
