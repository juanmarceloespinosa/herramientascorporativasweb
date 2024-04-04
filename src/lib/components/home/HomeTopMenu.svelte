<script lang="ts">
	import { goto } from '$app/navigation';
	import {
		PUBLIC_HOME_EMAIL,
		PUBLIC_HOME_FACEBOOK,
		PUBLIC_HOME_TELEPHONE
	} from '$env/static/public';
	import Icon from '$lib/svelma/components/common/Icon.svelte';
	import IconText from '$lib/svelma/components/common/IconText.svelte';
	import { icons } from '$lib/svelma/components/common/icons';
	import { appIcons, contactTypeIcons } from '$lib/utils/appIcons';
	import { slide } from 'svelte/transition';

	let isOpen = false;

	function onOpen() {
		isOpen = !isOpen;
	}
	function onClick() {
		isOpen = false;
	}
</script>

<div id="top-menu">
	<div class="is-hidden-mobile">
		<a href="tel:{PUBLIC_HOME_TELEPHONE}" target="_blank" on:click={onClick}>
			<IconText icon={contactTypeIcons.phone} text={PUBLIC_HOME_TELEPHONE} />
		</a>
		<a href="mailto:{PUBLIC_HOME_EMAIL}" target="_blank" on:click={onClick}>
			<IconText icon={contactTypeIcons.email} text={PUBLIC_HOME_EMAIL} />
		</a>
		<div class="spacer">&nbsp;</div>
		<a href={PUBLIC_HOME_FACEBOOK} target="_blank" on:click={onClick}>
			<Icon icon={appIcons.facebook} />
		</a>
	</div>
	<div class="is-hidden-tablet">
		<button class="button" on:click={onOpen}>
			<Icon icon={isOpen ? icons.chevronUp : icons.chevronDown} />
		</button>
		{#if isOpen}
			<div class="mobile-links" transition:slide>
				<a href="tel:{PUBLIC_HOME_TELEPHONE}">
					<IconText icon={contactTypeIcons.phone} text={PUBLIC_HOME_TELEPHONE} />
				</a>
				<a href="mailto:{PUBLIC_HOME_EMAIL}">
					<IconText icon={contactTypeIcons.email} text={PUBLIC_HOME_EMAIL} />
				</a>
				<a href={PUBLIC_HOME_FACEBOOK} target="_blank">
					<Icon icon={appIcons.facebook} />
				</a>
			</div>
		{/if}
	</div>
</div>

<style lang="less">
	#top-menu {
		font-family: 'Poppins', sans-serif;
		color: #555;
		box-sizing: inherit;
		font-weight: bold;
		background-color: #425c8c;

		.is-hidden-mobile {
			display: flex;
			flex-direction: row;
			align-items: center;
			gap: 1rem;
			padding: 0.5rem;
			padding-left: 5rem;
			padding-right: 5rem;
		}
		.is-hidden-tablet {
			display: flex;
			flex-direction: column;
			align-items: stretch;
			gap: 1rem;
			width: 100%;

			> button {
				width: 100%;
				background-color: transparent;
				color: white !important;
				border: none;
			}

			.mobile-links {
				display: flex;
				flex-direction: column;
				align-items: stretch;
				gap: 1rem;

				a {
					text-align: center;
					color: white !important;
				}
			}
		}

		> div > a {
			color: white !important;
		}
		.spacer {
			flex: 1;
		}
	}
</style>
