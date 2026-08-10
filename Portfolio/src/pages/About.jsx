import React from 'react'

const About = () => {
  return (
    <>
{/*     
<div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 text-black dark:text-white p-6">
  
  
  <div className="bg-white dark:bg-gray-900 p-8 shadow-xl rounded-2xl transform transition-all duration-300 hover:scale-105 hover:bg-blue-100 dark:hover:bg-blue-900">
    <h2 className="text-3xl font-bold mb-4">Web Development</h2>
    <p className="text-lg mb-4">
      I am <span className="font-semibold text-blue-600 dark:text-blue-400">currently working on myself to become the best</span> in web development. I strive to build 
      <span className="font-semibold"> high-performance, visually stunning, and user-friendly</span> web applications. My skill set includes:
    </p>

    <ul className="list-disc list-inside space-y-2 text-lg">
      <li><strong>Frontend Technologies:</strong> HTML, CSS, JavaScript, React, Vite</li>
      <li><strong>My Current Focus:</strong> Mastering Backend Development to become a Full-Stack Developer</li>
      <li><strong>Hands-on Learning:</strong> Building real-world projects to sharpen my problem-solving abilities</li>
    </ul>
  </div>

  <div className="flex flex-col gap-8">
    
   
    <div className="bg-white dark:bg-gray-900 p-8 shadow-xl rounded-2xl transform transition-all duration-300 hover:scale-105 hover:bg-blue-100 dark:hover:bg-blue-900">
      <h2 className="text-3xl font-bold mb-4">Other Skills</h2>
      <p className="text-lg mb-4">
        I don’t just code; I <span className="font-semibold text-blue-600 dark:text-blue-400">solve problems and think logically</span>. My additional skills include:
      </p>

      <ul className="list-disc list-inside space-y-2 text-lg">
        <li><strong>Programming Language:</strong> C++ (Sharpening my problem-solving mindset)</li>
        <li><strong>Data Structures & Algorithms (DSA):</strong> Practicing industry-relevant DSA problems</li>
        <li><strong>Logical Thinking & Debugging:</strong> Finding efficient solutions and optimizing performance</li>
      </ul>

      <p className="text-lg mt-4">
        I am <span className="font-semibold text-blue-600 dark:text-blue-400">determined, hardworking, and always ready</span> to take on new challenges to grow as a developer. 
      </p>
    </div>

  </div>

</div> */}





<div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-black dark:text-white p-6">
  
  {/* Web Development Box */}
  <div className="bg-white dark:bg-gray-900 p-6 shadow-xl rounded-2xl transform transition-all duration-300 hover:scale-105 hover:bg-blue-100 dark:hover:bg-blue-900 flex flex-col">
    <h2 className="text-2xl font-bold mb-4 text-center">Web Development</h2>
    <p className="text-lg mb-4 text-center">
      I am <span className="font-semibold text-blue-600 dark:text-blue-400">currently working on myself to become the best</span> in web development. I focus on building 
      <span className="font-semibold"> high-performance, visually appealing, and interactive web applications.</span>
    </p>

    <div className="border-t border-gray-300 dark:border-gray-700 my-4"></div>

    <ul className="list-disc list-inside space-y-2 text-lg">
      <li><strong>Frontend:</strong> HTML, CSS, JavaScript, React, Vite</li>
      <li><strong>Current Focus:</strong> Mastering Backend Development</li>
      <li><strong>Hands-on Learning:</strong> Building real-world projects</li>
    </ul>
  </div>

  {/* Personal Info Box */}
  <div className="bg-white dark:bg-gray-900 p-6 shadow-xl rounded-2xl transform transition-all duration-300 hover:scale-105 hover:bg-blue-100 dark:hover:bg-blue-900 flex flex-col">
    <h2 className="text-2xl font-bold mb-4 text-center">Personal Info</h2>
    <p className="text-lg"><strong>Name:</strong> Rishika Rajput</p>
    <p className="text-lg"><strong>College:</strong> Medicaps University, Indore</p>
    <p className="text-lg"><strong>Year:</strong> Second Year</p>
    <p className="text-lg"><strong>Degree:</strong> Bachelor’s in [Your Course Name]</p>

    <div className="border-t border-gray-300 dark:border-gray-700 my-4"></div>

    <h3 className="text-xl font-semibold mb-2">Technical Interests & Goals</h3>
    <p className="text-lg">
      I am deeply passionate about <span className="font-semibold text-blue-600 dark:text-blue-400">technology and problem-solving</span>. Currently, I am 
      <span className="font-semibold"> working on Web Development</span>, and my <span className="font-semibold">future goal</span> is to **dive deep into Machine Learning** and explore AI innovations.
    </p>
  </div>

  {/* Other Skills Box */}
  <div className="bg-white dark:bg-gray-900 p-6 shadow-xl rounded-2xl transform transition-all duration-300 hover:scale-105 hover:bg-blue-100 dark:hover:bg-blue-900 flex flex-col">
    <h2 className="text-2xl font-bold mb-4 text-center">Other Skills</h2>
    <p className="text-lg text-center mb-4">
      I don’t just code; I <span className="font-semibold text-blue-600 dark:text-blue-400">solve problems and think logically</span>.
    </p>

    <div className="border-t border-gray-300 dark:border-gray-700 my-4"></div>

    <ul className="list-disc list-inside space-y-2 text-lg">
      <li><strong>Programming Language:</strong> C++</li>
      <li><strong>Data Structures & Algorithms:</strong> Practicing industry-relevant problems</li>
      <li><strong>Logical Thinking & Debugging:</strong> Finding optimized solutions</li>
    </ul>

    <p className="text-lg mt-4 text-center">
      I am <span className="font-semibold text-blue-600 dark:text-blue-400">determined, hardworking, and always ready</span> to take on new challenges.  
    </p>
  </div>

</div>








    </>
      
   
  )
}

export default About
