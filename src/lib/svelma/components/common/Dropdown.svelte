<script lang="ts">
	import { bulmaClassnames } from '$lib/svelma/utils/bulma.js';
	import type { Action, BulmaHelper } from '$lib/svelma/utils/bulma.types.js';
	import IconText from './IconText.svelte';
	import { icons } from './icons.js';

	export let bulma: BulmaHelper = {};
	export let id: string;
	export let items: Action[];
	export let triggerText: string | undefined = undefined;
	export let triggerIcon: string | undefined = icons.chevronDown;
	export let isActive: boolean = false;
	export let isHoverable: boolean = false;
	export let isRight: boolean = false;
	export let isUp: boolean = false;

	$: cls = bulmaClassnames(bulma, [
		'dropdown',
		{
			'is-active': isActive,
			'is-hoverable': isHoverable,
			'is-right': isRight,
			'is-up': isUp
		}
	]);
</script>

<div class={cls}>
	<div class="dropdown-trigger">
		<button class="button" aria-haspopup="true" aria-controls={id}>
			<IconText icon={triggerIcon} text={triggerText} />
		</button>
	</div>
	<div class="dropdown-menu" {id} role="menu">
		<div class="dropdown-content">
			{#each items as item (item.name)}
				{#if item.text === '-'}
					<hr class="dropdown-divider" />
				{:else if item.href}
					<a href={item.href} class="dropdown-item" class:is-active={item.isActive}>
						<IconText icon={item.icon} text={item.text} />
					</a>
				{:else if item.click}
					<a
						href="/"
						class="dropdown-item"
						class:is-active={item.isActive}
						on:click|preventDefault={item.click}
					>
						<IconText icon={item.icon} text={item.text} />
					</a>
				{:else}
					<div class="dropdown-item" class:is-active={item.isActive}>
						<IconText icon={item.icon} text={item.text} />
					</div>
				{/if}
			{/each}
			<slot />
		</div>
	</div>
</div>
