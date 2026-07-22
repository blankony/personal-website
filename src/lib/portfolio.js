import { pool } from "./db";

const fallbackSkills = [
  "Python",
  "Next.js",
  "PostgreSQL",
  "Tailwind CSS",
  "Machine Learning",
  "Network Security",
  "4G LTE / 5G Architecture",
  "Lua Scripting",
].map((name, index) => ({ id: index + 1, name }));

const fallbackProjects = [
  {
    id: 1,
    title: "Analisis QoS Jaringan 4G LTE",
    technology: "Network Analysis",
    description: "Studi kasus mikrodinamika latensi pada game Mobile Legends: Bang Bang.",
  },
  {
    id: 2,
    title: "Indoor Positioning System",
    technology: "Deep Learning",
    description: "Implementasi hybrid model TabNet + GNN menggunakan dataset UJIIndoorLoc.",
  },
  {
    id: 3,
    title: "OBS Tournament Countdown",
    technology: "Lua Script",
    description: "Script otomatisasi countdown untuk overlay siaran langsung turnamen.",
  },
];

export async function getPortfolioData() {
  if (!process.env.DATABASE_URL) {
    return { projects: fallbackProjects, skills: fallbackSkills };
  }

  const [projectsResult, skillsResult] = await Promise.all([
    pool.query(`
      SELECT id, title, technology, description
      FROM projects
      WHERE is_featured = TRUE
      ORDER BY display_order, id
    `),
    pool.query(`
      SELECT id, name
      FROM skills
      ORDER BY display_order, id
    `),
  ]);

  return {
    projects: projectsResult.rows,
    skills: skillsResult.rows,
  };
}
