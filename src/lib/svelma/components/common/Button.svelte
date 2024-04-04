<script lang="ts">
	import { bulmaClassnames } from '$lib/svelma/utils/bulma.js';
	import type { BulmaHelper, ButtonColor, ButtonSize } from '$lib/svelma/utils/bulma.types.js';
	import type { ClsArgument } from '$lib/svelma/utils/classnames.js';
	import IconText from './IconText.svelte';

	type HTMLAttributeAnchorTarget = '_self' | '_blank' | '_parent' | '_top' | (string & {});

	export let className: ClsArgument = '';
	export let bulma: BulmaHelper = {};
	export let type: 'button' | 'submit' = 'button';
	export let href: string = '';
	export let icon: string = '';
	export let text: string = '';
	export let color: ButtonColor | null = null;
	export let light: boolean = false;
	export let size: ButtonSize | null = null;
	export let responsive: boolean = false;
	export let fullWidth: boolean = false;
	export let outlined: boolean = false;
	export let inverted: boolean = false;
	export let rounded: boolean = false;
	export let loading: boolean = false;
	export let isStatic: boolean = false;
	export let disabled: boolean | undefined = undefined;
	export let target: HTMLAttributeAnchorTarget | undefined | null = undefined;
	export let title: string | undefined = undefined;

	$: cls = bulmaClassnames(bulma, [
		'button',
		className,
		{
			[`is-${color}`]: color,
			'is-light': light,
			[`is-${size}`]: size,
			'is-responsive': responsive,
			'is-fullwidth': fullWidth,
			'is-outlined': outlined,
			'is-inverted': inverted,
			'is-rounded': rounded,
			'is-loading': loading,
			'is-static': isStatic,
		},
	]);

	$: props = {
		disabled: disabled || undefined,
		title,
	};
</script>

{#if href}
	<a {href} class={cls} {target} {...props}>
		<IconText {icon} {text} />
		<slot />
	</a>
{:else if type == 'submit'}
	<buttton type="submit" role="button" tabindex="-1" class={cls} {...props}>
		<IconText {icon} {text} />
		<slot />
	</buttton>
{:else}
	<buttton role="button" tabindex="-1" on:click class={cls} {...props}>
		<IconText {icon} {text} />
		<slot />
	</buttton>
{/if}
