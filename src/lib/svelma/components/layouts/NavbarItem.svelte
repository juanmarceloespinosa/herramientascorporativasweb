<script lang="ts">
	export let href: string;
	export let preventDefault: boolean = true;
	export let isExpanded: boolean = false;
	export let isTab: boolean = false;
	export let isActive: boolean = false;
	export let title: string = '';
	export let preloadData: 'tap' | 'hover' | undefined = undefined;
</script>

{#if preventDefault}
	<a
		class="navbar-item"
		{href}
		{title}
		class:is-expanded={isExpanded}
		class:is-tab={isTab}
		class:is-active={isActive}
		data-sveltekit-preload-data={preloadData}
		on:click|preventDefault
	>
		<slot />
	</a>
{:else}
	<a
		class="navbar-item"
		{href}
		{title}
		class:is-expanded={isExpanded}
		class:is-tab={isTab}
		class:is-active={isActive}
		data-sveltekit-preload-data={preloadData}
	>
		<slot />
	</a>
{/if}
