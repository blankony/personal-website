export const profile = {
  name: "Arya Setiawan",
  image: "/images/profile/me.jpg",
};

export const skills = [
  "Python",
  "Next.js",
  "JavaScript",
  "Tailwind CSS",
  "Machine Learning",
  "Network Security",
  "4G LTE / 5G Architecture",
  "Lua Scripting",
].map((name, index) => ({ id: index + 1, name }));

export const projects = [
  {
    id: 1,
    title: "Analisis QoS Jaringan 4G LTE",
    technology: "Network Analysis",
    description: "Studi kasus mikrodinamika latensi pada game Mobile Legends: Bang Bang.",
    image: "/images/profile/hero.png",
  },
  {
    id: 2,
    title: "Indoor Positioning System",
    technology: "Deep Learning",
    description: "Implementasi hybrid model TabNet + GNN menggunakan dataset UJIIndoorLoc.",
    image: "/images/profile/hero.png",
  },
  {
    id: 3,
    title: "OBS Tournament Countdown",
    technology: "Lua Script",
    description: "Script otomatisasi countdown untuk overlay siaran langsung turnamen.",
    image: "/images/profile/hero.png",
  },
];
