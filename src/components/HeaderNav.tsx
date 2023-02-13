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
	width: 100%;
	z-index: 1000;
`

export const HeaderNav = () => (
	<FixedNav>
		<div class="container">
			<header class="d-flex py-3 text-white">
				<a
					href="/"
					class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none fw-bold"
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

				<ul class="nav nav-pills">
					<li class="nav-item">
						<a href="#about" class="nav-link" aria-current="page">
							About
						</a>
					</li>
					<li class="nav-item">
						<a href="#speakers" class="nav-link">
							Speakers
						</a>
					</li>
					<li class="nav-item">
						<a href="#schedule" class="nav-link">
							Schedule
						</a>
					</li>
					<li class="nav-item">
						<a href="#venue" class="nav-link">
							Venue
						</a>
					</li>
					<li class="nav-item">
						<a href="#sponsors" class="nav-link">
							Sponsors
						</a>
					</li>
					<li class="nav-item">
						<a class="btn btn-secondary" href="/tickets">
							Tickets
						</a>
					</li>
				</ul>
			</header>
		</div>
	</FixedNav>
)
