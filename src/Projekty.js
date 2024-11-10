import React from 'react';
import { Link } from 'react-router-dom';
import './Styles/Main.css';
import Navbar from './Navbar';
import Footer from './Footer';
import './Styles/Projekty.css';
import imi1 from './Assets/1.png';
import imi2 from './Assets/onasback.jpg';
import imi3 from './Assets/3.png';


const Projekty = () => {
  const projects = [
    {
      title: 'Moderní kuchyně',
      description: 'A sleek, custom-made kitchen with matte black surfaces and wooden accents.',
      image: imi1,
    },
    {
      title: 'Elegant Bedroom Wardrobes',
      description: 'Tailored wardrobes providing ample storage and sophistication.',
      image: imi2,
    },
    {
      title: 'Office Cabinetry',
      description: 'Minimalist office storage solutions designed for professionals.',
      image: imi3,
    },
    {
      title: 'Living Room Shelving',
      description: 'Elegant shelves maximizing storage and display space in the living room.',
      image: imi1,
    },
    {
      title: 'Rustic Dining Room',
      description: 'Rustic-inspired dining set with natural wood elements.',
      image: imi2,
    },
    {
      title: 'Bathroom Vanity',
      description: 'Chic bathroom vanity with ample storage and modern elegance.',
      image: imi3,
    },
  ];

  return (
    <div>
      <Navbar />
      <div className="projekty-container">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.image} alt={project.title} className="project-image" />
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <Link to="/projekty" className="project-link">Prozkoumat</Link>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Projekty;

