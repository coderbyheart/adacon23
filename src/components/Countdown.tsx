import { useEffect, useState } from 'preact/hooks'
import { Con } from '../con'
import { Pluralize } from './Pluralize'

const diff = (target_date: Date) => {
	// find the amount of "seconds" between now and target
	const current_date = new Date().getTime()
	let seconds_left = (target_date.getTime() - current_date) / 1000

	// do some time calculations
	const days = Math.floor(seconds_left / 86400)
	seconds_left = seconds_left % 86400

	const hours = Math.floor(seconds_left / 3600)
	seconds_left = seconds_left % 3600

	const minutes = Math.floor(seconds_left / 60)
	const seconds = Math.floor(seconds_left % 60)
	return {
		days,
		hours,
		minutes,
		seconds,
	}
}

export const Countdown = () => {
	const [cd, setCd] = useState<{
		days: number
		hours: number
		minutes: number
		seconds: number
	}>(diff(Con.date))

	useEffect(() => {
		const i = setInterval(() => {
			setCd(diff(Con.date))
		}, 1000)
		return () => {
			clearInterval(i)
		}
	}, [])
	return (
		<time dateTime={Con.date.toISOString()}>
			{cd.days}{' '}
			<Pluralize
				value={cd.days}
				singular={() => <>day</>}
				plural={() => <>days</>}
			/>{' '}
			{cd.hours}{' '}
			<Pluralize
				value={cd.hours}
				singular={() => <>hour</>}
				plural={() => <>hours</>}
			/>{' '}
			{cd.minutes}{' '}
			<Pluralize
				value={cd.minutes}
				singular={() => <>mi&shy;nute</>}
				plural={() => <>mi&shy;nutes</>}
			/>
			{' and '}
			{cd.seconds}{' '}
			<Pluralize
				value={cd.seconds}
				singular={() => <>se&shy;cond</>}
				plural={() => <>se&shy;conds</>}
			/>
			.
		</time>
	)
}
