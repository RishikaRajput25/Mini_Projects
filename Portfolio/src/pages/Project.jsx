// import React from 'react'
// import { useState } from 'react'
// import ProjectCard from '../components/ProjectCard'


// import ProjectsData from '../data/ProjectData'
// const Project = () => {
//   const categories = [...new Set(ProjectsData.map((project) => project.category))];
//   console.log(categories); 
 
// console.log(ProjectsData); // Debugging step

//   return (
//     <>
   

//     <div className="overflow-hidden bg-black py-3">
//       <p className="text-white text-2xl font-bold inline-block animate-marquee">
//       "Exploring My Skills: A Collection of Basic Projects to Strengthen My Web Development Journey!"
//       </p>
//     </div>
///this code remains same for all
 






 {/*

<div className="p-4">
      {categories.map((category) => (
        <div key={category} className="mb-8">
          <h2 className="text-3xl font-bold text-white mb-4">{category} Projects</h2>
          {console.log("Filtering for category:", category)}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
           
              {ProjectsData.filter((project) => project.category === category).map((project) => (
  <ProjectCard 
    key={project.id} 
    id={project.id}
    title={project.title} 
    video={project.video} 
    description={project.description} 
  />
))}       
          </div>
        </div>
      ))} 
    </div>
*/}

{/*   
//little new 
 <div className="">
  {categories.map((category) => (
    <div key={category} className="mb-8">
     
      <h2 className="text-3xl font-bold mb-4 transition-colors duration-300">
        {category} Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {ProjectsData.filter((project) => project.category === category).map((project) => (
          <ProjectCard 
            key={project.id} 
            id={project.id}
            title={project.title} 
            video={project.video} 
            description={project.description} 
          />
        ))}
      </div>
    </div>
  ))}
</div>  


 



    </>
  )
} 

export default Project*/}




import React from 'react';
import { useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import ProjectsData from '../data/ProjectData';

const Project = () => {
  const categories = [...new Set(ProjectsData.map((project) => project.category))];

  return (
    <>
      <div className="p-8 max-w-7xl mx-auto">
        {categories.map((category) => {
          const filteredProjects = ProjectsData.filter((project) => project.category === category);
          return (
            <div key={category} className="mb-16">
              <h2 className="text-4xl font-bold mb-8 transition-colors duration-300 text-center text-black dark:text-white border-b-2 border-gray-400 dark:border-gray-600 pb-2">{category} Projects</h2>
              <div className={`grid grid-cols-1 md:grid-cols-${filteredProjects.length === 1 ? '1' : '2'} lg:grid-cols-${filteredProjects.length > 2 ? '3' : '2'} gap-10 justify-center`}>                
                {filteredProjects.map((project) => (
                  <ProjectCard 
                    key={project.id} 
                    id={project.id}
                    title={project.title} 
                    video={project.video} 
                    thumbnails={project.thumbnails}
                    description={project.description} 
                    github={project.github}
                  />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Project;
