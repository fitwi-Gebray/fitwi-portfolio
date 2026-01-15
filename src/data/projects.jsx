// src/data/projects.js
import travelPlannerImg from "../assets/projects/travel-planner.png";

const projects = [
  {
    id: 1,
    title: "Analytics Dashboard",
    role: "Frontend",
    description:
      "A responsive dashboard with charts, tables, and filters built in React. Focused on UX, performance, and clean layout.",
    tech: ["React", "JavaScript", "Chart.js", "CSS"],
    liveUrl: "https://your-dashboard-demo.com",
    githubUrl: "https://github.com/yourname/dashboard-project",
  },

  // ⭐ Travel Planner moved into ID 2 ⭐
  {
    id: 2,
    title: "Travel Planner App",
    role: "Frontend",
    description:
      "A modern travel planning application built with React, Vite, and Material UI. Includes a full-screen hero background, destination search, and a clean responsive layout.",
    tech: ["React", "Vite", "Material UI", "CSS"],
    image: travelPlannerImg,
    liveUrl: "https://travel-planner-page.vercel.app",
    githubUrl: "https://github.com/fitwi-Gebray/travel-planner-page",
  },

  {
    id: 3,
    title: "API-based Movie Explorer",
    role: "Frontend",
    description:
      "Browse and search movies using a public API. Handles loading states, errors, search, and filtering.",
    tech: ["React", "Fetch API", "CSS"],
    liveUrl: "https://your-movie-demo.com",
    githubUrl: "https://github.com/yourname/movie-app",
  },

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
];

export default projects;
