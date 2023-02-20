import { Con } from '../con'
import { Pluralize } from './Pluralize'

export const ConfStats = () => (
	<div class="bg-highlight">
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
						<Pluralize
							value={Con.statistics.days}
							singular={() => <>Day</>}
							plural={() => <>Days</>}
						/>
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
						<Pluralize
							value={Con.statistics.workshops}
							singular={() => <>Work&shy;shop</>}
							plural={() => <>Work&shy;shops</>}
						/>
					</span>
				</div>
			</div>
		</div>
	</div>
)
