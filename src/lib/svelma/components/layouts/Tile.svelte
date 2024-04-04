<script lang="ts">
	import { bulmaClassnames } from '$lib/svelma/utils/bulma.js';
	import type {
		BulmaHelper,
		TileType,
		TileSize,
		TileLayout
	} from '$lib/svelma/utils/bulma.types.js';
	import type { ClsArgument } from '$lib/svelma/utils/classnames.js';

	export let bulma: BulmaHelper = {};
	export let type: TileType;
	export let className: ClsArgument = '';
	export let size: TileSize | undefined = undefined;
	export let layout: TileLayout = 'horizontal';

	$: cls = bulmaClassnames(bulma, [
		'tile',
		`is-${type}`,
		className,
		{
			[`is-${size}`]: size != undefined,
			'is-vertical': layout == 'vertical'
		}
	]);
</script>

<div class={cls}>
	<slot />
</div>
