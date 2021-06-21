import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledSideDrawer = styled.div`
	.side-drawer {
		height: 100%;
		background: white;
		box-shadow: 0px 3px 7px rgba(0, 0, 0, 0.5);
		position: fixed;
		top: 0;
		right: 0px;
		width: 70%;
		max-width: 400px;
		z-index: 200;
		transform: translateX(+100%);
		transition: transform 0.3s ease-out;
	}
	.side-drawer.open {
		transform: translateX(0);
	}
	.nav-links {
		height: 100%;
		list-style: none;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	.side-drawer li:hover,
	.side-drawer li :active {
		color: green;
	}
	.side-drawer li {
		margin: 0.5rem 0;
	}
	.link {
		text-decoration: none;
		font-size: 1.2rem;
	}
	@media (min-width: 769) {
		.side-drawer {
			display: none;
		}
	}
`;

const sideDrawer = (props) => {
	let drawerClasses = 'side-drawer';
	if (props.show) {
		drawerClasses = 'side-drawer open';
	}
	return (
		<StyledSideDrawer>
			<nav className={drawerClasses}>
				<ul className='nav-links'>
					<li>
						<Link to='/' className='link'>
							Home
						</Link>
					</li>
					<li>
						<Link to='/about' className='link'>
							About
						</Link>
					</li>

					<li>
						<Link to='/contact' className='link'>
							Contact
						</Link>
					</li>
				</ul>
			</nav>
		</StyledSideDrawer>
	);
};

export default sideDrawer;
