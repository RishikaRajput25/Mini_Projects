import React from 'react'
 

{/* 
    By prop drilling here we make a card with some props and later on the project file we can call projectCard and write info */}
{/*   

  <div className='container '>
<h1>Project {Id}</h1>
<div className='MainBox h-1/2 w-1/2 bg-blue-950 rounded-2xl '>
<h1>{Title}</h1>
<div className='Image_Video h-1/2 w-full mt-5'>
<video controls className='w-full h-full object-cover rounded-2xl'>
  <source src={Video} type='video/mp4'/>
</video>
</div>
<div className='content  dark:text-white'>
<p>{Description}</p>
</div>
{GitHubLink && (
            <a
              href={GitHubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline block mt-2"
            >
              View Code →
            </a>
          )}

</div>

 </div>
)}
export default ProjectCard;



  
 */}


 //const ProjectCard = ({ id, title, video, description }) => {
//   console.log("ProjectCard Props:", { id, title, video, description });

//  return (
//     <div className="border border-gray-500 p-4 rounded-lg bg-gray-800">
//       <h3 className="text-white text-lg font-semibold">{title || "No Title"}</h3>
//       {video && <video src={video} controls className="w-full mt-2 rounded-md" />}
//       <p className="text-gray-300 mt-2">{description || "No description available"}</p>
//     </div>
//   );
// };


//that is good code 
// const ProjectCard = ({ id, title, video, description }) => {
//   return (
//     <div className="border border-grey-500 p-5 rounded-lg  dark:bg-gray-900  dark:border-white transition-all duration-300 hover:scale-105 shadow-xl ">
//       <h2 className="text-white dark:text-white text-lg font-semibold underline">{title || "No Title"}</h2>
//       {video && <video src={video} controls className="w-full mt-2 rounded-md" />}
//       <p className="text-gray-300 dark:text-white mt-2">{description || "No description available"}</p>
//      </div>
//   );
// };


///perfect running code 13:12 update
// const ProjectCard = ({ id, title, video, description }) => {
//   return (
//     <div className="border border-gray-500 p-8 rounded-2xl bg-white dark:bg-gray-900 shadow-xl transform transition-all duration-300 hover:scale-105 hover:bg-blue-100 dark:hover:bg-blue-900 w-full max-w-2xl mx-auto">
//       <h3 className="text-black dark:text-white text-2xl font-semibold text-center">{title || "No Title"}</h3>
//       {video && <video src={video} controls className="w-full mt-6 rounded-md" />}
//       <p className="text-gray-700 dark:text-gray-300 mt-6 text-center">{description || "No description available"}</p>
//     </div>
//   );
// };



const ProjectCard = ({ id, title, video, description ,thumbnails,github}) => {
  return (
    <div className="border border-gray-500 p-8 rounded-2xl bg-white dark:bg-gray-900 shadow-xl transform transition-all duration-300 hover:scale-105 hover:bg-blue-100 dark:hover:bg-blue-900 w-full max-w-2xl mx-auto">
      <h3 className="text-black dark:text-white text-2xl font-semibold text-center">{title || "No Title"}</h3>
      {video && <video src={video} poster={thumbnails} controls className="w-full mt-6 rounded-md" />}
      <p className="text-gray-700 dark:text-gray-300 mt-6 text-center">{description || "No description available"}</p>

      {github && (
        <div className="mt-6 text-center">
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gray-800 text-white px-4 py-2 rounded-lg shadow-md hover:bg-gray-700 transition-all duration-300"
          >
            View on GitHub
          </a>
        </div>
      )}


    </div>
  );
};





// return (
//   <div className="border border-gray-500 p-4 rounded-lg bg-gray-800 dark:bg-gray-200 dark:border-gray-400 transition-all duration-300">
//     <h3 className="text-white dark:text-black text-lg font-semibold">{title || "No Title"}</h3>
//     {video && (
//       <video 
//         src={video} 
//         controls 
//         className="w-full mt-2 rounded-md cursor-pointer transition-transform duration-300 hover:scale-105"
//         onClick={onExpand} // Clicking will expand
//       />
//     )}
//     <p className="text-gray-300 dark:text-gray-700 mt-2">{description || "No description available"}</p>
//   </div>
// );
// };
export default ProjectCard






