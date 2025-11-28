import React, { useState, useEffect } from 'react';
import {
  Github,
  Rss,
  Terminal,
  Shield,
  Code2,
  Layers,
  Cpu,
  Hexagon,
  Activity,
  ExternalLink,
  Menu,
  X,
  Play,
  CheckCircle2,
  ChevronRight,
  Linkedin,
  Languages,
  Server,
  GitCommit,
  Database,
  Clock,
  Star,
  Users,
  TestTube2,
  FolderOpen,
  FileCode,
  ChevronLeft,
  MoreHorizontal,
  Calendar
} from 'lucide-react';

// --- CONFIGURACIÓN DE IDIOMAS ---
const TRANSLATIONS = {
  es: {
    nav: {
      about: 'Sobre Mí',
      projects: 'Proyectos',
      capabilities: 'Capacidades',
      blog: 'Blog',
    },
    hero: {
      openToWork: 'Open to work',
      greeting: 'Hola, soy',
      role: 'Software Craftsman & Security Enthusiast',
      description: (
        <>
          Más de 4 años construyendo software que no solo funciona, sino que perdura. Especializado en <strong className="text-slate-100">Clean Architecture</strong>, <strong className="text-slate-100">TDD</strong> y prácticas de <strong className="text-slate-100">Extreme Programming</strong>, fusionado con una mentalidad de <strong className="text-slate-100">seguridad defensiva</strong>.
        </>
      ),
      blogBtn: 'Blog',
      experience: 'Experiencia',
      yearsSuffix: 'Años' // NUEVO
    },
    projects: {
      sectionTitle: 'The Vault',
      subtitle: 'Proyectos destacados obtenidos vía API de GitHub.',
      viewAll: 'Ver todos los repositorios',
      viewMore: 'Ver más en GitHub',
      loading: 'Verificando estado de repositorios...',
      fallbackItems: [
        {
          name: 'ObsbotSharp',
          description: 'ObsbotSharp is an unofficial .NET library that lets you control OBSBOT cameras through their OSC (Open Sound Control) interface.',
          html_url: 'https://github.com/OmarIzquierdo/ObsbotSharp',
          topics: ['nuget', 'camera-control', 'obsbot'],
          stargazers_count: 3
        },
        {
          name: 'Blog',
          description: 'Personal blog with articles, notes, and cheatsheets on Software Development & Cybersecurity.',
          html_url: 'https://github.com/OmarIzquierdo/Blog',
          topics: ['programming', 'cybersecurity'],
          stargazers_count: 0
        },
        {
          name: 'GitMailFinder',
          description: 'GitMailFinder is a powerful tool designed to help you find email addresses embedded within the commit history of a specified GitHub user\'s repositories.',
          html_url: 'https://github.com/OmarIzquierdo/GitMailFinder',
          topics: ['osint', 'cybersecurity'],
          stargazers_count: 0
        }
      ]
    },
    contributions: {
      title: 'Contribution Graph',
      subtitle: 'Activity (Last Year)',
      total: 'Contributions',
      less: 'Less',
      more: 'More'
    },
    skills: {
      sectionTitle: 'Core Protocols',
      subtitle: 'Mi metodología combina la artesanía del software con la robustez de la seguridad informática.',
      items: [
        { name: 'Clean Code & SOLID' },
        { name: 'Hexagonal Architecture' },
        { name: 'Cybersecurity' },
        { name: 'TDD & Testing' },
        { name: 'CI/CD & DevOps' },
        { name: 'XP & Pair Programming' },
      ]
    },
    testRunner: {
      title: 'Test Explorer',
      suite: 'Test Hierarchy',
      status: 'Duration',
      successMsg: '✓ All Tests Passed',
      paginationPrev: 'PREV',
      paginationNext: 'NEXT'
    },
    systemMonitor: {
      mainTitle: 'Capabilities',
      mainSubtitle: 'Métricas en vivo y análisis de capacidades.',
      title: 'System Metrics',
      uptime: 'Tiempo Activo',
      commits: 'Estrellas Totales',
      projects: 'Repos Públicos',
      efficiency: 'Seguidores',
      status: 'LIVE',
      loading: 'Syncing...',
      yearsShort: 'Años' // NUEVO
    },
    footer: {
      title: '¿Hablamos de código?',
      desc: 'Siempre estoy abierto a discutir sobre arquitectura de software, nuevos retos de seguridad o colaborar en proyectos interesantes.',
      rights: 'Construido con React & Tailwind.',
    }
  },
  en: {
    nav: {
      about: 'About Me',
      projects: 'Projects',
      capabilities: 'Capabilities',
      blog: 'Blog',
    },
    hero: {
      openToWork: 'Open to work',
      greeting: 'Hi, I am',
      role: '> Software Craftsman & Security Enthusiast',
      description: (
        <>
          Over 4 years building software that not only works but endures. Specialized in <strong className="text-slate-100">Clean Architecture</strong>, <strong className="text-slate-100">TDD</strong>, and <strong className="text-slate-100">Extreme Programming</strong> practices, fused with a  <strong className="text-slate-100">defensive security mindset</strong>.
        </>
      ),
      blogBtn: 'Read Blog',
      experience: 'Experience',
      yearsSuffix: 'Years' // NUEVO
    },
    projects: {
      sectionTitle: 'The Vault',
      subtitle: 'Featured projects fetched from GitHub API.',
      viewAll: 'View all repositories',
      viewMore: 'View more on GitHub',
      loading: 'Checking repository status...',
      fallbackItems: [
        {
          name: 'ObsbotSharp',
          description: 'ObsbotSharp is an unofficial .NET library that lets you control OBSBOT cameras through their OSC (Open Sound Control) interface.',
          html_url: 'https://github.com/OmarIzquierdo/ObsbotSharp',
          topics: ['nuget', 'camera-control', 'obsbot'],
          stargazers_count: 3
        },
        {
          name: 'Blog',
          description: 'Personal blog with articles, notes, and cheatsheets on Software Development & Cybersecurity.',
          html_url: 'https://github.com/OmarIzquierdo/Blog',
          topics: ['programming', 'cybersecurity'],
          stargazers_count: 0
        },
        {
          name: 'GitMailFinder',
          description: 'GitMailFinder is a powerful tool designed to help you find email addresses embedded within the commit history of a specified GitHub user\'s repositories.',
          html_url: 'https://github.com/OmarIzquierdo/GitMailFinder',
          topics: ['osint', 'cybersecurity'],
          stargazers_count: 0
        }
      ]
    },
    contributions: {
      title: 'Contribution Graph',
      subtitle: 'Activity (Last Year)',
      total: 'Contributions',
      less: 'Less',
      more: 'More'
    },
    skills: {
      sectionTitle: 'Core Protocols',
      subtitle: 'My methodology combines software craftsmanship with the robustness of information security.',
      items: [
        { name: 'Clean Code & SOLID' },
        { name: 'Hexagonal Architecture' },
        { name: 'Cybersecurity' },
        { name: 'TDD & Testing' },
        { name: 'CI/CD & DevOps' },
        { name: 'XP & Pair Programming' },
      ]
    },
    testRunner: {
      title: 'Test Explorer',
      suite: 'Test Hierarchy',
      status: 'Duration',
      successMsg: '✓ All Tests Passed',
      paginationPrev: 'PREV',
      paginationNext: 'NEXT'
    },
    systemMonitor: {
      mainTitle: 'Capabilities',
      mainSubtitle: 'Metrics in real-time and capabilities analysis.',
      title: 'System Metrics',
      uptime: 'Career Uptime',
      commits: 'Total Stars',
      projects: 'Active Projects',
      efficiency: 'Code Efficiency',
      status: 'LIVE',
      yearsShort: 'Yrs' // NUEVO
    },
    footer: {
      title: 'Let\'s talk code?',
      desc: 'I am always open to discussing software architecture, new security challenges, or collaborating on interesting projects.',
      rights: 'Built with React & Tailwind.',
    }
  }
};

// --- DATOS AGRUPADOS ---
const TEST_SUITES = [
  {
    id: 'skill_set_01',
    name: 'Craftsmanship_&_Quality.Tests',
    tests: [
      { id: 'c1', name: 'Applies_Clean_Code', status: 'passing', duration: '4ms' },
      { id: 'c2', name: 'Follow_TDD_Practices', status: 'passing', duration: '12ms' },
      { id: 'c3', name: 'Rely_On_SOLID_Principles', status: 'passing', duration: '2ms' },
      { id: 'c4', name: 'Refactors_Continuously', status: 'passing', duration: '8ms' },
      { id: 'c5', name: 'Delivers_Small_Releases', status: 'passing', duration: '5ms' },
      { id: 'c6', name: 'Simplifies_Design_Logic', status: 'passing', duration: '3ms' }
    ]
  },
  {
    id: 'skill_set_02',
    name: 'Architecture_&_Design.Tests',
    tests: [
      { id: 'a1', name: 'Enforces_Hexagonal_Architecture', status: 'passing', duration: '45ms' },
      { id: 'a2', name: 'Isolates_Domain_Logic', status: 'passing', duration: '22ms' },
      { id: 'a3', name: 'Decouples_Infrastructure', status: 'passing', duration: '18ms' },
      { id: 'a4', name: 'Implements_Design_Patterns', status: 'passing', duration: '30ms' },
      { id: 'a5', name: 'Encapsulates_Business_Rules', status: 'passing', duration: '7ms' },
      { id: 'a6', name: 'Implements_Solid_Principles_When_Needed', status: 'passing', duration: '14ms' },
    ]
  },
  {
    id: 'skill_set_03',
    name: 'Security.Security_&_Ops.Tests',
    tests: [
      { id: 's1', name: 'Mitigates_OWASP_Risks', status: 'passing', duration: '12ms' },
      { id: 's2', name: 'Automates_CI_CD', status: 'passing', duration: '1ms' },
      { id: 's3', name: 'Traces_Audit_Logs', status: 'passing', duration: '2ms' },
      { id: 's4', name: 'Manages_Secrets_Safely', status: 'passing', duration: '4ms' },
      { id: 's5', name: 'Encrypts_Sensitive_Payloads', status: 'passing', duration: '8ms' },
      { id: 's6', name: 'Secures_API_Endpoints', status: 'passing', duration: '3ms' }
    ]
  },
  {
    id: 'skill_set_04',
    name: 'Core_Tech_Stack.Tests',
    tests: [
      { id: 'dp1', name: 'Mastered_DotNet_Framework', status: 'passing', duration: '180ms' },
      { id: 'dp2', name: 'Writes_Idiomatic_CSharp', status: 'passing', duration: '45ms' },
      { id: 'dp3', name: 'Contributes_OpenSource', status: 'passing', duration: '21ms' },
      { id: 'dp4', name: 'Designs_Restful_APIs', status: 'passing', duration: '5ms' },
      { id: 'dp5', name: 'Optimizes_Async_Await', status: 'passing', duration: '12ms' },
      { id: 'dp6', name: 'Handles_Exceptions_Gracefully', status: 'passing', duration: '2ms' }
    ]
  }
];

// --- COMPONENTE TOGGLE PERSONALIZADO ---
const LanguageToggle = ({ lang, toggleLang }) => (
  <button
    onClick={toggleLang}
    className="relative h-8 w-20 bg-black border border-slate-800 rounded-full p-1 transition-all hover:border-purple-500/50 group shadow-lg shadow-purple-900/20 cursor-pointer"
    aria-label="Toggle Language"
  >
    <div
      className={`absolute top-1 bottom-1 w-[calc(50%-4px)] bg-purple-600 rounded-full transition-all duration-300 ease-out shadow-[0_0_10px_rgba(147,51,234,0.5)] ${lang === 'es' ? 'left-1' : 'left-[calc(50%)]'
        }`}
    />
    <div className="relative z-10 flex w-full h-full items-center justify-between px-1">
      <span className={`w-1/2 text-center text-[10px] font-bold tracking-wider transition-colors duration-300 ${lang === 'es' ? 'text-white' : 'text-slate-600 group-hover:text-slate-400'}`}>
        ES
      </span>
      <span className={`w-1/2 text-center text-[10px] font-bold tracking-wider transition-colors duration-300 ${lang === 'en' ? 'text-white' : 'text-slate-600 group-hover:text-slate-400'}`}>
        EN
      </span>
    </div>
  </button>
);

// --- COMPONENTE LOGO X (Twitter) CUSTOM ---
const XLogo = ({ className }) => (
  <svg
    viewBox="0 0 24 24"
    aria-hidden="true"
    className={className}
    fill="currentColor"
  >
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
  </svg>
);

// --- COMPONENTE GRAFICO DE CONTRIBUCIONES (FLOTANTE) ---
const ContributionGraph = ({ t }) => {
  const [contributions, setContributions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [totalContributions, setTotalContributions] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('https://github-contributions-api.jogruber.de/v4/OmarIzquierdo?y=last');
        if (!res.ok) throw new Error('Failed to fetch');

        const data = await res.json();
        setContributions(data.contributions || []);

        const total = data.contributions
          ? data.contributions.reduce((acc, day) => acc + day.count, 0)
          : 0;
        setTotalContributions(total);

      } catch (error) {
        console.error("Error fetching contributions:", error);
        const dummyData = Array.from({ length: 365 }, (_, i) => ({
          date: new Date().toISOString(),
          count: Math.random() > 0.7 ? Math.floor(Math.random() * 5) : 0,
          level: Math.random() > 0.7 ? Math.floor(Math.random() * 4) : 0
        }));
        setContributions(dummyData);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const getLevelColor = (level) => {
    switch (level) {
      case 0: return 'bg-slate-800/30';
      case 1: return 'bg-emerald-900/50';
      case 2: return 'bg-emerald-700/60';
      case 3: return 'bg-emerald-500/80';
      case 4: return 'bg-emerald-400';
      default: return 'bg-slate-800/30';
    }
  };

  return (
    <div className="w-full flex flex-col items-center mb-16 relative z-30">
      {/* Title Minimalista */}
      <div className="flex flex-col sm:flex-row items-center gap-5 mb-6 opacity-80 hover:opacity-100 transition-opacity text-center">
        <div className="flex items-center gap-2">
          <Github className="w-5 h-5 text-slate-400" />
          <span className="text-slate-300 font-mono text-sm tracking-widest uppercase">{t.contributions.title}</span>
        </div>
        {totalContributions > 0 && (
          <span className="text-emerald-500 font-mono text-xs border border-emerald-500/30 px-2 py-0.5 rounded-full">
            {totalContributions} {t.contributions.total}
          </span>
        )}
      </div>

      {/* Heatmap "Flotante" */}
      <div className="relative group p-4 rounded-2xl transition-all duration-500 hover:shadow-[0_0_40px_rgba(16,185,129,0.1)] max-w-full">
        {/* Glow effect behind */}
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 to-blue-500/5 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

        {/* Scrollable Container */}
        <div className="relative w-full max-w-5xl overflow-x-auto pb-4 scrollbar-hide flex justify-start md:justify-center">
          {loading ? (
            <div className="h-20 flex items-center justify-center text-slate-500 animate-pulse text-sm font-mono px-10">
              {t.projects.loading}
            </div>
          ) : (
            <div className="flex gap-[3px]">
              {Array.from({ length: Math.ceil(contributions.length / 7) }).map((_, weekIndex) => (
                <div key={weekIndex} className="flex flex-col gap-[3px]">
                  {contributions.slice(weekIndex * 7, (weekIndex + 1) * 7).map((day, dayIndex) => (
                    <div
                      key={`${weekIndex}-${dayIndex}`}
                      className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-[2px] ${getLevelColor(day.level)} transition-all duration-300 hover:scale-125 hover:z-10 hover:border hover:border-white/50`}
                      title={`${day.count} contributions`}
                    ></div>
                  ))}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Legend Minimalista */}
      <div className="flex items-center gap-2 mt-2 text-[10px] text-slate-600 font-mono opacity-60">
        <span>{t.contributions.less}</span>
        <div className="flex gap-1">
          <div className="w-2.5 h-2.5 rounded-[2px] bg-slate-800/30"></div>
          <div className="w-2.5 h-2.5 rounded-[2px] bg-emerald-900/50"></div>
          <div className="w-2.5 h-2.5 rounded-[2px] bg-emerald-700/60"></div>
          <div className="w-2.5 h-2.5 rounded-[2px] bg-emerald-500/80"></div>
          <div className="w-2.5 h-2.5 rounded-[2px] bg-emerald-400"></div>
        </div>
        <span>{t.contributions.more}</span>
      </div>
    </div>
  );
};

// --- COMPONENTE SYSTEM MONITOR CON GITHUB API ---
const SystemMonitor = ({ t }) => {
  const [stats, setStats] = useState({
    repos: 6,
    followers: 3,
    stars: 3,
    years: '+4', // Removed "Yrs" from here
    loading: false
  });

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        const userRes = await fetch('https://api.github.com/users/OmarIzquierdo');
        if (!userRes.ok) return;

        const userData = await userRes.json();
        const reposRes = await fetch('https://api.github.com/users/OmarIzquierdo/repos?per_page=100');
        const reposData = await reposRes.json();

        const totalStars = Array.isArray(reposData)
          ? reposData.reduce((acc, repo) => acc + repo.stargazers_count, 0)
          : 0;

        const createdDate = new Date(userData.created_at);
        const now = new Date();
        const yearsActive = (now.getFullYear() - createdDate.getFullYear()) +
          (now.getMonth() - createdDate.getMonth()) / 12;

        setStats({
          repos: userData.public_repos,
          followers: userData.followers,
          stars: totalStars,
          years: yearsActive.toFixed(1),
          loading: false
        });

      } catch (error) {
        console.log("GitHub API rate limit reached or network error. Using cached data.");
      }
    };

    fetchGitHubData();
  }, []);

  return (
    <div className="bg-slate-900/80 backdrop-blur-sm border border-slate-800 rounded-lg p-6 font-mono shadow-2xl h-auto min-h-[450px] lg:h-full flex flex-col justify-between">
      <div>
        <div className="flex justify-between items-center border-b border-slate-800 pb-4 mb-6">
          <div className="flex items-center gap-2">
            <Activity className="w-5 h-5 text-emerald-500" />
            <span className="text-slate-300 font-bold uppercase tracking-widest text-xs">{t.systemMonitor.title}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className={`relative flex h-2 w-2`}>
              <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${stats.loading ? 'bg-yellow-400' : 'bg-emerald-400'}`}></span>
              <span className={`relative inline-flex rounded-full h-2 w-2 ${stats.loading ? 'bg-yellow-500' : 'bg-emerald-500'}`}></span>
            </span>
            <span className={`${stats.loading ? 'text-yellow-500' : 'text-emerald-500'} text-xs font-bold`}>
              {stats.loading ? t.systemMonitor.loading : t.systemMonitor.status}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {/* Uptime */}
          <div className="bg-slate-950/50 p-4 rounded border border-slate-800 flex flex-col justify-between group hover:border-emerald-500/30 transition-colors">
            <div className="flex justify-between items-start mb-2">
              <Clock className="w-4 h-4 text-slate-500" />
              <span className="text-xs text-slate-500 font-mono">SYS_UP</span>
            </div>
            <div>
              <div className="text-2xl font-bold text-white mb-1">
                {stats.years} <span className="text-base text-slate-400 font-normal">{t.systemMonitor.yearsShort}</span>
              </div>
              <div className="text-xs text-slate-400">{t.systemMonitor.uptime}</div>
            </div>
            <div className="w-full h-1 bg-slate-800 mt-3 rounded-full overflow-hidden">
              <div className="h-full bg-emerald-500 w-[85%] rounded-full animate-pulse"></div>
            </div>
          </div>

          {/* Stars */}
          <div className="bg-slate-950/50 p-4 rounded border border-slate-800 flex flex-col justify-between group hover:border-yellow-500/30 transition-colors">
            <div className="flex justify-between items-start mb-2">
              <Star className="w-4 h-4 text-slate-500" />
              <span className="text-xs text-slate-500 font-mono">IMPACT</span>
            </div>
            <div>
              <div className="text-2xl font-bold text-white mb-1">{stats.stars}</div>
              <div className="text-xs text-slate-400">{t.systemMonitor.commits}</div>
            </div>
            <div className="w-full h-1 bg-slate-800 mt-3 rounded-full overflow-hidden">
              <div className="h-full bg-yellow-500 w-[60%] rounded-full"></div>
            </div>
          </div>

          {/* Repos */}
          <div className="bg-slate-950/50 p-4 rounded border border-slate-800 flex flex-col justify-between group hover:border-purple-500/30 transition-colors">
            <div className="flex justify-between items-start mb-2">
              <Database className="w-4 h-4 text-slate-500" />
              <span className="text-xs text-slate-500 font-mono">DB_REFS</span>
            </div>
            <div>
              <div className="text-2xl font-bold text-white mb-1">{stats.repos}</div>
              <div className="text-xs text-slate-400">{t.systemMonitor.projects}</div>
            </div>
            <div className="w-full h-1 bg-slate-800 mt-3 rounded-full overflow-hidden">
              <div className="h-full bg-purple-500 w-[75%] rounded-full"></div>
            </div>
          </div>

          {/* Followers */}
          <div className="bg-slate-950/50 p-4 rounded border border-slate-800 flex flex-col justify-between group hover:border-blue-500/30 transition-colors">
            <div className="flex justify-between items-start mb-2">
              <Users className="w-4 h-4 text-slate-500" />
              <span className="text-xs text-slate-500 font-mono">NET_NODES</span>
            </div>
            <div>
              <div className="text-2xl font-bold text-white mb-1">{stats.followers}</div>
              <div className="text-xs text-slate-400">{t.systemMonitor.efficiency}</div>
            </div>
            <div className="w-full h-1 bg-slate-800 mt-3 rounded-full overflow-hidden">
              <div className="h-full bg-blue-500 w-[40%] rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4 p-3 bg-black rounded border border-slate-800 text-[10px] font-mono text-slate-500 h-auto min-h-[6rem] relative flex flex-col justify-end">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black pointer-events-none opacity-30"></div>
        <div className="relative z-10 flex flex-col gap-0.5">
          <p className="break-all leading-tight">{'>'} Connecting to api.github.com/users/OmarIzquierdo... [OK]</p>
          <p className="break-words leading-tight">{'>'} Fetching repositories... {stats.loading ? '[WAIT]' : '[OK]'}</p>
          <p className="break-words leading-tight">{'>'} Calculating aggregate statistics... {stats.loading ? '...' : '[DONE]'}</p>
          <p className="text-emerald-500 animate-pulse break-words leading-tight">{'>'} Data stream established_</p>
        </div>
      </div>
    </div>
  );
};

// --- COMPONENTE TEST RUNNER PAGINADO ---
const PaginatedTestRunner = ({ t }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Manejo de paginación
  const nextPage = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentPage((prev) => (prev + 1) % TEST_SUITES.length);
      setIsAnimating(false);
    }, 200);
  };

  const prevPage = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentPage((prev) => (prev - 1 + TEST_SUITES.length) % TEST_SUITES.length);
      setIsAnimating(false);
    }, 200);
  };

  const currentSuite = TEST_SUITES[currentPage];

  return (
    <div className="bg-slate-900/80 backdrop-blur-sm border border-slate-800 rounded-lg flex flex-col h-auto min-h-[450px] lg:h-full font-mono shadow-2xl relative overflow-hidden group">
      {/* Header Estilo IDE con Controles Mac */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-slate-800 bg-slate-950/50">
        <div className="flex items-center gap-4">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500/50 hover:bg-red-500 transition-colors"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/50 hover:bg-yellow-500 transition-colors"></div>
            <div className="w-3 h-3 rounded-full bg-green-500/50 hover:bg-green-500 transition-colors"></div>
          </div>
          <span className="text-slate-200 font-bold text-sm tracking-wide">{t.testRunner.title}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[10px] bg-slate-800 px-2 py-0.5 rounded text-slate-400 border border-slate-700">
            v2.1.0
          </span>
        </div>
      </div>

      {/* Area de Tests - Con Scroll si es necesario */}
      <div className="flex-1 p-5 overflow-y-auto relative h-full">
        {/* Barra lateral decorativa (Tree Guide) */}
        <div className="absolute left-8 top-5 bottom-5 w-px bg-slate-800/80"></div>

        {/* Contenido Animado */}
        <div className={`transition-opacity duration-200 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>

          {/* Nombre de la "Clase" o Suite - Más grande */}
          <div className="flex items-center gap-3 mb-4 text-slate-200 font-bold">
            <div className="p-1.5 bg-slate-800 border border-slate-700 rounded text-blue-400 z-10 shadow-sm">
              <FileCode className="w-4 h-4" />
            </div>
            <span className="text-sm tracking-tight">{currentSuite.name}.cs</span>
          </div>

          {/* Lista de Tests - Más espaciada y legible */}
          <div className="space-y-2 ml-7">
            {currentSuite.tests.map((test, idx) => (
              <div key={test.id} className="flex items-center justify-between group/item py-2 px-3 hover:bg-slate-800/60 rounded-md cursor-default border border-transparent hover:border-slate-700/50 transition-all duration-200">
                <div className="flex items-center gap-3 relative flex-1 min-w-0">
                  {/* Conector visual (Rama) */}
                  <div className="absolute -left-[23px] top-1/2 w-4 h-px bg-slate-800"></div>

                  {test.status === 'passing' ? (
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  ) : (
                    <div className="w-4 h-4 rounded-full border border-slate-600"></div>
                  )}
                  {/* Texto del test más legible y con truncamiento si es muy largo */}
                  <span className="text-sm text-slate-400 group-hover/item:text-slate-100 transition-colors truncate font-medium">
                    {test.name}
                  </span>
                </div>

                {/* Sección Derecha: Duración + Badge PASS */}
                <div className="flex items-center gap-3 pl-4">
                  <span className="text-[11px] text-slate-600 font-mono group-hover/item:text-slate-500 transition-colors whitespace-nowrap hidden sm:block">
                    {test.duration}
                  </span>
                  <span className="text-[10px] font-bold text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20 shadow-[0_0_10px_rgba(16,185,129,0.1)] tracking-wider">
                    PASS
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer / Paginación */}
      <div className="bg-slate-950 p-3 border-t border-slate-800 flex items-center justify-between mt-auto">
        <div className="text-xs text-emerald-500 font-bold flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          {t.testRunner.successMsg}
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={prevPage}
            className="p-1.5 hover:bg-slate-800 rounded text-slate-400 hover:text-white transition-colors disabled:opacity-50 border border-transparent hover:border-slate-700"
            title="Previous Suite"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <span className="text-xs text-slate-500 font-mono min-w-[3rem] text-center font-bold">
            {currentPage + 1} / {TEST_SUITES.length}
          </span>
          <button
            onClick={nextPage}
            className="p-1.5 hover:bg-slate-800 rounded text-slate-400 hover:text-white transition-colors disabled:opacity-50 border border-transparent hover:border-slate-700"
            title="Next Suite"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};


// --- Componentes UI Reutilizables ---

const SectionTitle = ({ children, subtitle }) => (
  <div className="mb-12 text-center">
    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-mono tracking-tight">
      <span className="text-emerald-400">&lt;</span>
      {children}
      <span className="text-emerald-400">/&gt;</span>
    </h2>
    {subtitle && <p className="text-slate-400 max-w-2xl mx-auto">{subtitle}</p>}
  </div>
);

const SkillCard = ({ icon: Icon, title, color }) => (
  <div className="bg-slate-800/50 border border-slate-700 p-6 rounded-xl hover:border-emerald-500/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(16,185,129,0.1)] group h-full flex items-center gap-4">
    <div className="p-3 bg-slate-900 rounded-lg group-hover:bg-emerald-500/10 transition-colors">
      <Icon className={`w-6 h-6 ${color}`} />
    </div>
    <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors">{title}</h3>
  </div>
);

const ProjectCard = ({ title, description, tags, link, stars }) => (
  <div className="relative group overflow-hidden bg-slate-900 border border-slate-800 rounded-xl hover:border-violet-500/50 transition-all duration-300 flex flex-col h-full">
    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 to-violet-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
    <div className="p-6 flex-1">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors">{title}</h3>

        <div className="flex items-center gap-2">
          {stars > 0 && (
            <div className="flex items-center gap-1 px-2 py-1 bg-slate-950 rounded-lg border border-slate-800 text-yellow-500 text-xs font-mono font-bold">
              <Star className="w-3 h-3 fill-yellow-500" />
              <span>{stars}</span>
            </div>
          )}
          <div className="p-2 bg-slate-950 rounded-lg">
            <Github className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors" />
          </div>
        </div>

      </div>
      <p className="text-slate-400 mb-6 text-sm">{description}</p>
    </div>
    <div className="px-6 py-4 bg-slate-950/50 border-t border-slate-800 mt-auto flex justify-between items-center">
      <div className="flex flex-wrap gap-2">
        {tags && tags.slice(0, 3).map((tag, i) => (
          <span key={i} className="text-xs font-mono px-2 py-1 rounded bg-slate-900 text-emerald-200 border border-slate-700">
            {tag}
          </span>
        ))}
      </div>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
        className="text-sm font-bold text-slate-300 hover:text-white transition-colors"
      >
        <ExternalLink className="w-4 h-4" />
      </a>
    </div>
  </div>
);

// --- Componente Principal ---

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [typedText, setTypedText] = useState('');
  const [projects, setProjects] = useState([]);
  const [isLoadingProjects, setIsLoadingProjects] = useState(true);
  const [experienceYears, setExperienceYears] = useState('+4');

  const [lang, setLang] = useState('es');
  const t = TRANSLATIONS[lang];

  const fullText = "> Software Craftsman & Security Enthusiast";

  const toggleLang = () => {
    setLang(prev => prev === 'es' ? 'en' : 'es');
  };

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setTypedText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) clearInterval(timer);
    }, 50);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const fetchProjects = async () => {
      setIsLoadingProjects(true);
      try {
        const res = await fetch('https://api.github.com/users/OmarIzquierdo/repos?sort=updated&per_page=20');
        if (!res.ok) return;

        const data = await res.json();

        const featuredProjects = data
          .sort((a, b) => b.stargazers_count - a.stargazers_count)
          .slice(0, 3);

        setProjects(featuredProjects);
      } catch (error) {
        console.log("Using fallback projects data due to API limit");
      } finally {
        setIsLoadingProjects(false);
      }
    };

    fetchProjects();
  }, []);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await fetch('https://api.github.com/users/OmarIzquierdo');
        if (res.ok) {
          const data = await res.json();
          const startYear = new Date(data.created_at).getFullYear();
          const currentYear = new Date().getFullYear();
          const years = currentYear - startYear;
          setExperienceYears(years > 0 ? `+${years}` : '+1');
        }
      } catch (error) {
        console.log("Using default experience data due to API limit");
      }
    };
    fetchProfile();
  }, []);

  const staticSkillsData = [
    { icon: Code2, color: 'text-emerald-400' },
    { icon: Hexagon, color: 'text-blue-400' },
    { icon: Shield, color: 'text-emerald-400' },
    { icon: TestTube2, color: 'text-purple-400' },
    { icon: Layers, color: 'text-orange-400' },
    { icon: Users, color: 'text-pink-400' },
  ];

  const displayProjects = (projects.length > 0 ? projects : t.projects.fallbackItems).map(p => ({
    title: p.name,
    description: p.description || "No description provided.",
    tags: p.topics || [p.language || 'Code'],
    link: p.html_url,
    stars: p.stargazers_count
  }));

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-emerald-500/30 selection:text-emerald-200">
      {/* FIX GLOBAL BACKGROUND:
        Esta etiqueta style asegura que el fondo del documento (body/html) sea del mismo color
        que el contenedor principal. Esto previene las "líneas blancas" causadas por el 
        renderizado de subpíxeles al redimensionar la ventana o hacer zoom.
      */}
      <style>{`
        body, html {
          background-color: #020617; /* Tailwind slate-950 */
          color: #e2e8f0;
        }
      `}</style>

      {/* Navbar */}
      <nav className="fixed w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <Terminal className="w-6 h-6 text-emerald-400" />
              <span className="font-mono font-bold text-white tracking-tighter">Status: <span className="text-emerald-400">Online</span></span>
            </div>

            <div className="hidden md:flex items-center gap-6">
              <div className="flex items-baseline space-x-8">
                <a href="#about" className="hover:text-emerald-400 transition-colors px-3 py-2 rounded-md text-sm font-medium">{t.nav.about}</a>
                <a href="#projects" className="hover:text-emerald-400 transition-colors px-3 py-2 rounded-md text-sm font-medium">{t.nav.projects}</a>
                <a href="#test-runner" className="hover:text-emerald-400 transition-colors px-3 py-2 rounded-md text-sm font-medium">{t.nav.capabilities}</a>
                <a href="https://omarizquierdo.dev/blog" target="_blank" className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/50 hover:bg-emerald-500 hover:text-white transition-all px-4 py-2 rounded-md text-sm font-bold flex items-center gap-2">
                  <Rss className="w-4 h-4" /> {t.nav.blog}
                </a>
              </div>
              <LanguageToggle lang={lang} toggleLang={toggleLang} />
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center gap-4">
              <LanguageToggle lang={lang} toggleLang={toggleLang} />
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-slate-400 hover:text-white p-2">
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu />}
              </button>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-slate-900 border-b border-slate-800">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#about" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium hover:bg-slate-800">{t.nav.about}</a>
              <a href="#projects" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium hover:bg-slate-800">{t.nav.projects}</a>
              <a href="#test-runner" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium hover:bg-slate-800">{t.nav.capabilities}</a>
              <a href="https://omarizquierdo.dev/blog" className="block px-3 py-2 text-emerald-400 font-bold">{t.nav.blog}</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="about" className="min-h-[60vh] flex flex-col md:flex-row items-center justify-center gap-16 pt-20 pb-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto text-center md:text-left">

        {/* BLOQUE IZQUIERDO (Solo Imagen) */}
        <div className="flex flex-col items-center gap-6 flex-shrink-0">

          {/* BADGE "OPEN TO WORK" */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/30 text-violet-300 text-sm font-mono shadow-[0_0_15px_rgba(139,92,246,0.1)]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-violet-500"></span>
            </span>
            {t.hero.openToWork}
          </div>

          <div className="relative w-64 h-64 md:w-80 md:h-80">
            <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500 to-violet-500 rounded-full blur-2xl opacity-20 animate-pulse"></div>
            <div className="absolute inset-2 bg-slate-950 rounded-full z-10 p-2">
              <img
                src="https://github.com/OmarIzquierdo.png"
                alt="Omar Izquierdo"
                className="w-full h-full rounded-full object-cover border-2 border-slate-800 transition-all duration-500"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://ui-avatars.com/api/?name=Omar+Izquierdo&background=0f172a&color=10b981&size=512";
                }}
              />
            </div>
            <div className="absolute -bottom-4 -right-4 z-20 bg-slate-900 border border-slate-700 p-4 rounded-xl shadow-xl flex items-center gap-3">
              <div className="p-2 bg-emerald-500/20 rounded-lg">
                <Code2 className="w-6 h-6 text-emerald-400" />
              </div>
              <div>
                <p className="text-xs text-slate-400 font-mono">{t.hero.experience}</p>
                <p className="text-lg font-bold text-white">{experienceYears} {t.hero.yearsSuffix}</p>
              </div>
            </div>
          </div>
        </div>

        {/* BLOQUE DERECHO (Texto) */}
        <div className="flex-1 space-y-8">
          <div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight">
              {t.hero.greeting} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500">
                Omar Izquierdo
              </span>
            </h1>

            <div className="bg-slate-900 rounded-lg p-4 border-l-4 border-emerald-500 font-mono text-sm shadow-lg shadow-emerald-900/10 max-w-xl mx-auto md:mx-0">
              <div className="flex gap-1.5 mb-3">
                <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
              </div>
              <div className="text-emerald-500/80 text-left">
                $ whoami<br />
                <span className="text-slate-300">{typedText}</span><span className="animate-pulse">_</span>
              </div>
            </div>

          </div>

          <p className="text-lg text-slate-400 max-w-2xl leading-relaxed mx-auto md:mx-0">
            {t.hero.description}
          </p>

          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <a
              href="https://github.com/OmarIzquierdo"
              target="_blank"
              className="flex items-center gap-2 px-4 py-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-white font-medium transition-all border border-slate-700 hover:border-emerald-500/50"
            >
              <Github className="w-5 h-5" />
              Github
            </a>
            <a
              href="https://omarizquierdo.dev/blog"
              target="_blank"
              className="flex items-center gap-2 px-4 py-3 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)]"
            >
              {t.hero.blogBtn} <ChevronRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* GitHub Projects Section */}
      <section id="projects" className="pt-20 pb-5 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 font-mono">
              <span className="text-violet-400">./</span>{t.projects.sectionTitle}
            </h2>
            <p className="text-slate-400">{t.projects.subtitle}</p>
          </div>
          <a
            href="https://github.com/OmarIzquierdo?tab=repositories"
            target="_blank"
            className="hidden md:flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors font-mono text-sm mt-4 md:mt-0"
          >
            {t.projects.viewAll} <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        {isLoadingProjects ? (
          <div className="text-center py-20 text-slate-500 font-mono animate-pulse">
            {t.projects.loading}
          </div>
        ) : (
          <div className="grid md:grid-cols-3 gap-6">
            {displayProjects.map((item, index) => (
              <ProjectCard
                key={index}
                title={item.title}
                description={item.description}
                tags={item.tags}
                link={item.link}
                stars={item.stars}
              />
            ))}
          </div>
        )}

        <div className="mt-12 text-center md:hidden">
          <a
            href="https://github.com/OmarIzquierdo"
            className="inline-flex items-center gap-2 text-emerald-400 font-bold"
          >
            {t.projects.viewMore} <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* Test Runner & System Monitor Section */}
      <section id="test-runner" className="pt-12 pb-10 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* New Section Title (./ Metrics) */}
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 font-mono">
              <span className="text-violet-400">./</span>{t.systemMonitor.mainTitle}
            </h2>
            <p className="text-slate-400">{t.systemMonitor.mainSubtitle}</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-auto lg:min-h-[450px] relative z-20 mb-24">

            {/* COLUMNA IZQUIERDA: System Monitor */}
            <SystemMonitor t={t} />

            {/* COLUMNA DERECHA: Paginated Test Runner */}
            <PaginatedTestRunner t={t} />

          </div>

          {/* Contribution Graph (Flotante y Centrado) */}
          <ContributionGraph t={t} />

        </div>
      </section>

      {/* Methodology Section */}
      <section id="skills" className="pt-20 lg:pt-32 pb-20 bg-slate-900/50 border-y border-slate-800/50 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle subtitle={t.skills.subtitle}>
            {t.skills.sectionTitle}
          </SectionTitle>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.skills.items.map((item, index) => (
              <SkillCard
                key={index}
                title={item.name}
                icon={staticSkillsData[index].icon}
                color={staticSkillsData[index].color}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Footer / Call to Action */}
      <footer className="bg-slate-950 border-t border-slate-800 pt-20 pb-10">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">{t.footer.title}</h2>
          <p className="text-slate-400 mb-8 max-w-lg mx-auto">
            {t.footer.desc}
          </p>

          <div className="flex justify-center gap-6 mb-12">
            <a href="https://x.com/0x1_dev" className="p-3 bg-slate-900 rounded-full hover:bg-slate-800 text-slate-400 hover:text-cyan-400 transition-all border border-slate-800 hover:border-cyan-500/30">
              <XLogo className="w-6 h-6" />
            </a>
            <a href="https://github.com/OmarIzquierdo" className="p-3 bg-slate-900 rounded-full hover:bg-slate-800 text-slate-400 hover:text-white transition-all border border-slate-800 hover:border-white/30">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/omar-izquierdo-97531b263/" className="p-3 bg-slate-900 rounded-full hover:bg-slate-800 text-slate-400 hover:text-blue-400 transition-all border border-slate-800 hover:border-blue-500/30">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="https://omarizquierdo.dev/blog" className="p-3 bg-slate-900 rounded-full hover:bg-slate-800 text-slate-400 hover:text-emerald-400 transition-all border border-slate-800 hover:border-emerald-500/30 flex items-center justify-center">
              <Rss className="w-6 h-6" />
            </a>
          </div>

          <div className="text-slate-600 text-sm font-mono border-t border-slate-900 pt-8">
            <p>&copy; {new Date().getFullYear()} Omar Izquierdo. {t.footer.rights}</p>
            <p className="mt-2 text-xs">System.exit(0);</p>
          </div>
        </div>
      </footer>
    </div>
  );
}