import { Menu, X } from 'lucide-preact'
import { useState } from 'preact/hooks'
import { styled } from 'styled-components'

const FixedNav = styled.div`
	background-color: var(--color-dark-bg);
	ul.nav {
		font-size: 14px;
		font-family: var(--headline-font);
		font-weight: var(--headline-font-weight);
		a {
			color: white;
		}
	}
	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;
	z-index: 1001;
`

const MobileNavigation = styled.nav`
	padding-top: 100px;
	padding-bottom: 50px;
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	z-index: 1000;
	background-color: var(--color-dark-bg);
	a {
		color: white;
	}
`

const navItems: [link: string, title: string, button?: boolean][] = [
	['#about', 'About'],
	['#speakers', 'Speakers'],
	['#schedule', 'Schedule'],
	['#venue', 'Venue'],
	['#sponsors', 'Sponsors'],
	['/tickets', 'Tickets', true],
]

export const HeaderNav = () => {
	const [menuVisible, showMenu] = useState<boolean>(false)
	return (
		<>
			<FixedNav>
				<div class="container">
					<header class="d-flex py-3 text-white justify-content-between">
						<a
							href="/"
							class="d-flex align-items-center text-decoration-none fw-bold"
						>
							<img
								class="bi me-2"
								width="40"
								height="32"
								src="./static/ada.svg"
								alt="Ada Con Norway"
							/>
							<span class="fs-4">#adacon23</span>
						</a>

						<ul class="nav nav-pills d-none d-lg-flex">
							{navItems.map(([link, title, button]) => (
								<li class="nav-item">
									<a
										class={button === true ? 'btn btn-secondary' : 'nav-link'}
										aria-current="page"
										href={link}
									>
										{title}
									</a>
								</li>
							))}
						</ul>

						<button
							type="button"
							class="btn btn-link text-white d-lg-none mr-4"
							onClick={() => {
								showMenu((s) => !s)
							}}
							title="Toggle menu"
						>
							{!menuVisible && <Menu />}
							{menuVisible && <X />}
						</button>
					</header>
				</div>
			</FixedNav>
			{menuVisible && (
				<div class="d-lg-none">
					<MobileNavigation>
						<div class="container">
							<ul class="nav flex-column">
								{navItems.map(([link, title, button]) => (
									<li class="nav-item">
										<a
											class={
												button === true
													? 'btn btn-secondary ms-3 mt-2 mb-4'
													: 'nav-link'
											}
											aria-current="page"
											href={link}
											onClick={() => {
												showMenu(false)
											}}
										>
											{title}
										</a>
									</li>
								))}
							</ul>
						</div>
					</MobileNavigation>
				</div>
			)}
		</>
	)
}
