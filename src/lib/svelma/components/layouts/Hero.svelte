<script lang="ts">
	import { bulmaClassnames } from '$lib/svelma/utils/bulma.js';
	import type { BulmaHelper, Colors, HeroSize } from '$lib/svelma/utils/bulma.types.js';
	import HeroBody from './HeroBody.svelte';
	import HeroFoot from './HeroFoot.svelte';
	import HeroHead from './HeroHead.svelte';

	export let bulma: BulmaHelper = {};
	export let color: Colors | undefined = undefined;
	export let size: HeroSize | undefined = undefined;
	export let isFullHeightWithNavbar: boolean = false;

	$: cls = bulmaClassnames(bulma, [
		'hero',
		{
			[`is-${color}`]: color != undefined,
			[`is-${size}`]: size != undefined,
			'is-fullheight-with-navbar': isFullHeightWithNavbar
		}
	]);
</script>

<section class={cls}>
	<slot {HeroHead} {HeroBody} {HeroFoot} />
</section>
