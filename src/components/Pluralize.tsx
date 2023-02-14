import type { VNode } from 'preact'

export const Pluralize = ({
	singular,
	plural,
	value,
}: {
	singular: (value: number) => VNode<any>
	plural: (value: number) => VNode<any>
	value: number
}): VNode<any> => {
	if (value !== 1) return plural(value)
	return singular(value)
}
