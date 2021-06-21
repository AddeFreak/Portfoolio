import React from 'react';
import { Content } from '../Content/Content';
import Footer from '../Navigation/Footer';
import Pic2 from '../assets/pic2.jpg';
import styled from 'styled-components';

const StylePic = styled.img`
	width: 200px;
	height: 200px;
	border-radius: 50%;
	float: left;
	margin: 15px auto;
	border: #0e0d0d 1px solid;
	@media screen and (max-width: 425px) {
		overflow: scroll;
	}
`;
const About = () => {
	return (
		<React.Fragment>
			<Content>
				<p>
					Well, I guess I like challenges. I voluntarily expose myself to them
					on a regular basis practicing a martial art called Brasilian
					Jiu-Jitsu. The core principle is that you can neutralise a bigger and
					stronger opponent using pure technique. It’s a form a problem solving
					and that is also what drives my other interest: front-end developing.{' '}
				</p>
				<p>
					I am currently studying to become a programmer at{' '}
					<a href='https://kyh.se/'>KYH</a> and it is as fun as it is
					complicated, and that is exactly how I like it! My latest project has
					been learning ReactJS and I learned to build a "Burger Builder" from
					scratch as you can see{' '}
					<a href='https://react-my-burger-9170e.web.app/'>here</a>.{' '}
				</p>
				<p>To balance it all I spend a lot of time in nature. </p>
				<StylePic src={Pic2} />
			</Content>

			<Footer />
		</React.Fragment>
	);
};

export default About;
