import { ConfStats } from '@components/ConfStats'
import { Countdown } from '@components/Countdown'
import { Footer } from '@components/Footer'
import { Header } from '@components/Header'
import { HeaderNav } from '@components/HeaderNav'
import { Previously } from '@components/Previously'
import { Venue } from '@components/Venue'
import type { Page } from '@context/Pages'

export const Start = ({ page }: { page: Page }) => (
	<>
		<HeaderNav />
		<Header />
		<ConfStats />
		<main class="bg-off-white">
			<div class="container py-4">
				<div class="row">
					<header class="col-lg-8 mx-auto">
						<h1 class="text-center pb-4 pt-4">{page.title}</h1>
					</header>
				</div>
				<div class="row">
					<div
						class="col-lg-8 mx-auto"
						dangerouslySetInnerHTML={{
							__html: page.html,
						}}
					/>
				</div>
				<Countdown />
			</div>
			<Previously />
			<Venue />
		</main>
		<Footer />
	</>
)
