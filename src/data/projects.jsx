// src/data/projects.js
import travelplanner from "../assets/projects.jsx/flight.png";

const projects = [
  {
    id: 4,
    title: "Admin Dashboard",
    role: "Frontend",
    description:
      "A modern admin dashboard featuring analytics charts, user tables, dark mode, and a clean responsive layout. Built with React, Vite, Material UI, and Recharts.",
    tech: ["React", "Vite", "Material UI", "Recharts", "JavaScript"],
    liveUrl: "https://fitwi-dashboard.vercel.app",
    githubUrl: "https://github.com/fitwi-Gebray/fitwi-dashboard",
  },

  {
    id: 2,
    title: "Travel Planner App",
    role: "Frontend",
    description:
      "A modern travel planning application built with React, Vite, and Material UI. Includes a full-screen hero background, destination search, and a clean responsive layout.",
    tech: ["React", "Vite", "Material UI", "CSS"],
    image: travelplanner,
    liveUrl: "https://travel-planner-page.vercel.app",
    githubUrl: "https://github.com/fitwi-Gebray/travel-planner-page",
  },

  {
    id: 3,
    title: "E‑Commerce Store",
    role: "Frontend",
    description:
      "A modern e‑commerce web app built with React and Vite. Features a clean product grid, dynamic routing, and a responsive UI powered by Material UI.",
    tech: ["React", "Vite", "Material UI", "JavaScript"],
    liveUrl: "https://fitwi-ecommerce.vercel.app",
    githubUrl: "https://github.com/fitwi-Gebray/fitwi-ecommerce",
  },
];

export default projects;
