export const profile = {
  name: "Arya Setiawan",
  image: "/images/profile/me.jpg",
  email: "aryasetiawan112@gmail.com",
};

export const skills = [
  {
    id: 1,
    name: "RF & Antennas",
    items: ["Microstrip Antenna Design", "CST Studio Suite", "S11 / VSWR Analysis"],
  },
  {
    id: 2,
    name: "Networks",
    items: ["4G LTE / 5G Architecture", "Network Security", "QoS Measurement & Analysis"],
  },
  {
    id: 3,
    name: "Software & Data",
    items: ["Python for RF Analysis", "Machine Learning", "Next.js"],
  },
];

export const projects = [
  {
    id: 1,
    title: "Dual-Band Stacked Microstrip Antenna for GPS",
    technology: "BRIN Internship · Antenna Design",
    description:
      "Low-cost stacked microstrip antenna covering the GPS L1/L2 bands, designed during my research internship at BRIN.",
    image: null,
    results: [
      "Stacked-patch geometry targeting GPS L1 (1575 MHz) and L2 (1227 MHz)",
      "Return loss and radiation pattern tuned in CST Studio Suite",
      "Prototype fabricated and measured against simulation",
    ],
    link: null,
  },
  {
    id: 2,
    title: "Analisis QoS Jaringan 4G LTE",
    technology: "Network Analysis",
    description:
      "Case study on latency micro-dynamics in Mobile Legends: Bang Bang over a live LTE network.",
    image: null,
    results: [
      "LTE latency and jitter captured during live game sessions",
      "Delay micro-dynamics analyzed across match phases",
      "Findings written up as a structured case study",
    ],
    link: null,
  },
  {
    id: 3,
    title: "Indoor Positioning System",
    technology: "Deep Learning",
    description:
      "Hybrid TabNet + GNN model for Wi-Fi fingerprint positioning on the UJIIndoorLoc dataset.",
    image: null,
    results: [
      "Hybrid TabNet + GNN model on the UJIIndoorLoc dataset",
      "Graph built from access-point signal fingerprints across floors",
      "End-to-end training and evaluation pipeline in Python",
    ],
    link: null,
  },
  {
    id: 4,
    title: "OBS Tournament Countdown",
    technology: "Lua Script",
    description:
      "Countdown automation script for live tournament broadcast overlays.",
    image: null,
    results: [
      "Automated countdown overlays for live tournament broadcasts",
      "Scene control scripted in OBS via Lua",
      "Used in real tournament livestreams",
    ],
    link: null,
  },
];