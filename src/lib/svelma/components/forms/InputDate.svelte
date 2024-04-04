<script lang="ts">
	import { bulmaClassnames } from '$lib/svelma/utils/bulma.js';
	import type { BulmaHelper, Colors, InputSize } from '$lib/svelma/utils/bulma.types.js';
	import { getFormatter } from '$lib/svelma/utils/format.js';
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();
	const formatter = getFormatter();

	export let bulma: BulmaHelper = {};
	export let id: string;
	export let value: Date | undefined;
	export let step: string | number | undefined = undefined;
	export let placeholder: string | undefined = undefined;
	export let color: Colors | undefined = undefined;
	export let size: InputSize | undefined = undefined;
	export let isRounded: boolean = false;
	export let isHovered: boolean = false;
	export let isFocused: boolean = false;
	export let isStatic: boolean = false;
	export let readonly: boolean | undefined = undefined;
	export let disabled: boolean = false;

	$: cls = bulmaClassnames(bulma, [
		'input',
		{
			[`is-${color}`]: color != undefined,
			[`is-${size}`]: size != undefined,
			'is-rounded': isRounded,
			'is-hovered': isHovered,
			'is-focused': isFocused,
			'is-static': isStatic,
		},
	]);

	$: sValue = formatter.fromDate(value);

	const handleInput = (e: Event) => {
		const target = e.target as HTMLInputElement;
		value = formatter.toDate(target.value);
		dispatch('value-changed', { name: id, value });
	};
</script>

<input
	{id}
	name={id}
	type="date"
	class={cls}
	value={sValue}
	{placeholder}
	{disabled}
	{readonly}
	{step}
	on:input={handleInput}
/>
