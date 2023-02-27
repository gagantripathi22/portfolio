import React from 'react'
import './App.css'
import DiscordCard from './components/discordCard'
import ProjectsArea from './components/projectsArea'

function Home() {
  return (
    <div className='mainContainer'>
      <div className='centerContent'>
        <div className='scrollableArea'>
          <ProjectsArea/>
        </div>
        <div className='bioArea'>
          <DiscordCard/>
        </div>
      </div>
    </div>
  )
}

export default Home