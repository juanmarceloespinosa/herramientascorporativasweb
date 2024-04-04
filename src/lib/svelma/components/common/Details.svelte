<script lang="ts">
	import { bulmaClassnames } from '$lib/svelma/utils/bulma.js';
	import type { BulmaHelper } from '$lib/svelma/utils/bulma.types.js';

	export let title: string;
	export let value: string;
	export let bulma: BulmaHelper = {};
	export let bulmaTitle: BulmaHelper = {};
	export let bulmaSubtitle: BulmaHelper = {};
	export let underlined: boolean = false;

	$: cls = bulmaClassnames(bulma, [
		'details full-width',
		{
			flexDir: 'column',
			alignItems: 'stretch',
			justifyContent: 'flex-start',
			underlined
		}
	]);
</script>

<div class={cls}>
	<p class="title {bulmaClassnames(bulmaTitle, { textSize: '5' })}">{title}</p>
	<p class="subtitle {bulmaClassnames(bulmaSubtitle, { textSize: '6' })}">{value}</p>
</div>

<style>
	.details.underlined {
		border-bottom: 1px solid black;
	}
	.title,
	.subtitle {
		text-align: left;
	}
</style>
