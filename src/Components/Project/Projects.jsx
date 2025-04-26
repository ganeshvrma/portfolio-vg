import React from 'react';
import Projectcards from './Projectcards';
import Cseimage from '../../assets/projimg/cse.png'
import Musicimage from '../../assets/projimg/music.png'
import Courseimage from '../../assets/projimg/course.png'
import PortImage from '../../assets/projimg/port.png'
import TourImage from '../../assets/projimg/Screenshot 2025-02-24 114327.png'
import Wflimage from'../../assets/projimg/wfl.png'
const Projects = () => {
  const projects = [
    {
      title: "CSE POINT",
      img:Cseimage,
      main: "Educational platform",
      demoLink: "https://csepoint.netlify.app",
      sourceCodeLink: "https://github.com/ganeshvrma/cse-point-24"
    },
    {
      title: "MUSIC PLAYER",
      img:Musicimage,
      main: "A feature-rich React music app",
      demoLink: "https://vgmusic.netlify.app/",
      sourceCodeLink: "https://github.com/ganeshvrma/music-vg-web"
    },
    {
      title: "Top Courses",
      img:Courseimage,
      main: "Online shopping platform",
      demoLink: "https://topcoursesvg.netlify.app/",
      sourceCodeLink: "https://github.com/ganeshvrma/topcourses-react-lb"
    },{
      title: "Tour Guide ",
      img:   TourImage,
      main: "Personal portfolio with animations",
      demoLink: "https://tourwithvg.netlify.app/",
      sourceCodeLink: "https://github.com/ganeshvrma/tour-guide"
    },
    {
      title: "PORTFOLIO WEBSITE",
      img:   PortImage,
      main: "Personal portfolio with animations",
      demoLink: "https://portfoliovgs.netlify.app/",
      sourceCodeLink: "https://github.com/ganeshvrma/portfolio-vg"
    },
    {
      title:"Laundry Website",
      img: Wflimage,
      main: "One stop solution for you",
      demoLink:"https://white-falcon.netlify.app/",
      sourceCodeLink:"https://github.com/ganeshvrma/white-falcon-laundry-task"
    },
     {
      title:"Multistep form ",
      // img: Wflimage,
      main: "One fgf solution for you",
      demoLink:"https://white-falcobn.netlify.app/",
      sourceCodeLink:"https://github.com/ganeshvrma/white-falcon-laundry-task"
     }
  ];

  return (
    <div id='Project' className='p-10 md:p-24 text-white'>
      <h1 className='text-2xl md:text-4xl font-bold'>Projects</h1>
      <div className='py-12 px-8 flex flex-wrap gap-5 '>
        {projects.map((project, index) => (
          <Projectcards 
            key={index} 
            title={project.title} 
            main={project.main} 
            img={project.img}
            demoLink={project.demoLink} 
            sourceCodeLink={project.sourceCodeLink} 
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
