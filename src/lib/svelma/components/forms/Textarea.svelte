<script lang="ts">
	import { bulmaClassnames } from '$lib/svelma/utils/bulma.js';
	import type { BulmaHelper, Colors, InputSize } from '$lib/svelma/utils/bulma.types.js';
	import { getNopUse, type Action } from '$lib/svelma/utils/validators.js';
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	export let bulma: BulmaHelper = {};
	export let id: string;
	export let value: string;
	export let action: Action | undefined = undefined;
	export let rows: number | undefined = undefined;
	export let placeholder: string | undefined = undefined;
	export let disabled: boolean = false;
	export let color: Colors | undefined = undefined;
	export let size: InputSize | undefined = undefined;
	export let isRounded: boolean = false;
	export let isHovered: boolean = false;
	export let isFocused: boolean = false;
	export let isStatic: boolean = false;
	export let readonly: boolean | undefined = undefined;
	export let hasFixedSize: boolean = false;

	$: cls = bulmaClassnames(bulma, [
		'input',
		{
			[`is-${color}`]: color != undefined,
			[`is-${size}`]: size != undefined,
			'is-rounded': isRounded,
			'is-hovered': isHovered,
			'is-focused': isFocused,
			'is-static': isStatic,
			'has-fixed-size': hasFixedSize
		}
	]);

	$: useAction = action?.use || getNopUse();

	const handleInput = (e: Event) => {
		const target = e.target as HTMLInputElement;
		value = target.value;
		dispatch('value-changed', { name: id, value });
	};
</script>

<textarea
	{id}
	name={id}
	class={cls}
	{value}
	{placeholder}
	{readonly}
	{disabled}
	{rows}
	on:input={handleInput}
	use:useAction={value}
/>
