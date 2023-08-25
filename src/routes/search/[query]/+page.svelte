<script lang="ts">
	import type { PageData } from './$types'
	export let data: PageData
</script>

<p>{data.query}</p>
<pre>{JSON.stringify(data.results, null, 2)}</pre>
