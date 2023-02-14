import { styled } from 'styled-components'
import { Con } from '../con'
import { pluralize } from './pluralize'

const StatsWrapper = styled.aside`
	width: 100%;
	background-color: var(--color-highlight);
`

export const ConfStats = () => (
	<StatsWrapper>
		<div class="container">
			<div class="row text-center text-white py-4">
				<div class="col-3">
					<strong class="fs-1 fw-semibold font-headline">
						{Con.statistics.attendees}
					</strong>
					<br />
					<span class="fs-md-4 opacity-65 fw-semibold">Attendees</span>
				</div>
				<div class="col-3">
					<strong class="fs-1 fw-semibold font-headline">
						{Con.statistics.days}
					</strong>
					<br />
					<span class="fs-md-4 opacity-65 fw-semibold">
						{pluralize(Con.statistics.days, 'Day', 'Days')}
					</span>
				</div>
				<div class="col-3">
					<strong class="fs-1 fw-semibold font-headline">
						{Con.statistics.talks}
					</strong>
					<br />
					<span class="fs-md-4 opacity-65 fw-semibold">Talks</span>
				</div>
				<div class="col-3">
					<strong class="fs-1 fw-semibold font-headline">
						{Con.statistics.workshops}
					</strong>
					<br />
					<span class="fs-md-4 opacity-65 fw-semibold">
						{pluralize(
							Con.statistics.workshops,
							`Work${'\u200B'}shop`,
							`Work${'\u200B'}shops`,
						)}
					</span>
				</div>
			</div>
		</div>
	</StatsWrapper>
)
