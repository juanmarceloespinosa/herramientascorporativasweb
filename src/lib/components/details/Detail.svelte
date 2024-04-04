<script lang="ts">
	export let label: string;
</script>

<div class="detail">
	<div class="label">{label}</div>
	<div class="value">
		<slot />
	</div>
</div>

<style lang="less">
	.detail {
		display: flex;
		flex-direction: column;
		align-items: stretch;
		.label {
			font-weight: bold;
		}
		.value {
			min-height: 24px;
		}
	}
</style>
