<script lang="ts">
	import { bulmaClassnames } from '$lib/svelma/utils/bulma.js';
	import type { BulmaHelper, Colors, InputSize } from '$lib/svelma/utils/bulma.types.js';
	import type { Action } from 'svelte/action';
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	export let bulma: BulmaHelper = {};
	export let id: string;
	export let value: string | number;
	export let placeholder: string | undefined = undefined;
	export let type: 'text' | 'password' | 'email' | 'tel' | 'number' = 'text';
	export let color: Colors | undefined = undefined;
	export let size: InputSize | undefined = undefined;
	export let isRounded: boolean = false;
	export let isHovered: boolean = false;
	export let isFocused: boolean = false;
	export let isStatic: boolean = false;
	export let disabled: boolean = false;
	export let readonly: boolean | undefined = undefined;
	export let required: boolean | undefined = undefined;
	export let maxlength: number | undefined = undefined;
	export let min: number | undefined = undefined;
	export let max: number | undefined = undefined;
	export let useValue: Action<HTMLInputElement, string | number> = useNopValidation;

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
	$: valProps = {
		readonly: readonly || undefined,
		required: required || undefined,
		maxlength: maxlength || undefined,
		min,
		max,
	};

	const handleInput = (e: Event) => {
		const target = e.target as HTMLInputElement;
		value = type === 'number' ? +target.value : target.value;
		dispatch('value-changed', { name: id, value });
	};

	function useNopValidation(node: HTMLInputElement, param: string | number) {}
</script>

<input
	{id}
	name={id}
	{type}
	class={cls}
	{value}
	{placeholder}
	{disabled}
	{...valProps}
	on:input={handleInput}
	on:keyup
	use:useValue={value}
/>
