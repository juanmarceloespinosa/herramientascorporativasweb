<script lang="ts">
	import { bulmaClassnames } from '$lib/svelma/utils/bulma.js';
	import type {
		BulmaHelper,
		BwColors,
		Colors,
		ContentSize,
		TagSize
	} from '$lib/svelma/utils/bulma.types.js';
	import Delete from './Delete.svelte';

	export let bulma: BulmaHelper = {};
	export let color: Colors | BwColors | undefined = undefined;
	export let size: TagSize | undefined = undefined;
	export let isRounded: boolean = false;
	export let hasDelete: boolean = false;
	export let deleteSize: ContentSize | undefined = undefined;

	$: cls = bulmaClassnames(bulma, [
		'tag',
		{
			[`is-${color}`]: color != undefined,
			[`is-${size}`]: size != undefined,
			'is-rounded': isRounded
		}
	]);
</script>

<span class={cls}>
	<slot />
	{#if hasDelete}
		<Delete size={deleteSize} />
	{/if}
</span>
