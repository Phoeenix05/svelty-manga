<script lang="ts">
	import { goto } from '$app/navigation'

	let search_query = ''
	const search = () => goto(`/search/${search_query}`)
    $: console.log(search_query)
</script>

<input type="text" bind:value={search_query} />
<button on:click={search}>Search</button>
