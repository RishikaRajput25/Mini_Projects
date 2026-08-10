// import React from "react";

// import Home_page1 from "../components/Home_Page1.avif"; // Correct Path ✅



// const Home = () => {
//   return (
//     <div className="h-full">
//       <div>
//         <h1>heelo guys</h1>
//       <img src={Home_page1} alt="Home Page" className="w-full h-auto" />
//       </div>
//     </div>
//   );
// };

// export default Home;
import React from "react";
// import Home_page2 from "../components/Home_Page2.avif"; // Correct Path ✅
//import Home_Page2 from "../data/Home_page2.avif"
import Home_page2 from "../data/Home_page2.avif"; 

const Home = () => {
  return (
    <div className="relative w-full h-screen flex items-center justify-center">
      {/* Image */}
      <img src={Home_page2} alt="Home Page" className="w-full h-full object-cover" />

      {/* Text Overlay */}
      <div className="absolute right-1 top-1/2 transform -translate-y-1/2 text-black dark:text-white">
  <h1 className="text-5xl font-bold">Crafting Digital Experiences </h1>
  <h1 className="text-5xl font-bold">with Code </h1>
  
  <p className="text-lg mt-4 max-w-md">
    Passionate Web Developer dedicated to building user-friendly, interactive, and responsive web applications. 
    This portfolio showcases my skills, past projects, and the journey toward creating real-world solutions.
  </p>
  <button className="bg-black text-white h-10  mt-1 w-24 rounded-lg hover:outline hover:outline-2 hover:outline-white-500">
  Hire Me!
</button>


</div>

    </div>
  );
};

export default Home;
