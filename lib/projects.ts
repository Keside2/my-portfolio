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
    coverImage: "https://v-portfolio-d58y.onrender.com/assets/img/portfolio/movie-app-tmdb%20and%205%20more%20pages%20-%20Personal%20-%20Microsoft_%20Edge%2015_01_2026%2019_17_24.png",
    thumbnailImage: "https://v-portfolio-d58y.onrender.com/assets/img/portfolio/movie-app-tmdb%20and%205%20more%20pages%20-%20Personal%20-%20Microsoft_%20Edge%2015_01_2026%2019_17_24.png",
    gallery: [
      { url: "https://v-portfolio-d58y.onrender.com/assets/img/portfolio/movie-app-tmdb%20and%205%20more%20pages%20-%20Personal%20-%20Microsoft_%20Edge%2015_01_2026%2019_17_24.png", caption: "MovieApp landing page" },
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
        image: "https://v-portfolio-d58y.onrender.com/assets/img/portfolio/movie-app-tmdb%20and%205%20more%20pages%20-%20Personal%20-%20Microsoft_%20Edge%2015_01_2026%2019_17_24.png",
      },
      {
        slug: "wealthify",
        title: "Wealthify",
        category: "High-performance fintech application",
        image: "/Wealthify _ Track Your Growth and 1 more page - Personal - Microsoft_ Edge 01_02_2026 20_19_02.png",
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
        image: "https://v-portfolio-d58y.onrender.com/assets/img/portfolio/movie-app-tmdb%20and%205%20more%20pages%20-%20Personal%20-%20Microsoft_%20Edge%2015_01_2026%2019_17_24.png",
      },
      {
        slug: "housify",
        title: "Housify",
        category: "Real Estate",
        image: "/Housify - Google Chrome 18_03_2026 23_07_26.png",
      },
    ],
  },
  {
    id: 4,
    slug: "attendance-kiosk",
    title: "Attendance Kiosk",
    category: "Biometric Attendance System",
    shortDescription:
      "A face-verification attendance product for modern workplaces with secure check-ins and real-time reporting.",
    description: [
      "Attendance Kiosk is a biometric attendance solution designed for workplaces that need reliable staff check-ins without slow manual processes.",
      "The product focuses on face verification, liveness detection, real-time attendance logs, and admin-friendly reporting for operational visibility.",
    ],
    features: [
      "Facial recognition attendance check-in",
      "Liveness verification for secure sign-ins",
      "Real-time attendance logging",
      "Admin access for monitoring activity",
      "Reporting designed for operational and payroll workflows",
    ],
    technologies: [
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "Biometric Verification",
    ],
    coverImage: "/attendance.png",
    thumbnailImage: "/attendance.png",
    gallery: [{ url: "/attendance.png", caption: "Attendance Kiosk landing page" }],
    client: "Attendance Kiosk",
    timeline: "2026",
    role: "Frontend Developer",
    liveUrl: "https://attendancekiosk.vercel.app",
    relatedProjects: [
      {
        slug: "rentium",
        title: "Rentium",
        category: "Identity & Virtual Infrastructure",
        image: "/rentium-landing.png",
      },
      {
        slug: "aierth-tech",
        title: "Aierth Tech",
        category: "EdTech Platform",
        image: "/aierth-tech.png",
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
