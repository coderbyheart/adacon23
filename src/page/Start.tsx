import { ConfStats } from '@components/ConfStats'
import { Countdown } from '@components/Countdown'
import { Footer } from '@components/Footer'
import { Header } from '@components/Header'
import { HeaderNav } from '@components/HeaderNav'
import { Location } from '@components/Location'
import { Previously } from '@components/Previously'
import type { Page } from '@context/Pages'

export const Start = ({ page }: { page: Page }) => (
	<>
		<HeaderNav transparent={true} />
		<Header />
		<div id="about">
			<ConfStats />
		</div>
		<main class="bg-off-white">
			<div class="container py-4">
				<div class="row">
					<header class="col-lg-8 mx-auto">
						<h1 class="text-center pb-4 pt-4">{page.title}</h1>
					</header>
				</div>
				<div class="row">
					<div
						class="col-lg-8 mx-auto markdown"
						dangerouslySetInnerHTML={{
							__html: page.html,
						}}
					/>
				</div>
				<Countdown />
			</div>
			<Previously />
			<Location />
		</main>
		<Footer />
	</>
)
