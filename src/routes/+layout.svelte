<script lang="ts">
	import {
		PUBLIC_HOME_FOOTER_COPYRIGHT,
		PUBLIC_HOME_FOOTER_TITLE,
		PUBLIC_HOME_LOGO_ALT,
		PUBLIC_VERSION
	} from '$env/static/public';
	import HomeHeader from '$lib/components/home/HomeHeader.svelte';
	import HomeTopMenu from '$lib/components/home/HomeTopMenu.svelte';
	import { appTitle } from '$lib/utils/stores';
	import type { LayoutData } from './$types';

	let elNavbar: HTMLDivElement;
	let elFooter: HTMLElement;

	$: height = (elNavbar?.offsetHeight ?? 0) + (elFooter?.offsetHeight ?? 0);
	$: style = height ? `max-height: calc(100vh - ${height}px);` : '';
</script>

<svelte:head>
	<title>{$appTitle || PUBLIC_HOME_LOGO_ALT}</title>
</svelte:head>
<div class="home header box p-0" bind:this={elNavbar}>
	<HomeTopMenu />
	<HomeHeader />
</div>
<main class="home" {style}><slot /></main>
<footer class="footer home" bind:this={elFooter}>
	<div class="is-hidden-mobile">
		{PUBLIC_HOME_FOOTER_COPYRIGHT} | {PUBLIC_HOME_FOOTER_TITLE} | v.{PUBLIC_VERSION}
	</div>
	<div class="is-hidden-tablet is-flex is-flex-direction-column is-align-items-center">
		<div>{PUBLIC_HOME_FOOTER_COPYRIGHT} | {PUBLIC_HOME_FOOTER_TITLE}</div>
		<div>v.{PUBLIC_VERSION}</div>
	</div>
</footer>

<style lang="less">
	.header {
		display: flex;
		flex-direction: column;
		align-items: stretch;
	}
</style>
