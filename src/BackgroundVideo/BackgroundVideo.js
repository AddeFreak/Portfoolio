import React from 'react';
import Video from '../assets/Video.mp4';
import Pic from '../assets/pic.jpg';
import styles from './backgroundVideo.module.css';
import { fadeInRight } from 'react-animations';
import styled, { keyframes } from 'styled-components';

const FadeInRight = styled.div`
	animation: 2s ${keyframes`${fadeInRight}`};
`;

const BackgroundVideo = () => {
	return (
		<div className={'Container'}>
			<video
				autoPlay='autoplay'
				loop='loop'
				preload='auto'
				muted
				className={'Video'}>
				<source src={Video} type='video/mp4' />
				Your browser does not support the video tag.
			</video>

			<div className={'Content'}>
				<FadeInRight>
					<div className={'SubContent'}>
						<img src={Pic} alt='profile' />
						<ul className={'SubContent'}>
							<li>Front-end Developer</li>
							<li>BJJ practitioner</li>
							<li>Nature fanatic</li>
						</ul>
					</div>{' '}
				</FadeInRight>
			</div>
		</div>
	);
};

export default BackgroundVideo;
