// import React, { useState } from "react";
// import "./Gallery.css";

// const galleryData = {
//     Events: [
//         "/assets/Events/School.jpeg",
//         "/assets/Events/School.jpeg",
//         "/assets/Events/School.jpeg",
//         "/assets/Events/School.jpeg",
//         "/assets/Events/School.jpeg",
//         "/assets/Events/School.jpeg",
//         "/assets/Events/School.jpeg",
//         "/assets/Events/School.jpeg",
//         "/assets/Events/School.jpeg",
//     ],
//     "Annual Program": [
//         "/assets/Events/School.jpeg",
//         "/assets/Events/School.jpeg",
//         "/assets/Events/School.jpeg",
//         "/assets/Events/School.jpeg",
//         "/assets/Events/School.jpeg",
//         "/assets/Events/School.jpeg",
//         "/assets/Events/School.jpeg",
//         "/assets/Events/School.jpeg",
//         "/assets/Events/School.jpeg",
//     ],
//     Festival: [
//         "/assets/Events/School.jpeg",
//         "/assets/Events/School.jpeg",
//         "/assets/Events/School.jpeg",
//         "/assets/Events/School.jpeg",
//         "/assets/Events/School.jpeg",
//         "/assets/Events/School.jpeg",
//         "/assets/Events/School.jpeg",
//         "/assets/Events/School.jpeg",
//         "/assets/Events/School.jpeg",
//     ],
//     "Sports Week": [
//         "/assets/Events/School.jpeg",
//         "/assets/Events/School.jpeg",
//         "/assets/Events/School.jpeg",
//         "/assets/Events/School.jpeg",
//         "/assets/Events/School.jpeg",
//         "/assets/Events/School.jpeg",
//         "/assets/Events/School.jpeg",
//         "/assets/Events/School.jpeg",
//         "/assets/Events/School.jpeg",
//     ],
// };

// const Gallery = () => {
//     const [selectedCategory, setSelectedCategory] = useState("Events");

//     return (
//         <div className="gallery-container">
//             <h1 className="gallery-title">Photo Gallery</h1>
//             {/* Buttons for Categories */}
//             <div className="gallery-buttons">
//                 {Object.keys(galleryData).map((category) => (
//                     <button
//                         key={category}
//                         className={`gallery-button ${selectedCategory === category ? "active" : ""
//                             }`}
//                         onClick={() => setSelectedCategory(category)}
//                     >
//                         {category}
//                     </button>
//                 ))}
//             </div>
//             {/* Display Photos */}
//             <div className="gallery-grid">
//                 {galleryData[selectedCategory].map((image, index) => (
//                     <div key={index} className="gallery-item">
//                         <img src={image} alt={Gallery ${index}} className="gallery-image" />
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default Gallery;