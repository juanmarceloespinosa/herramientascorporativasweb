<script lang="ts">
	import {
		PUBLIC_APP_TITLE,
		PUBLIC_HOME_URL,
		PUBLIC_LOGO_HEIGHT,
		PUBLIC_LOGO_URL,
		PUBLIC_LOGO_WIDTH,
		PUBLIC_VERSION,
	} from '$env/static/public';
	import type { Principal } from '$lib/models/core';
	import IconText from '$lib/svelma/components/common/IconText.svelte';
	import { icons } from '$lib/svelma/components/common/icons';
	import Footer from '$lib/svelma/components/layouts/Footer.svelte';
	import Navbar from '$lib/svelma/components/layouts/Navbar.svelte';
	import { appIcons } from '$lib/utils/appIcons';
	import { appMenuEnd, appMenuStart, appMessage, appTitle, clrAppMessage } from '$lib/utils/stores';
	import MainLayoutMenu from './MainLayoutMenu.svelte';

	export let principal: Principal | undefined;

	let menuActive: boolean = false;

	$: pageTitle = $appTitle ? `${PUBLIC_APP_TITLE} - ${$appTitle}` : PUBLIC_APP_TITLE;
	$: logoWidth = +(PUBLIC_LOGO_WIDTH || '32');
	$: logoHeight = +(PUBLIC_LOGO_HEIGHT || '32');
	$: menuStart = $appMenuStart;
	$: menuEnd = $appMenuEnd;
	$: message = $appMessage;

	function onMenuActiveChange(e: CustomEvent<boolean>) {
		menuActive = e.detail;
	}
</script>

<svelte:head>
	<title>{pageTitle}</title>
</svelte:head>
<Navbar
	color="dark"
	hasShadow
	isTransparent
	let:NavbarBrand
	let:NavbarItem
	let:NavbarMenu
	let:NavbarStart
	let:NavbarEnd
>
	<NavbarBrand
		homeUrl={PUBLIC_HOME_URL}
		logoUrl="{PUBLIC_HOME_URL}/{PUBLIC_LOGO_URL}"
		{logoWidth}
		{logoHeight}
		dataTarget="main-menu"
		on:menu-active-changed={onMenuActiveChange}
	>
		{pageTitle}
	</NavbarBrand>
	<NavbarMenu id="main-menu" active={menuActive}>
		{#if menuStart.length}
			<NavbarStart>
				{#each menuStart as menu}
					<MainLayoutMenu {menu} />
				{/each}
			</NavbarStart>
		{/if}
		<NavbarEnd>
			{#each menuEnd as menu}
				<MainLayoutMenu {menu} />
			{/each}
			{#if principal}
				{#if principal.role}
					<NavbarItem
						href="/{principal.role}"
						preventDefault={false}
						title="Inicio"
						preloadData="tap"
					>
						<IconText icon={icons.home} text={principal.user.name}></IconText>
					</NavbarItem>
				{/if}
				<NavbarItem
					href="/password"
					preventDefault={false}
					title="Cambiar Contraseña"
					preloadData="tap"
				>
					<IconText icon={appIcons.credential} text="Contraseña"></IconText>
				</NavbarItem>
				<NavbarItem href="/logout" preventDefault={false} title="Salir" preloadData="tap">
					<IconText icon={icons.logout} text="Salir"></IconText>
				</NavbarItem>
			{:else}
				<NavbarItem href="/login" preventDefault={false} title="Ingresar" preloadData="tap">
					<IconText icon={icons.login} text="Ingresar"></IconText>
				</NavbarItem>
			{/if}
		</NavbarEnd>
	</NavbarMenu>
</Navbar>
<main>
	<slot />
</main>
<Footer>
	v.{PUBLIC_VERSION}
</Footer>
{#if message}
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<div class="app-message" on:click={clrAppMessage}>
		<div
			class="notification"
			class:is-primary={message?.type == 'info'}
			class:is-warning={message?.type == 'warn'}
			class:is-danger={message?.type == 'error'}
		>
			{message?.message}
		</div>
	</div>
{/if}

<style>
	.app-message {
		z-index: 1000;
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: rgba(64, 64, 64, 0.8);
		cursor: pointer;
	}
	.notification {
		margin-bottom: 0;
	}
</style>
