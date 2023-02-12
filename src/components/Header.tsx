import { Calendar, MapPin } from 'lucide-preact'
import { styled } from 'styled-components'
import { Con } from '../con'
import { pluralize } from './pluralize'

const TitleWrapper = styled.header`
	width: 100%;
	background-color: var(--color-dark-bg);
`
const StatsWrapper = styled.header`
	width: 100%;
	background-color: var(--color-highlight);
`

export const Header = () => (
	<>
		<TitleWrapper>
			<div class="container">
				<div class="text-secondary py-5">
					<div class="py-5">
						<h1 class="text-white">Ada Con 2023</h1>
						<p class="fs-4 font-headline text-white">
							<Calendar />{' '}
							{Con.date.toLocaleDateString(undefined, {
								weekday: 'short',
								day: 'numeric',
								month: 'long',
								year: 'numeric',
							})}{' '}
							<MapPin /> Oslo, Norway
						</p>
						<div class="col-lg-6">
							<p class="fs-4 text-white fw-semibold">
								Ada Lovelace Day Conference is a yearly conference which
								celebrates Norwegian women and non-binary people in Tech.
							</p>
							<p>
								<a
									href="/tickets"
									class="btn btn-primary fs-5 fw-bold font-headline "
								>
									Get Tickets
								</a>
							</p>
						</div>
					</div>
				</div>
			</div>
		</TitleWrapper>
		<StatsWrapper>
			<div class="container">
				<div class="row text-center text-white py-4">
					<div class="col-3">
						<strong class="fs-1 fw-semibold font-headline">
							{Con.statistics.attendees}
						</strong>
						<br />
						<span class="fs-4 opacity-65 fw-semibold">Attendees</span>
					</div>
					<div class="col-3">
						<strong class="fs-1 fw-semibold font-headline">
							{Con.statistics.days}
						</strong>
						<br />
						<span class="fs-4 opacity-65 fw-semibold">
							{pluralize(Con.statistics.days, 'Day', 'Days')}
						</span>
					</div>
					<div class="col-3">
						<strong class="fs-1 fw-semibold font-headline">
							{Con.statistics.talks}
						</strong>
						<br />
						<span class="fs-4 opacity-65 fw-semibold">Talks</span>
					</div>
					<div class="col-3">
						<strong class="fs-1 fw-semibold font-headline">
							{Con.statistics.workshops}
						</strong>
						<br />
						<span class="fs-4 opacity-65 fw-semibold">
							{pluralize(Con.statistics.workshops, 'Workshop', 'Workshops')}
						</span>
					</div>
				</div>
			</div>
		</StatsWrapper>
	</>
)
