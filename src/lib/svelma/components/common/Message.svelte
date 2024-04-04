<script lang="ts">
	import { bulmaClassnames } from '$lib/svelma/utils/bulma.js';
	import type { BulmaHelper, Colors, ContentSize } from '$lib/svelma/utils/bulma.types.js';
	import Delete from './Delete.svelte';
	import IconText from './IconText.svelte';

	export let bulma: BulmaHelper = {};
	export let icon: string | undefined = undefined;
	export let text: string | undefined = undefined;
	export let color: Colors | 'dark' | undefined = undefined;
	export let size: ContentSize | undefined = undefined;

	$: cls = bulmaClassnames(bulma, [
		'message',
		{
			[`is-${color}`]: color != undefined,
			[`is-${size}`]: size != undefined
		}
	]);
</script>

<article class={cls}>
	{#if icon || text}
		<div class="message-header">
			<IconText {icon} {text} />
			<Delete on:click />
		</div>
	{/if}
	<div class="message-body">
		<slot />
	</div>
</article>
