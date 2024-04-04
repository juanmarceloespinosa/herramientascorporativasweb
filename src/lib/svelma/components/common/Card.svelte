<script lang="ts">
	import { bulmaClassnames } from '$lib/svelma/utils/bulma.js';
	import type { BulmaHelper } from '$lib/svelma/utils/bulma.types.js';
	import Cardheader from './Cardheader.svelte';
	import CardContent from './CardContent.svelte';
	import CardFooter from './CardFooter.svelte';
	import CardImage from './CardImage.svelte';

	export let bulma: BulmaHelper = {};

	$: cls = bulmaClassnames(bulma, ['card']);
</script>

<div class={cls}>
	<slot {Cardheader} {CardContent} {CardFooter} {CardImage} />
</div>
