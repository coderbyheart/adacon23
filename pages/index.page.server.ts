import type { Page } from '@context/Pages'
import { loadMarkdownContent } from './loadMarkdownContent'

export type IndexPageProps = { pages: Page[]; page: Page }

export const onBeforeRender = async (): Promise<{
	pageContext: { pageProps: IndexPageProps }
}> => {
	const pages = await loadMarkdownContent()
	const index = pages.find(({ slug }) => slug === 'index')
	if (index === undefined)
		throw new Error(`Failed to find content for "index"!`)
	return {
		pageContext: {
			pageProps: {
				pages,
				page: index,
			},
		},
	}
}

export const prerender = (): string[] => ['/']
