<script lang="ts">
	export let id: string;
	export let active: boolean;
</script>

<div {id} class="navbar-menu" class:is-active={active}>
	<slot />
</div>
