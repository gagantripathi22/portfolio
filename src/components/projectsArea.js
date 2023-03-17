import React, { useState, useEffect, useCallback, useRef } from 'react'
import '../css/projectsArea.css'
import fetchProjects from '../services/fetchProjects'

const ProjectsArea = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);

  const [projects, setProjects] = useState([
    {
      data: {
        name: 'Loading',
        tech: 'Loading',
        github: 'Loading',
        website: 'Loading',
      }
    }
  ])

  useEffect(() => {
    fetchProjects(setProjects);
  }, [])

  const cacheImages = async (srcArray) => {
    const promises = await srcArray.map((src) => {
      console.log('once')
      return new Promise (function(resolve, reject) {
        const img = new Image();
        img.src = src.data.img;
        img.onload = resolve();
        img.onerror = reject();
      });
    });
    await Promise.all(promises);
    setIsLoading(false);
  };

  useEffect(() => {
    cacheImages(projects);
  }, [projects])
  
  const [currentProject, setCurrentProject] = useState(0);
  const [currentProjectAnimation, setCurrentProjectAnimation] = useState('projectArea projectAreaMain');

  const nextProject = () => {
    if(showDownArrow && !isAnimating) {
      setIsAnimating(true);
      setCurrentProjectAnimation('projectArea projectAreaTileUp')
      setTimeout(() => {
        setCurrentProjectAnimation('projectArea projectAreaNoAnimation')
        setIsAnimating(false);
      }, 2000)
      setTimeout(() => {setCurrentProject(currentProject+1)}, 800)
    }
  }

  const prevProject = () => {
    if(showUpArrow && !isAnimating) {
      setIsAnimating(true);
      setCurrentProjectAnimation('projectArea projectAreaTileDown')
      setTimeout(() => {
        setCurrentProjectAnimation('projectArea projectAreaNoAnimation')
        setIsAnimating(false);
      }, 2000)
      setTimeout(() => {setCurrentProject(currentProject-1)}, 800)
    }
  }

  const [showUpArrow, setShowUpArrow] = useState(false);
  const [showDownArrow, setShowDownArrow] = useState(true);

  useEffect(() => {
    if(currentProject == 0) {
      setShowDownArrow(true);
      setShowUpArrow(false);
    }
    else if(currentProject == projects.length - 1) {
      setShowDownArrow(false);
      setShowUpArrow(true);
    } else {
      setShowDownArrow(true);
      setShowUpArrow(true);
    }
  }, [currentProject])

  const projectItemRef = useRef();

  const headingRef = useRef();

  const [prox, setProX] = useState();
  const [proy, setProY] = useState();

  const getProjectAreaPosition = () => {
      const x = headingRef.current.offsetLeft;
      setProX(x);

      let y = headingRef.current.offsetTop;
      y += headingRef.current.height;
      setProY(y);
  }

  useEffect(() => {
    getProjectAreaPosition();
  })

  return (
    <div className='projectAreaContainer' ref={headingRef}>
      <div className='heading' style={{left: window.innerWidth < 992 ? prox - 75 : prox - 70, top: proy + 520}}>Projects</div>
      <div style={{height: 35}}>
        <div className='navBtn' style={{opacity: showUpArrow ? '1' : '0', cursor: isAnimating ? 'wait' : 'default'}} onClick={() => {prevProject();}}>
          <svg className='navBtnIcon navBtnIconRotate' height="28" fill='white' viewBox="0 0 50 50" width="50" xmlns="http://www.w3.org/2000/svg"><path d="M14.83 16.42l9.17 9.17 9.17-9.17 2.83 2.83-12 12-12-12z"/>
            <path d="M0-.75h48v48h-48z" fill="none"/>
          </svg>
        </div>
      </div>
      <div className={currentProjectAnimation} ref={projectItemRef}>
        <div className='projectImageArea'>
          <img className='projectImage' src={projects[currentProject].data.img}/>
          <div className='spinContainer'>
            <div className="spin"></div>
          </div>
        </div>
        <div className='projectDetailsArea'>
          <div className='projectDetailsAreaLeft'>
            <h1 className='projectName'>{projects[currentProject].data.name}</h1>
            <p className='projectTechUsed'>Tech Stack: <span className='projectTechUsedList'>{projects[currentProject].data.tech}</span></p>
          </div>
          <div className='projectDetailsAreaRight'>
            { projects[currentProject].data.github ?
              <a href={projects[currentProject].data.github} target="_blank" className='projectDetailGithubBtn'>
                <a rel="noopener noreferrer" target="_blank">
                  <svg xmlns="http://www.w3.org/2000/svg" style={{marginLeft: 2}} className='githubSVG' width="22" height="22" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                <h5 className='projectDetailGithubBtnText'>Github</h5>
              </a>
              :null
            }
            { projects[currentProject].data.download ?
              <a href={projects[currentProject].data.download} target="_blank" className='projectDetailGithubBtn'>
                <a rel="noopener noreferrer" target="_blank">
                  <svg viewBox="0 0 32 32" width="25" height="25" fill='white' xmlns="http://www.w3.org/2000/svg"><title/><g data-name="world www web website" id="world_www_web_website"><path d="M16,3A13,13,0,1,0,29,16,13,13,0,0,0,16,3Zm6.69,16.91A24.39,24.39,0,0,0,23,16a23.72,23.72,0,0,0-.32-3.91C25.37,13.08,27,14.58,27,16S25.31,19,22.69,19.91ZM5,16c0-1.47,1.69-2.95,4.31-3.91A24.39,24.39,0,0,0,9,16a23.72,23.72,0,0,0,.32,3.91C6.63,18.92,5,17.42,5,16ZM11.5,6A14.2,14.2,0,0,0,9.82,9.82,14.19,14.19,0,0,0,6,11.49,11,11,0,0,1,11.5,6ZM6,20.5a14.63,14.63,0,0,0,4.32,1.8l.09,0A23.4,23.4,0,0,0,16,23c.6,0,1.19,0,1.76-.06a1,1,0,1,0-.14-2Q16.83,21,16,21a20.92,20.92,0,0,1-4.52-.47A21.33,21.33,0,0,1,11,16c0-6.48,2.64-11,5-11,1,0,2,.76,2.89,2.14a1,1,0,0,0,.84.47,1,1,0,0,0,.54-.15,1,1,0,0,0,.31-1.38.86.86,0,0,0-.07-.1A11,11,0,0,1,26,11.5a14.94,14.94,0,0,0-4.48-1.84l0,0A23.21,23.21,0,0,0,16,9c-.6,0-1.19,0-1.76.06a1,1,0,1,0,.14,2Q15.18,11,16,11a20.92,20.92,0,0,1,4.52.47A21.33,21.33,0,0,1,21,16c0,6.48-2.64,11-5,11-1,0-2-.76-2.89-2.14a1,1,0,1,0-1.69,1.06.86.86,0,0,0,.07.1A11,11,0,0,1,6,20.5ZM20.5,26a14.2,14.2,0,0,0,1.68-3.85A14.19,14.19,0,0,0,26,20.51,11,11,0,0,1,20.5,26Z"/></g></svg>
                </a>
                <h5 className='projectDetailGithubBtnText'>Download</h5>
              </a>
              :null
            }
            { projects[currentProject].data.website ?
              <a href={projects[currentProject].data.website} target="_blank" className='projectDetailGithubBtn'>
                <a rel="noopener noreferrer" target="_blank">
                  <svg viewBox="0 0 32 32" width="25" height="25" fill='white' xmlns="http://www.w3.org/2000/svg"><title/><g data-name="world www web website" id="world_www_web_website"><path d="M16,3A13,13,0,1,0,29,16,13,13,0,0,0,16,3Zm6.69,16.91A24.39,24.39,0,0,0,23,16a23.72,23.72,0,0,0-.32-3.91C25.37,13.08,27,14.58,27,16S25.31,19,22.69,19.91ZM5,16c0-1.47,1.69-2.95,4.31-3.91A24.39,24.39,0,0,0,9,16a23.72,23.72,0,0,0,.32,3.91C6.63,18.92,5,17.42,5,16ZM11.5,6A14.2,14.2,0,0,0,9.82,9.82,14.19,14.19,0,0,0,6,11.49,11,11,0,0,1,11.5,6ZM6,20.5a14.63,14.63,0,0,0,4.32,1.8l.09,0A23.4,23.4,0,0,0,16,23c.6,0,1.19,0,1.76-.06a1,1,0,1,0-.14-2Q16.83,21,16,21a20.92,20.92,0,0,1-4.52-.47A21.33,21.33,0,0,1,11,16c0-6.48,2.64-11,5-11,1,0,2,.76,2.89,2.14a1,1,0,0,0,.84.47,1,1,0,0,0,.54-.15,1,1,0,0,0,.31-1.38.86.86,0,0,0-.07-.1A11,11,0,0,1,26,11.5a14.94,14.94,0,0,0-4.48-1.84l0,0A23.21,23.21,0,0,0,16,9c-.6,0-1.19,0-1.76.06a1,1,0,1,0,.14,2Q15.18,11,16,11a20.92,20.92,0,0,1,4.52.47A21.33,21.33,0,0,1,21,16c0,6.48-2.64,11-5,11-1,0-2-.76-2.89-2.14a1,1,0,1,0-1.69,1.06.86.86,0,0,0,.07.1A11,11,0,0,1,6,20.5ZM20.5,26a14.2,14.2,0,0,0,1.68-3.85A14.19,14.19,0,0,0,26,20.51,11,11,0,0,1,20.5,26Z"/></g></svg>
                </a>
                <h5 className='projectDetailGithubBtnText'>Website</h5>
              </a>
              :null
            }
          </div>
        </div>
      </div>
      <div style={{height: 35}}>
        <div className='navBtn' style={{opacity: showDownArrow ? '1' : '0', cursor: isAnimating ? 'wait' : 'default'}} onClick={() => {nextProject();}}>
          <svg className='navBtnIcon' height="28" fill='white' viewBox="0 0 50 50" width="50" xmlns="http://www.w3.org/2000/svg"><path d="M14.83 16.42l9.17 9.17 9.17-9.17 2.83 2.83-12 12-12-12z"/>
            <path d="M0-.75h48v48h-48z" fill="none"/>
          </svg>
        </div>
      </div>
    </div>
  )
}

export default ProjectsArea