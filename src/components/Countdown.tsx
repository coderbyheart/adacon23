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
		<aside>
			<div class="row mt-4 mb-4">
				<h2 class="fs-md-4 text-center">
					Ada Con {Con.date.toLocaleDateString(undefined, { year: 'numeric' })}{' '}
					starts in:
				</h2>
			</div>
			<div class="row mt-4 mb-4">
				<div class="offset-md-2 col-md-2 col-3 fs-md-4 text-center">
					<strong class="fs-4">{cd.days}</strong>
					<br />
					<Pluralize
						value={cd.days}
						singular={() => <>day</>}
						plural={() => <>days</>}
					/>
				</div>
				<div class="col-md-2 col-3  fs-md-4 text-center">
					<strong class="fs-4">{cd.hours}</strong>
					<br />
					<Pluralize
						value={cd.hours}
						singular={() => <>hour</>}
						plural={() => <>hours</>}
					/>
				</div>
				<div class="col-md-2 col-3  fs-md-4 text-center">
					<strong class="fs-4">{cd.minutes}</strong>
					<br />
					<Pluralize
						value={cd.minutes}
						singular={() => <>mi&shy;nute</>}
						plural={() => <>mi&shy;nutes</>}
					/>
				</div>
				<div class="col-md-2 col-3  fs-md-4 text-center">
					<strong class="fs-4">{cd.seconds}</strong>
					<br />
					<Pluralize
						value={cd.seconds}
						singular={() => <>se&shy;cond</>}
						plural={() => <>se&shy;conds</>}
					/>
				</div>
			</div>
			<div class="row mt-4 mb-4">
				<div class="d-flex justify-content-center">
					<a href="./tickets" class="btn btn-primary font-headline">
						Get Your Tickets Today
					</a>
				</div>
			</div>
		</aside>
	)
}
