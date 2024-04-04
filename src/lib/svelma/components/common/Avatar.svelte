<script lang="ts">
	import { bulmaClassnames } from '$lib/svelma/utils/bulma.js';
	import type { BulmaHelper } from '$lib/svelma/utils/bulma.types.js';
	import type { ClsArgument } from '$lib/svelma/utils/classnames.js';

	export let avatar: string;
	export let className: ClsArgument = '';
	export let bulma: BulmaHelper = {};
	export let size: number = 24;

	const noImage = '/images/no-image.png';

	let hasError: boolean = false;

	$: cls = bulmaClassnames(bulma, ['avatar', className]);

	function onError() {
		hasError = true;
	}
</script>

<img
	src={hasError || !avatar ? noImage : avatar}
	alt="Avatar"
	class={cls}
	style="width: {size}px; height: {size}px;"
	on:error={onError}
/>

<style>
	.avatar {
		vertical-align: middle;
		border-radius: 50%;
	}
</style>
