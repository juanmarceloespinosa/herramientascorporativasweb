<script lang="ts">
	import LayoutTitle from '$lib/components/layouts/LayoutTitle.svelte';
	import Columns from '$lib/svelma/components/common/Columns.svelte';
</script>

<LayoutTitle title="Testing & QA">
	<Columns let:Column>
		<Column size="6" offset="3">
			<div class="page">
				<figure class="image is-2by1">
					<img src="/images/bg3.png" alt="Testing & QA" />
				</figure>
				<p>
					Software Quality Assurance, Software Testing, Test Automation, Mobile Software Testing.
				</p>
			</div>
		</Column>
	</Columns>
</LayoutTitle>
