export interface ProjectGalleryImage {
  url: string;
  caption?: string;
}

export interface RelatedProject {
  slug: string;
  title: string;
  category: string;
  image: string;
}

export interface Project {
  id: number;
  slug: string;
  title: string;
  category: string;
  shortDescription: string;
  description: string[];
  features: string[];
  technologies: string[];
  coverImage: string;
  thumbnailImage: string;
  gallery?: ProjectGalleryImage[];
  client?: string;
  timeline: string;
  role: string;
  liveUrl?: string;
  githubUrl?: string;
  relatedProjects?: RelatedProject[];
}

const projects: Project[] = [
  {
    id: 1,
    slug: "movieApp",
    title: "MovieApp",
    category: "Movie Streaming Platform",
    shortDescription:
      "A premium, high-performance streaming platform engineered to deliver immersive, cinema-grade user experiences through modern web technologies.",
    description: [
      "MovieApp is a high-performance, responsive web application designed to replicate the premium user experience of modern streaming platforms like Netflix. Beyond a simple movie database. ",
      "This project implements a Personalized Discovery System that adapts the interface based on real-time user preferences stored in the cloud.",
    ],
    features: [
      "Personalized Discovery Engine",
      "Advanced Authentication System",
      "Performance Optimization System",
      "Mobile-First Responsive Design",
      "Real-Time Feedback System",
       "Interactive Media Experience",
      "Premium UI/UX System",
     
    ],
    technologies: [
      "JavaScript",
      "React",
      "Next.js",
      "React Context API",
      "Firebase",
      "CSS3",
    ],
    coverImage: "/movie-app-tmdb and 5 more pages - Personal - Microsoft_ Edge 15_01_2026 19_17_24.png",
    thumbnailImage: "/movie-app-tmdb and 5 more pages - Personal - Microsoft_ Edge 15_01_2026 19_17_24.png",
    gallery: [
      { url: "/movie-app-tmdb and 5 more pages - Personal - Microsoft_ Edge 15_01_2026 19_17_24.png", caption: "MovieApp landing page" },
      { url: "https://github.com/Keside2/movie-app-tmdb/blob/main/src/assets/movie-app-tmdb%20and%205%20more%20pages%20-%20Personal%20-%20Microsoft%E2%80%8B%20Edge%2015_01_2026%2019_17_41.png?raw=true", caption: "MovieApp" },
      { url: "https://github.com/Keside2/movie-app-tmdb/blob/main/src/assets/movie-app-tmdb%20and%205%20more%20pages%20-%20Personal%20-%20Microsoft%E2%80%8B%20Edge%2015_01_2026%2019_17_59.png?raw=true", caption: "MovieApp" },
      { url: "/movie-app-tmdb and 3 more pages - Personal - Microsoft​ Edge 29_04_2026 16_35_59.png", caption: "MovieApp" },
      
    ],
    client: "",
    timeline: "2026",
    role: "Full Stack Developer",
    liveUrl: "https://movie-app-tmdb.onrender.com/",
    githubUrl: "https://github.com/Keside2/movie-app-tmdb",
    relatedProjects: [
      {
        slug: "housify",
        title: "Housify",
        category: "Real Estate",
        image: "/Housify - Google Chrome 18_03_2026 23_07_26.png",
      },
      {
        slug: "wealthify",
        title: "Wealthify",
        category: "High-performance fintech application",
        image: "/Wealthify _ Track Your Growth and 1 more page - Personal - Microsoft_ Edge 01_02_2026 20_19_02.png",
      },

       {
        slug: "questLog",
        title: "QuestLog",
        category: "Game",
        image: "/quest-log - Personal - Microsoft​ Edge 16_04_2026 22_29_37.png",
      },

      {
        slug: "multiplayer-trivia",
        title: "Multiplayer Trivia",
        category: "Game",
        image: "/game-layout.png",
      },
    ],
  },
  {
    id: 2,
    slug: "housify",
    title: "Housify",
    category: "Real Estate",
    shortDescription:
      "A modern, full-stack real estate platform connecting agents and buyers through a secure, scalable, and user-driven experience.",
    description: [
      "Housify is a modern, full-stack real estate application built with React and Firebase. It serves as a secure bridge between Real Estate Agents looking to list properties and Buyers searching for their dream homes.",

    ],
    features: [
      "Smart Notification System",
      "Optimized Notification Stack",
      "Interactive Map Integration",
      "Fully Responsive Design",
      "High-Performance Media Hosting",
    ],
    technologies: [
      "JavaScript",
      "React",
      "Next.js",
      "Recharts",
      "Cloudinary",
      "Firebase",
      "CSS3",
    ],
    coverImage: "/Housify.png",
    thumbnailImage: "/Housify - Google Chrome 18_03_2026 23_07_26.png",
    gallery: [
      { url: "/Housify - Google Chrome 18_03_2026 23_07_26.png", caption: "Housify landing page" },
      { url: "/movie-app-tmdb_src_assets_movie-app-tmdb and 5 more pages - Personal - Microsoft​ Edge 15_01_2026 19_17_59.png at main · Keside2_movie-app-tmdb - Google Chrome 29_04_2026 17_07_33.png", caption: "Housify" },
      { url: "/movie-app-tmdb_src_assets_movie-app-tmdb and 5 more pages - Personal - Microsoft​ Edge 15_01_2026 19_17_59.png at main · Keside2_movie-app-tmdb - Google Chrome 29_04_2026 17_08_07.png", caption: "Housify landing page" },
      { url: "/movie-app-tmdb_src_assets_movie-app-tmdb and 5 more pages - Personal - Microsoft​ Edge 15_01_2026 19_17_59.png at main · Keside2_movie-app-tmdb - Google Chrome 29_04_2026 17_08_19.png", caption: "Housify landing page" },
      
    ],
    client: "",
    timeline: "2026",
    role: "Full Stack Developer",
    liveUrl: "https://housify-app-nuuq.onrender.com/",
    githubUrl: "https://github.com/Keside2/housify-app",
    relatedProjects: [
      {
        slug: "movieApp",
        title: "MovieApp",
        category: "Movie Streaming Platform",
        image: "/movie-app-tmdb and 5 more pages - Personal - Microsoft_ Edge 15_01_2026 19_17_24.png",
      },
      {
        slug: "wealthify",
        title: "Wealthify",
        category: "High-performance fintech application",
        image: "/Wealthify _ Track Your Growth and 1 more page - Personal - Microsoft_ Edge 01_02_2026 20_19_02.png",
      },

       {
        slug: "questLog",
        title: "QuestLog",
        category: "Game",
        image: "/quest-log - Personal - Microsoft​ Edge 16_04_2026 22_29_37.png",
      },

      {
        slug: "multiplayer-trivia",
        title: "Multiplayer Trivia",
        category: "Game",
        image: "/game-layout.png",
      },
    ],
  },
  {
    id: 3,
    slug: "wealthify",
    title: "Wealthify",
    category: "High-performance fintech application",
    shortDescription:
      "A real-time fintech dashboard for tracking and visualizing wealth.",
    description: [
      "Wealthify is a high-performance, responsive fintech application designed to replace boring spreadsheets with a Living UI.",
      "It provides solopreneurs and creators with a centralized hub to track assets, monitor real-time transaction logs, and visualize wealth growth through an interactive, cloud-synced dashboard.",
    ],
    features: [
      "Living Financial Dashboard",
      "Wealth Visualization System",
      "Real-Time Transaction Engine",
      "Centralized Asset Management",
      "Cloud-Synced Data System",
      "High-Performance UI/UX"
    ],
    technologies: [
      "JavaScript",
      "React",
      "Next.js",
      "Firebase",
      "Tailwind CSS",
      "CSS3",
    ],
    coverImage: "/Wealthify _ Track Your Growth and 1 more page - Personal - Microsoft_ Edge 01_02_2026 20_19_12.png",
    thumbnailImage: "/Wealthify _ Track Your Growth and 1 more page - Personal - Microsoft_ Edge 01_02_2026 20_19_02.png",
    gallery: [
      { url: "/Wealthify _ Track Your Growth and 1 more page - Personal - Microsoft_ Edge 01_02_2026 20_19_02.png", caption: "Wealthify Live dashboard" },
      { url: "/Wealthify _ Track Your Growth and 1 more page - Personal - Microsoft_ Edge 01_02_2026 20_19_12.png", caption: "Wealthify Live dashboard" },
      { url: "/Wealthify _ Track Your Growth and 1 more page - Personal - Microsoft_ Edge 01_02_2026 20_19_20.png", caption: "Wealthify Live dashboard" },
      { url: "/Wealthify _ Track Your Growth and 1 more page - Personal - Microsoft_ Edge 01_02_2026 20_23_04.png", caption: "Wealthify Live dashboard" },
    ],
    client: "",
    timeline: "2026",
    role: "Full Stack Developer",
    liveUrl: "https://wealthify-u8af.onrender.com/",
    githubUrl: "https://github.com/Keside2/wealth-dashboard",
    relatedProjects: [
      {
        slug: "movieApp",
        title: "MovieApp",
        category: "Movie Streaming Platform",
        image: "/movie-app-tmdb and 5 more pages - Personal - Microsoft_ Edge 15_01_2026 19_17_24.png",
      },
      {
        slug: "housify",
        title: "Housify",
        category: "Real Estate",
        image: "/Housify - Google Chrome 18_03_2026 23_07_26.png",
      },
       {
        slug: "questLog",
        title: "QuestLog",
        category: "Game",
        image: "/quest-log - Personal - Microsoft​ Edge 16_04_2026 22_29_37.png",
      },

      {
        slug: "multiplayer-trivia",
        title: "Multiplayer Trivia",
        category: "Game",
        image: "/game-layout.png",
      },
    ],
  },
  {
    id: 4,
    slug: "questLog",
    title: "QuestLog",
    category: "Game",
    shortDescription:
      "A gamified task manager that turns productivity into an RPG adventure.",
    description: [
      "QuestLog is a specialized productivity SaaS that transforms daily coding tasks and professional habits into an RPG-style adventure. Built for developers who want to stay engaged with their goals, QuestLog turns every To-Do into a Quest.",
     
    ],
    features: [
      "Core Gamification Engine",
      "Milestone Boss System",
      "Adaptive Avatar Evolution",
      "Habit Reinforcement System",
      "Integrity Layer",
      "Developer Sync Engine",
      "Resilient Backend Infrastructure",
    ],
    technologies: [
      "JavaScript",
      "React",
      "React Context API",
      "Firebase",
      " React Hot Toast",
      "Node.js & Express",
      "CSS3",
      "GitHub Search API",
      "Render",
    ],
    coverImage: "/quest-log - Personal - Microsoft​ Edge 16_04_2026 22_29_37.png",
    thumbnailImage: "/quest-log - Personal - Microsoft​ Edge 16_04_2026 22_29_37.png",
    gallery: [{ url: "/quest-log - Personal - Microsoft​ Edge 16_04_2026 22_29_37.png", caption: "Quest-log" }],
    client: "",
    timeline: "2026",
    role: "Full Stack Developer",
    liveUrl: "https://quest-log-kixw.onrender.com/",
    githubUrl: "https://github.com/Keside2/quest-log/tree/main/quest-log",
    relatedProjects: [
       {
        slug: "movieApp",
        title: "MovieApp",
        category: "Movie Streaming Platform",
        image: "/movie-app-tmdb and 5 more pages - Personal - Microsoft_ Edge 15_01_2026 19_17_24.png",
      },
      {
        slug: "housify",
        title: "Housify",
        category: "Real Estate",
        image: "/Housify - Google Chrome 18_03_2026 23_07_26.png",
      },

      {
        slug: "wealthify",
        title: "Wealthify",
        category: "High-performance fintech application",
        image: "/Wealthify _ Track Your Growth and 1 more page - Personal - Microsoft_ Edge 01_02_2026 20_19_02.png",
      },

      {
        slug: "multiplayer-trivia",
        title: "Multiplayer Trivia",
        category: "Game",
        image: "/game-layout.png",
      },
    ],
  },

  {
    id: 5,
    slug: "multiplayer-trivia",
    title: "Multiplayer Trivia",
    category: "Game",
    shortDescription:
      "A real-time multiplayer trivia game with live chat and competitive scoring.",
    description: [
      "A real-time multiplayer trivia platform where players compete, interact, and earn rewards through fast-paced, interactive gameplay.",
     
    ],
    features: [
      "Real-Time Multiplayer Engine",
      "Dynamic Room System",
      "Host-Controlled Game Flow",
      "Live Leaderboard System",
      "Dynamic Trivia Engine",
      "Performance-Based Scoring System",
      "Real-Time Chat System",
      "Reward & Feedback System",
    ],
    technologies: [
      "TypeScript",
      "React",
      "react-toastify",
      "Firebase",
      "Open Trivia DB",
      "CSS3",
    ],
    coverImage: "/game-layout5.png",
    thumbnailImage: "/game-layout.png",
    gallery: [
      { url: "/game-layout.png", caption: "trivia" },
       { url: "/game-layout2.png", caption: "trivia" },
        { url: "/game-layout3.png", caption: "trivia" },
         { url: "/game-layout5.png", caption: "trivia" },

    ],
    client: "",
    timeline: "2026",
    role: "Full Stack Developer",
    liveUrl: "https://multiplayer-trivia-game.onrender.com/",
    githubUrl: "https://github.com/Keside2/multiplayer-trivia",
    relatedProjects: [
       {
        slug: "movieApp",
        title: "MovieApp",
        category: "Movie Streaming Platform",
        image: "/movie-app-tmdb and 5 more pages - Personal - Microsoft_ Edge 15_01_2026 19_17_24.png",
      },
      {
        slug: "housify",
        title: "Housify",
        category: "Real Estate",
        image: "/Housify - Google Chrome 18_03_2026 23_07_26.png",
      },

      {
        slug: "wealthify",
        title: "Wealthify",
        category: "High-performance fintech application",
        image: "/Wealthify _ Track Your Growth and 1 more page - Personal - Microsoft_ Edge 01_02_2026 20_19_02.png",
      },

      {
        slug: "questLog",
        title: "QuestLog",
        category: "Game",
        image: "/quest-log - Personal - Microsoft​ Edge 16_04_2026 22_29_37.png",
      },
    ],
  },
];

export { projects };

export function getAllProjects(): Project[] {
  return projects;
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getRelatedProjects(
  currentSlug: string,
  limit = 2
): RelatedProject[] {
  const currentProject = getProjectBySlug(currentSlug);
  if (!currentProject || !currentProject.relatedProjects) {
    return projects
      .filter((project) => project.slug !== currentSlug)
      .slice(0, limit)
      .map((project) => ({
        slug: project.slug,
        title: project.title,
        category: project.category,
        image: project.thumbnailImage,
      }));
  }

  return currentProject.relatedProjects.slice(0, limit);
}
