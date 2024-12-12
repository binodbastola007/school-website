import React, { useState } from "react";
import "./Gallery.css";

const galleryData = {
    Events: [
        "/assets/Events/School.jpg",
        "/assets/Events/School.jpg",
        "/assets/Events/School.jpg",
        "/assets/Events/School.jpg",
        "/assets/Events/School.jpg",
        "/assets/Events/School.jpg",
        "/assets/Events/School.jpg",
        "/assets/Events/School.jpg",
        "/assets/Events/School.jpg",
    ],
    "Annual Program": [
        "/assets/Events/School.jpg",
        "/assets/Events/School.jpg",
        "/assets/Events/School.jpg",
        "/assets/Events/School.jpg",
        "/assets/Events/School.jpg",
        "/assets/Events/School.jpg",
        "/assets/Events/School.jpg",
        "/assets/Events/School.jpg",
        "/assets/Events/School.jpg",
    ],
    Festival: [
        "/assets/Events/School.jpg",
        "/assets/Events/School.jpg",
        "/assets/Events/School.jpg",
        "/assets/Events/School.jpg",
        "/assets/Events/School.jpg",
        "/assets/Events/School.jpg",
        "/assets/Events/School.jpg",
        "/assets/Events/School.jpg",
        "/assets/Events/School.jpg",
    ],
    "Sports Week": [
        "/assets/Events/School.jpg",
        "/assets/Events/School.jpg",
        "/assets/Events/School.jpg",
        "/assets/Events/School.jpg",
        "/assets/Events/School.jpg",
        "/assets/Events/School.jpg",
        "/assets/Events/School.jpg",
        "/assets/Events/School.jpg",
        "/assets/Events/School.jpg",
    ],
};

const Gallery = () => {
    const [selectedCategory, setSelectedCategory] = useState("Events");

    return (
        <div className="gallery-container">
            <h1 className="gallery-title">Photo Gallery</h1>
            {/* Buttons for Categories */}
            <div className="gallery-buttons">
                {Object.keys(galleryData).map((category, index) => (
                    <button
                        key={category}
                        className={`gallery-button ${selectedCategory === category ? "active" : ""
                            }`}
                        onClick={() => setSelectedCategory(category)}
                    >
                        {category}
                    </button>
                ))}
            </div>
            {/* Display Photos */}
            <div className="gallery-grid">
                {galleryData[selectedCategory].map((image, index) => (
                    <div key={index} className="gallery-item">
                        <img src='' alt={`${image}.${index}`} className="gallery-image" />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Gallery;



