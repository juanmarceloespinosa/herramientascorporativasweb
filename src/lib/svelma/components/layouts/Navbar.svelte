<script lang="ts">
	import type { BwColors, Colors } from '$lib/svelma/utils/bulma.types.js';
	import { classnames } from '$lib/svelma/utils/classnames.js';
	import NavbarBrand from './NavbarBrand.svelte';
	import NavbarDivider from './NavbarDivider.svelte';
	import NavbarDropdown from './NavbarDropdown.svelte';
	import NavbarEnd from './NavbarEnd.svelte';
	import NavbarItem from './NavbarItem.svelte';
	import NavbarMenu from './NavbarMenu.svelte';
	import NavbarStart from './NavbarStart.svelte';

	export let isTransparent: boolean = false;
	export let fixed: 'top' | 'bottom' | undefined = undefined;
	export let color: Colors | BwColors | undefined = undefined;
	export let isSpaced: boolean = false;
	export let hasShadow: boolean = false;

	$: cls = classnames(color ? `is-${color}` : '');
</script>

<nav
	class="navbar {cls}"
	class:is-transparent={isTransparent}
	class:is-fixed-top={fixed === 'top'}
	class:is-fixed-bottom={fixed === 'bottom'}
	class:is-spaced={isSpaced}
	class:has-dhadow={hasShadow}
	aria-label="main navigation"
>
	<slot
		{NavbarBrand}
		{NavbarDivider}
		{NavbarDropdown}
		{NavbarEnd}
		{NavbarStart}
		{NavbarItem}
		{NavbarMenu}
	/>
</nav>
