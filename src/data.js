// All site content lives here. Edit this file, not the markup.

export const site = {
  name: 'Tejas Gaware',
  title: 'Full stack engineer',
  description:
    'Tejas Gaware, full stack engineer. Rust backends, Tauri desktop apps, blockchain infrastructure and the interfaces on top. Based in Mumbai.',
  location: 'Mumbai, India',
  email: '7ejas.vijay@gmail.com',
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
  status: 'Personal project, in progress',
  name: 'Backtest Engine',
  // TODO: confirm frontend framework + charting lib, add a benchmark number.
  desc: 'A desktop app for backtesting trading strategies. A Rust engine runs fast, deterministic simulations; a full web frontend handles strategy setup, result charts and trade logs. Shipped as a native app with Tauri.',
  stack: ['Rust', 'Tauri', 'TypeScript'],
  metric: null, // e.g. { value: '120 ms', label: 'to backtest 1M candles' }
  links: [], // e.g. [{ label: 'Source', href: '...' }, { label: 'Download', href: '...' }]
  media: null, // e.g. '/backtest.webm' or '/backtest.png' in public/
};

export const projects = [
  {
    id: 'polkadex',
    name: 'Polkadex',
    context: 'Wow Internet Labz, July 2025 - now',
    tagline: 'A decentralized exchange with a real orderbook, built on Substrate.',
    desc: 'Polkadex is a Layer 1 blockchain built for trading: CEX-grade speed, a real orderbook, and users keep their own keys. I work on the orderbook and the blockchain node underneath it.',
    stack: ['Rust', 'Substrate', 'ISMP / Hyperbridge', 'GraphQL', 'PostgreSQL', 'TimescaleDB', 'AWS'],
    image: '/projects/polkadex.webp',
    imageAlt: 'The Polkadex Orderbook trading screen: price chart, live orderbook, recent trades and the buy/sell panel',
  },
  {
    name: 'Decentralized work marketplace',
    desc: 'A Substrate-based marketplace with on-chain dispute resolution. Won grant funding.',
    stack: ['Substrate', 'Rust'],
  },
  {
    name: 'Automated data pipeline',
    desc: 'Standardization and validation for marketing and POS data. Delivery got 5x faster, rolled out in 30+ countries.',
    stack: ['Python'],
  },
  {
    name: 'Multilingual lecture translation',
    desc: 'AI pipeline and dashboard translating English video lectures into Hindi, Telugu, Marathi and Bengali. Handles sessions over 2 hours.',
    stack: ['Python', 'AI', 'Dashboard'],
  },
  {
    name: 'Student work marketplace',
    desc: 'A Fiverr-style platform matching students in India, the US and Canada with industry projects.',
    stack: ['Web'],
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

// Tech logos, as simple-icons slugs (see BrandIcon.astro). The first 9 show on the homepage.
export const techGrid = ['rust', 'tauri', 'typescript', 'svelte', 'astro', 'tailwindcss', 'python', 'fastapi', 'docker', 'apachekafka', 'mongodb', 'paritysubstrate'];
