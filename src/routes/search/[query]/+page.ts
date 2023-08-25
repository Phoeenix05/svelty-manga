import type { Manga } from '$lib/mangadex'
import type { PageLoad } from './$types'

export const load: PageLoad = async ({ params, fetch }) => {
	const url = new URL('https://api.mangadex.org/manga')
	url.searchParams.append('title', params.query)
	url.searchParams.append('includes[]', 'cover_art')
	const response = await fetch(url, {
		mode: "no-cors"
	})
	const json: Manga = await response.json()

	return {
		query: params.query,
		results: json
	}
}
