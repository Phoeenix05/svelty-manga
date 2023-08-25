<script lang="ts">
	import type { PageData } from './$types'
	export let data: PageData
</script>

<p>{data.query}</p>
{#each data.results.data as manga}
	<p>{manga.attributes.title.en}</p>
	{#each manga.relationships as relationship}
		{#if relationship.type == 'cover_art'}
			<img src={`https://mangadex.org/covers/${manga.id}/${relationship.attributes?.fileName}`} alt="" width="256">
		{/if}
	{/each}
{/each}
