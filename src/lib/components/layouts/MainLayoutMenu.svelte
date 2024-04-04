<script lang="ts">
	import IconText from '$lib/svelma/components/common/IconText.svelte';
	import NavbarItem from '$lib/svelma/components/layouts/NavbarItem.svelte';
	import type { MenuAction } from '$lib/utils/stores';

	export let menu: MenuAction;
</script>

{#if menu.href}
	<NavbarItem href={menu.href} preventDefault={false} preloadData={menu.preloadData}>
		<IconText icon={menu.icon} text={menu.text} />
	</NavbarItem>
{:else if menu.click}
	<NavbarItem href="/" on:click={menu.click} preloadData={menu.preloadData}>
		<IconText icon={menu.icon} text={menu.text} />
	</NavbarItem>
{/if}
