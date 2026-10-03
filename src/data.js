// All site content lives here. Edit this file, not the markup.

export const site = {
  name: 'Tejas Gaware',
  title: 'Full stack engineer',
  description:
    'Tejas Gaware, full stack engineer. Rust backends, Tauri desktop apps, blockchain infrastructure and the interfaces on top. Based in Mumbai.',
  location: 'Mumbai, India',
  email: 'tjsoft92@gmail.com',
  github: 'https://github.com/7ejasVijay',
  linkedin: 'https://www.linkedin.com/in/tejas-gaware-1430a3190',
  resume: null, // e.g. '/resume.pdf': drop the file in public/ and set this
};

export const experience = [
  {
    period: '2021 - now',
    role: 'Software engineer, full stack and blockchain',
    company: 'Wow Internet Labz',
    // TODO: swap in specific bullets with numbers (latency, cost saved, users).
    points: [
      'Built high-performance backend services in Rust, tuned for scale and low latency.',
      'Led the blockchain node upgrade from v1.1.0 to v1.18.0.',
      'Shipped cross-chain bridge integrations for multi-chain asset transfers.',
      'Designed event-driven architecture for real-time transaction workflows.',
    ],
    tags: ['Rust', 'Python', 'Blockchain', 'Event-driven'],
  },
  {
    period: '2020, 6 months',
    role: 'Data science intern',
    company: 'Reliance Industries',
    points: ['Built processing and analysis pipelines for large datasets, applying statistical and ML techniques.'],
    tags: ['Python', 'ML'],
  },
  {
    period: '2019, 2 months',
    role: 'AI intern',
    company: 'Specialist Advisory & Intervention Group',
    points: ['Worked on model development and data preprocessing for applied AI projects.'],
    tags: ['AI'],
  },
];

// The first project is featured. The rest fill the bento grid in order.
export const featured = {
  name: 'Backtest Engine',
  desc: 'A backtesting app for the Indian stock market: a visual strategy builder, a Rust backtest engine and live scanner, and years of market data synced from your own broker. Built with SvelteKit and Tauri.',
  stack: ['Rust', 'Tauri', 'SvelteKit', 'DuckDB'],
};

export const projects = [
  {
    id: 'decentralized-exchange',
    name: 'Decentralized exchange',
    context: 'Wow Internet Labz, July 2025 - now',
    tagline: 'Its own blockchain built for trading, with a real orderbook, on Substrate.',
    desc: 'A Layer 1 blockchain built for trading: CEX-grade speed, a real orderbook, and users keep their own keys. I work on the orderbook and the blockchain node underneath it.',
    stack: ['Rust', 'Substrate', 'ISMP / Hyperbridge', 'GraphQL', 'PostgreSQL', 'TimescaleDB', 'AWS'],
    image: '/projects/dex-cover.svg',
    imageAlt: 'An orderbook of buy and sell orders, matched and then settled on the chain',
  },
  {
    name: 'Decentralized work marketplace',
    desc: 'A Substrate-based marketplace with on-chain dispute resolution. Won grant funding.',
    stack: ['Substrate', 'Rust'],
  },
  {
    id: 'data-pipeline',
    name: 'Automated data pipeline',
    context: 'Wow Internet Labz, 2021',
    tagline: 'Marketing and POS data, standardized and validated for the ML team. Rolled out across 30+ countries.',
    desc: 'Standardization and validation pipelines for marketing and POS data, driven by one JSON config and run from a Streamlit app. Delivery got 5x faster, rolled out in 30+ countries.',
    stack: ['Python', 'pandas', 'NumPy', 'Matplotlib', 'Streamlit'],
  },
  {
    id: 'multilingual-translation',
    name: 'Multilingual lecture translation',
    context: 'Wow Internet Labz, 2024',
    tagline: '2,816 lectures turned into Hindi, Marathi, Bengali and Telugu.',
    desc: 'A pipeline of seven Kafka services that translates English video lectures into Hindi, Marathi, Bengali and Telugu, with a dashboard to monitor it. Handles lectures of around two hours.',
    stack: ['Python', 'Kafka', 'Docker', 'Whisper', 'GPT'],
    image: '/projects/translation-dashboard.webp',
    imageAlt: 'The pipeline dashboard: processing time by stage, storage, and lectures available in each language',
  },
  {
    id: 'student-marketplace',
    name: 'Student work marketplace',
    context: 'Backend engineering',
    tagline: 'Real industry work for students in India, the USA and Canada, while still in college.',
    desc: 'A Fiverr style marketplace connecting students in India, the USA and Canada with real industry projects. I worked on the Python and FastAPI backend.',
    stack: ['Python', 'FastAPI'],
  },
  {
    id: 'face-recognition',
    name: 'Live face recognition with a GoPro',
    context: 'AI internship at SAIG, May 2019',
    desc: 'Integrated a GoPro camera with a one-shot learning face-recognition model to recognise registered participants live at a women’s run in Mumbai, where 2,200 women ran 3 km through the city. One reference photo per person was enough to pick them out of the camera feed.',
    stack: ['Python', 'Computer vision', 'One-shot learning', 'GoPro'],
    image: '/projects/face-recognition.webp',
    imageAlt: 'The system running on a group photo: each face boxed in red, with the name it recognised',
  },
];

export const skills = {
  Languages: ['Rust', 'TypeScript', 'JavaScript', 'Python', 'SQL', 'Bash'],
  Frontend: ['SvelteKit', 'Astro', 'Tauri', 'Tailwind', 'HTML/CSS'],
  Backend: ['Actix', 'Axum', 'FastAPI', 'Flask', 'REST', 'GraphQL'],
  Systems: ['Distributed systems', 'Async and concurrency', 'Event-driven design'],
  Blockchain: ['Substrate', 'Smart contracts', 'Cross-chain', 'Runtime dev'],
  Data: ['MySQL', 'MongoDB', 'DynamoDB', 'SQLite', 'Kafka'],
  Infra: ['Docker', 'AWS', 'Linux', 'Git'],
};

export const education = [
  // TODO: add years.
  { degree: 'M.Tech', school: 'MPSTME, NMIMS University, Mumbai' },
  { degree: 'B.E.', school: 'Rajiv Gandhi Institute of Technology, Mumbai University' },
];

export const interests = ['Anime', 'Mythology', 'History', 'Reading'];

// Tech logos, as simple-icons slugs (see BrandIcon.astro). The first 24 show on the homepage.
export const techGrid = [
  'rust', 'typescript', 'svelte', 'react', 'python', 'fastapi', 'tauri', 'astro',
  'tailwindcss', 'postgresql', 'mongodb', 'docker', 'apachekafka', 'graphql', 'git', 'linux',
  'javascript', 'flask', 'mysql', 'sqlite', 'duckdb', 'timescale', 'pandas', 'numpy',
  'streamlit', 'githubactions', 'paritysubstrate',
];
