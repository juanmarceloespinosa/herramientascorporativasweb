<script lang="ts">
	import { bulmaClassnames } from '$lib/svelma/utils/bulma.js';
	import type {
		BulmaHelper,
		BwColors,
		Colors,
		FieldAlign,
		FileItem,
		InputSize,
		ModalCheck
	} from '$lib/svelma/utils/bulma.types.js';
	import { createEventDispatcher } from 'svelte';
	import Icon from '../common/Icon.svelte';

	const dispatch = createEventDispatcher();

	export let bulma: BulmaHelper = {};
	export let id: string;
	export let value: string | undefined;
	export let icon: string | undefined = undefined;
	export let accept: string | undefined = undefined;
	export let color: Colors | BwColors | undefined = undefined;
	export let size: InputSize | undefined = undefined;
	export let check: ModalCheck<FileItem> | undefined = undefined;
	export let align: FieldAlign = 'left';
	export let hasName: boolean = false;
	export let isRight: boolean = false;
	export let isFullWidth: boolean = false;
	export let isBoxed: boolean = false;

	let elFile: HTMLInputElement;
	let file: File | undefined | null;

	$: cls = bulmaClassnames(bulma, [
		'file',
		{
			'has-name': file && hasName,
			'is-right': isRight,
			'is-full-width': isFullWidth,
			'is-boxed': isBoxed,
			[`is-${color}`]: color != undefined,
			[`is-${size}`]: size != undefined,
			[`is-${align}`]: align != 'left'
		}
	]);

	function onUpload() {
		const rd = new FileReader();
		rd.addEventListener('load', (e) => {
			const dataUrl = e.target?.result?.toString();
			if (!dataUrl) return;
			const fileItem: FileItem = {
				filename: file!.name,
				dataUrl,
				type: file!.type,
				size: file!.size
			};
			if (check != undefined && !check(fileItem)) return;
			dispatch('select', { fileItem, file });
		});
		rd.readAsDataURL(file!);
	}
	function onChange() {
		file = elFile.files?.length ? elFile.files.item(0) : null;
		if (!file) return;
		onUpload();
	}
</script>

<div class={cls}>
	<label class="file-label">
		<input
			class="file-input"
			type="file"
			{id}
			name={id}
			{accept}
			bind:value
			bind:this={elFile}
			on:change={onChange}
		/>
		<span class="file-cta">
			{#if icon}
				<Icon {icon} iconClass="file-icon" />
			{/if}
			<span class="file-label">
				<slot />
			</span>
		</span>
		{#if file && hasName}
			<span class="file-name">
				{file.name}
			</span>
		{/if}
	</label>
</div>
