export type Manga = {
	result: string
	response: string
	data: Datum[]
	limit: number
	offset: number
	total: number
}

export type Datum = {
	id: string
	type: RelationshipType
	attributes: DatumAttributes
	relationships: Relationship[]
}

export type DatumAttributes = {
	title: Title
	altTitles: AltTitle[]
	description: PurpleDescription
	isLocked: boolean
	links: Links | null
	originalLanguage: OriginalLanguage
	lastVolume: null | string
	lastChapter: null | string
	publicationDemographic: null | string
	status: Status
	year: number | null
	contentRating: ContentRating
	tags: Tag[]
	state: State
	chapterNumbersResetOnNewVolume: boolean
	createdAt: Date
	updatedAt: Date
	version: number
	availableTranslatedLanguages: string[]
	latestUploadedChapter: string
}

export type AltTitle = {
	ja?: string
	'ja-ro'?: string
	en?: string
	he?: string
	'es-la'?: string
}

export enum ContentRating {
	Safe = 'safe',
	Suggestive = 'suggestive'
}

export type PurpleDescription = {
	en: string
	'pt-br'?: string
	id?: string
}

export type Links = {
	al?: string
	ap?: string
	mu: string
	mal?: string
	raw?: string
	bw?: string
	kt?: string
	amz?: string
	engtl?: string
	ebj?: string
}

export enum OriginalLanguage {
	Ja = 'ja'
}

export enum State {
	Published = 'published'
}

export enum Status {
	Completed = 'completed',
	Ongoing = 'ongoing'
}

export type Tag = {
	id: string
	type: TagType
	attributes: TagAttributes
	relationships: any[]
}

export type TagAttributes = {
	name: Title
	description: FluffyDescription
	group: Group
	version: number
}

export type FluffyDescription = {}

export enum Group {
	Format = 'format',
	Genre = 'genre',
	Theme = 'theme'
}

export type Title = {
	en: string
}

export enum TagType {
	Tag = 'tag'
}

export type Relationship = {
	id: string
	type: RelationshipType
	attributes?: RelationshipAttributes
	related?: string
}

export type RelationshipAttributes = {
	description: string
	volume: null | string
	fileName: string
	locale: OriginalLanguage
	createdAt: Date
	updatedAt: Date
	version: number
}

export enum RelationshipType {
	Artist = 'artist',
	Author = 'author',
	CoverArt = 'cover_art',
	Creator = 'creator',
	Manga = 'manga'
}
