// Tech Event Categories
export const TECH_EVENT_CATEGORIES = [
  { id: 'all', name: 'All Events', icon: '🎯' },
  { id: 'startup', name: 'Startup & Entrepreneurship', icon: '🚀' },
  { id: 'software', name: 'IT & Software Development', icon: '💻' },
  { id: 'ai-ml', name: 'AI, ML & Data Science', icon: '🤖' },
  { id: 'hackathon', name: 'Hackathons & Coding', icon: '⚡' },
  { id: 'cybersecurity', name: 'Cybersecurity', icon: '🔒' },
  { id: 'gaming', name: 'Gaming & Esports', icon: '🎮' },
  { id: 'robotics', name: 'Robotics, IoT & Hardware', icon: '🦾' }
];

// Dummy Tech Events Data
export const TECH_EVENTS_DATA = [
  {
    id: 1,
    title: "TechCrunch Startup Battlefield",
    category: "startup",
    description: "Pitch your startup to top VCs and compete for  funding. Network with entrepreneurs and investors.",
    date: "2026-04-15",
    location: "San Francisco, CA",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=400&fit=crop",
    attendees: 500,
    price: ""
  },
  {
    id: 2,
    title: "React Summit 2026",
    category: "software",
    description: "The biggest React.js conference featuring core team members and industry experts sharing latest patterns.",
    date: "2026-05-20",
    location: "Amsterdam, Netherlands",
    image: "https://images.unsplash.com/photo-1633356122160-f477c6d8e847?w=800&h=400&fit=crop",
    attendees: 1200,
    price: ""
  },
  {
    id: 3,
    title: "AI & ML Global Conference",
    category: "ai-ml",
    description: "Explore cutting-edge AI/ML research, neural networks, and practical applications in industry.",
    date: "2026-06-10",
    location: "Boston, MA",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop",
    attendees: 800,
    price: ""
  },
  {
    id: 4,
    title: "Global Hackathon 2026",
    category: "hackathon",
    description: "48-hour coding marathon with  prize pool. Build innovative solutions for real-world problems.",
    date: "2026-04-28",
    location: "Online & 50 Cities",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&h=400&fit=crop",
    attendees: 5000,
    price: "Free"
  },
  {
    id: 5,
    title: "CyberSec Con 2026",
    category: "cybersecurity",
    description: "Learn about latest cybersecurity threats, ethical hacking, and enterprise security strategies.",
    date: "2026-07-05",
    location: "Washington, DC",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=400&fit=crop",
    attendees: 600,
    price: ""
  },
  {
    id: 6,
    title: "Esports Tech Expo",
    category: "gaming",
    description: "Discover latest gaming technologies, VR/AR innovations, and competitive gaming infrastructure.",
    date: "2026-05-15",
    location: "Los Angeles, CA",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&h=400&fit=crop",
    attendees: 2000,
    price: ""
  },
  {
    id: 7,
    title: "Robotics & IoT Innovation Summit",
    category: "robotics",
    description: "Showcase of autonomous robots, IoT devices, and smart home technologies shaping our future.",
    date: "2026-06-22",
    location: "Tokyo, Japan",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=400&fit=crop",
    attendees: 900,
    price: ""
  },
  {
    id: 8,
    title: "Y Combinator Demo Day",
    category: "startup",
    description: "Watch YC startups pitch to investors. Exclusive networking with founders and tech leaders.",
    date: "2026-05-01",
    location: "Silicon Valley, CA",
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&h=400&fit=crop",
    attendees: 300,
    price: ""
  },
  {
    id: 9,
    title: "DevOps Enterprise Summit",
    category: "software",
    description: "Advanced DevOps practices, CI/CD pipelines, containerization, and cloud-native architectures.",
    date: "2026-06-08",
    location: "Las Vegas, NV",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=400&fit=crop",
    attendees: 750,
    price: ""
  },
  {
    id: 10,
    title: "Data Science Week",
    category: "ai-ml",
    description: "Week-long event covering big data analytics, predictive modeling, and business intelligence.",
    date: "2026-07-12",
    location: "New York, NY",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop",
    attendees: 1000,
    price: ""
  },
  {
    id: 11,
    title: "CTF Security Challenge",
    category: "cybersecurity",
    description: "Capture The Flag competition for ethical hackers. Test your penetration testing skills.",
    date: "2026-05-25",
    location: "Berlin, Germany",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&h=400&fit=crop",
    attendees: 400,
    price: ""
  },
  {
    id: 12,
    title: "Game Developers Conference",
    category: "gaming",
    description: "Premier event for game developers featuring Unreal Engine 6, Unity innovations, and indie games.",
    date: "2026-06-18",
    location: "Seattle, WA",
    image: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=800&h=400&fit=crop",
    attendees: 3000,
    price: ""
  },
  {
    id: 13,
    title: "Smart Home Tech Fair",
    category: "robotics",
    description: "Latest IoT devices, home automation systems, and connected appliances for modern living.",
    date: "2026-07-20",
    location: "Dubai, UAE",
    image: "https://images.unsplash.com/photo-1558002038-1091a1661116?w=800&h=400&fit=crop",
    attendees: 1500,
    price: ""
  },
  {
    id: 14,
    title: "Women in Tech Leadership",
    category: "startup",
    description: "Empowering women in technology through mentorship, networking, and leadership workshops.",
    date: "2026-05-10",
    location: "Chicago, IL",
    image: "https://images.unsplash.com/photo-1573166314216-76c0e8bf8e8a?w=800&h=400&fit=crop",
    attendees: 450,
    price: ""
  },
  {
    id: 15,
    title: "Quantum Computing Symposium",
    category: "ai-ml",
    description: "Explore quantum algorithms, quantum machine learning, and the future of computing power.",
    date: "2026-08-05",
    location: "Zurich, Switzerland",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&h=400&fit=crop",
    attendees: 350,
    price: ""
  }
];
