/*
export  const projectsData={
    HtmlCss:[
        {
            Id :1,
            Title:"Amazon Clone",
            Description:"this is an amazon clone",
            GithubLink:"github/htttp..",
            Video:"Video1.mp4"
        },
        {
            Id :2,
            Title:"Seosonal Crop",
            Description:"this is an Seosonal Crop clone ",
            GithubLink:"github/htttp..",
            Video:"Video1.mp4"  
        }
    ],
    HtmlCssJavaScript:[
        {
            Id :3,
            Title:"Tic Tak Toe",
            Description:"this is an responsive Tic Tak Toe ",
            GithubLink:"github/htttp..",
            Video:"Video1.mp4"  
        }
   
    ],
    ReactProject:[
        {
            Id :4,
            Title:"randomNuber Generator",
            Description:"this is an responsive randomNuber Generator ",
            GithubLink:"github/htttp..",
            Video:"Video1.mp4"    
        },
        {
            Id :5,
            Title:"randomImage Generator",
            Description:"this is an responsive randomImage Generator ",
            GithubLink:"github/htttp..",
            Video:"Video1.mp4" 
        }
    ]
     

    
}*/




    const ProjectsData = [
        {
          id: 1,
          title: "Amazon Clone",
          description: `A responsive Amazon UI clone built with HTML & CSS, featuring a navbar, product sections, and a static cart page. Though it lacks backend functionality, it showcases my UI skills.\n
Tech Stack:
✅ HTML – Structure
✅ CSS – Styling & Responsiveness

Not perfect, but a small step toward becoming a great developer! 🚀`,
         
          video: "/videos/Amazon_Clone.mp4",
          thumbnails:"/thumbnails/Amazon_clone.webp",
         category: "HTML & CSS",
          github: "https://github.com/RishikaRajput25/Amazon_Clone",
        },
        {
          id: 2,
          title: "Crop Information",
          description: `A responsive website providing essential crop-related information, built with HTML & CSS. It features a clean UI with sections for crop details, about Types of crop grown in india. Though it’s static, it showcases my frontend skills.\n

          Tech Stack:
          ✅ HTML – Structure
          ✅ CSS – Styling & Responsiveness
          
          Not perfect, but a small step toward becoming a great developer! 🚀`,
          video: "/videos/Video1.mp4",
          thumbnails:"/thumbnails/Crops.webp",
         category: "HTML & CSS" , 
          github: "https://github.com/RishikaRajput25/Crop_Information",
        },
        {
          id: 3,
          title: "Tic Tac Toe Game 🎮",
          description: `A simple yet interactive Tic Tac Toe game built with HTML, CSS, and JavaScript. It allows two players to take turns, updates the game state dynamically, and announces the winner. The game includes a reset feature for a fresh start.\n

Tech Stack:
✅ HTML – Structure of the game board
✅ CSS – Styling and responsiveness
✅ JavaScript – Game logic, turn switching, and winner detection

Not perfect, but a small step toward becoming a great developer! 🚀`,
         // video: "../data/ProjectVideo/Video1.mp4",
         video: "/videos/Video1.mp4",
         thumbnails:"/thumbnails/TttGame.jpg",
         category: "JavaScript",
     
          github: "https://github.com/RishikaRajput25/Tic_Tak_Toe",
        },
        {
            id: 4,
            title: "Basic Calculator 🧮",
            description: `A simple calculator built using HTML, CSS, and JavaScript that performs basic arithmetic operations. It provides a clean UI with interactive buttons for addition, subtraction, multiplication, division, percentage, and decimal operations. The calculator also includes a delete and reset feature for enhanced user experience.\n

Tech Stack:
✅ HTML – Structure of the calculator
✅ CSS – Styling and responsiveness
✅ JavaScript – Functionality, event handling, and calculations

Not perfect, but a small step toward becoming a great developer! 🚀`,
           // video: "../data/ProjectVideo/Video1.mp4",
           video: "/videos/Video1.mp4",
           thumbnails:"/thumbnails/Calci.jpg",
           category: "JavaScript",
           github: "https://github.com/RishikaRajput25/Basic_Calculator",
           
        },
        {
            id: 5,
            title: "React Dynamic Image Slider 🎨📸",
            description: `A React-based image slider that fetches high-quality images from Picsum API, enabling smooth navigation.\n
🚀 Features:
✅ Dynamic Fetching – Loads images using unique IDs
✅ Navigation – Move left & right through images
✅ Change Set – Fetch a new batch of 10 images
✅ Reset – Reverts to the initial images
✅ Optimized – Uses React.memo to prevent re-renders

🛠 Tech Stack:
✔ React.js – Component-based structure
✔ Tailwind CSS – Responsive styling
✔ Fetch API – Dynamic image retrieval

A simple yet powerful slider to enhance UI & state management skills! 🚀✨`,
           // video: "../data/ProjectVideo/Video1.mp4",
           video: "/videos/Video1.mp4",
           thumbnails:"/thumbnails/IS.jpg",
           category: "React",
           github: "https://github.com/RishikaRajput25/ImageSlider",
        }
      ];
 

export default ProjectsData
