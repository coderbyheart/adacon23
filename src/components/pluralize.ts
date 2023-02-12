export const pluralize = (
	v: number,
	singular: string,
	plural: string,
): string =>
	v !== 1
		? plural.replace('%d', v.toString())
		: singular.replace('%d', v.toString())
