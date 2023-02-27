import React, { useState } from 'react'
import '../css/discordCard.css'

function DiscordCard() {
	return (
    <div className='discordCard'>
			<img src={'https://firebasestorage.googleapis.com/v0/b/gagan1337-a73b1.appspot.com/o/cover.jpeg?alt=media&token=be64d02e-46c6-4451-b4d5-35b42e83885e'} className='discordCardHeader'>
			</img>
			<div className='discordCardProfileArea'>
				<div className='discordCardProfileImage'>
					<img 
						className='profileImage'
						src="https://firebasestorage.googleapis.com/v0/b/gagan1337-a73b1.appspot.com/o/display_picture_rsz.jpg?alt=media&token=0834f80d-decf-48a1-b878-4ff7a4978dfd"
					/>
				</div>
			</div>
			<div className='discordCardDetailArea'>
				<h1 className='bannerName'>gagan<span className='bannerNameTag'>#4940</span></h1>
				<div className='bannerDivider'></div>
				<h5 className='bannerSectionTitle'>About Me</h5>
				<p className='bannerAbout'>Web Developer<br></br>React | JavaScript | React Native | Flutter | Node</p>
				<h5 className='bannerSectionTitle'>Discord Member Since</h5>
				<p className='bannerAbout'>June 21, 2018</p>
				<h5 className='bannerSectionTitle'>Note</h5>
				<p className='bannerAbout'>This website is made with React and Firebase</p>
				<h5 className='bannerSectionTitle'>Connections</h5>
				<div className='connectionsBtn'>
					<div className='connectionBtnLeft'>
						<svg xmlns="http://www.w3.org/2000/svg" className='githubSVG' width="20" height="20" viewBox="0 0 24 24">
							<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
						</svg>
						<h5 className='githubHandle'>Gagan1337</h5>
						<svg aria-hidden="false" role="img" width="16" height="16" viewBox="0 0 16 15.2" className='discordVerifiedSVG'>
							<path fill="hsl(217, calc(var(--saturation-factor, 1) * 7.6%), 33.5%)" fill-rule="evenodd" d="m16 7.6c0 .79-1.28 1.38-1.52 2.09s.44 2 0 2.59-1.84.35-2.46.8-.79 1.84-1.54 2.09-1.67-.8-2.47-.8-1.75 1-2.47.8-.92-1.64-1.54-2.09-2-.18-2.46-.8.23-1.84 0-2.59-1.54-1.3-1.54-2.09 1.28-1.38 1.52-2.09-.44-2 0-2.59 1.85-.35 2.48-.8.78-1.84 1.53-2.12 1.67.83 2.47.83 1.75-1 2.47-.8.91 1.64 1.53 2.09 2 .18 2.46.8-.23 1.84 0 2.59 1.54 1.3 1.54 2.09z"></path>
							<path d="M7.4,11.17,4,8.62,5,7.26l2,1.53L10.64,4l1.36,1Z" fill="white"></path>
						</svg>
					</div>
					<div>
						<a href="https://github.com/gagantripathi22" rel="noopener noreferrer" target="_blank">
							<svg className='githubRedirect' aria-hidden="true" role="img" width="20" height="20" viewBox="0 0 24 24">
								<polygon fill="white" fill-rule="nonzero" points="13 20 11 20 11 8 5.5 13.5 4.08 12.08 12 4.16 19.92 12.08 18.5 13.5 13 8"></polygon>
							</svg>
						</a>
					</div>
				</div>
			</div>
		</div>
  )
}

export default DiscordCard