import type { PageLoad } from './$types'

export const load: PageLoad = async ({ params, fetch }) => {
	const url = new URL('https://api.mangadex.org/manga')
	url.searchParams.append('title', params.query)
	url.searchParams.append('includes[]', 'cover_art')
	const response = await fetch(url)

	return {
		query: params.query,
		results: response.json()
	}
}
