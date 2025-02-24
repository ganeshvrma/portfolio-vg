import React from 'react'
import ProjectCard from './ProjectCard'

const Project = () => {
  return (
    <div id='Project' className='p-10 md:p-24 text-white'>
        <h1 className='text-2xl md:text-4xl text-white font-bold '>Projects</h1>
        <div className='py-12 px-8 flex flex-wrap gap-5 '>
            <ProjectCard title={"CSE POINT"} main={"educational platform "}/>
            <ProjectCard title="MUSIC PLAYER" main={"educational platform "}/>
            <ProjectCard title={"CSE POINT"} main={"educational platform "}/><ProjectCard title={"CSE POINT"} main={"educational platform "}/>
        </div>
    </div>
  );
}

export default Project;