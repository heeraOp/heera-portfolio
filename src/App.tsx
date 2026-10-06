import { useEffect, useState } from 'react'
import {
  ArrowUpRight,
  Code2,
  ExternalLink,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  Menu,
  Monitor,
  Network,
  Phone,
  ShieldCheck,
  X,
} from 'lucide-react'
import { SectionHeading } from './components/SectionHeading'
import { SkillCard } from './components/SkillCard'
import { profile, project, skills } from './data/portfolio'

const navItems = [
  ['about', 'About'],
  ['skills', 'Skills'],
  ['projects', 'Projects'],
  ['freelance', 'Freelance'],
  ['contact', 'Contact'],
] as const

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navigate = (id: string) => {
    setMenuOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className="site">
      <header className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
        <div className="container nav-inner">
          <button className="brand" onClick={() => navigate('home')} aria-label="Back to home">
            <span className="brand-mark">H</span>
            <span>Heera</span>
          </button>

          <nav className={`nav-links ${menuOpen ? 'nav-open' : ''}`} aria-label="Primary navigation">
            {navItems.map(([id, label]) => (
              <button key={id} onClick={() => navigate(id)}>{label}</button>
            ))}
          </nav>

          <div className="nav-actions">
            <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub profile">
              <Github size={18} strokeWidth={1.8} />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn profile">
              <Linkedin size={18} strokeWidth={1.8} />
            </a>
            <button
              className="menu-button"
              onClick={() => setMenuOpen((open) => !open)}
              aria-label="Toggle navigation menu"
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X size={21} /> : <Menu size={21} />}
            </button>
          </div>
        </div>
      </header>

      <main>
        <section id="home" className="hero">
          <div className="hero-grid" aria-hidden="true" />
          <div className="container hero-content">
            <div className="eyebrow">
              <span className="status-dot" aria-hidden="true" />
              Available for freelance work
            </div>
            <p className="hero-role">CSE STUDENT · WEB DEVELOPER · FREELANCER</p>
            <h1>
              Building useful things
              <br />
              <span>for the web.</span>
            </h1>
            <p className="hero-copy">
              I’m <strong>Heera</strong>, a Computer Science student at NIT Manipur,
              web developer, and freelancer interested in building practical digital
              experiences and learning cybersecurity.
            </p>
            <div className="hero-buttons">
              <button className="button button-dark" onClick={() => navigate('projects')}>
                View projects <ArrowUpRight size={17} />
              </button>
              <a className="button button-light" href={`mailto:${profile.email}`}>
                Get in touch <Mail size={17} />
              </a>
            </div>
            <div className="hero-meta">
              <span><GraduationCap size={16} /> {profile.college} · {profile.semester}</span>
              <span><Code2 size={16} /> Web development</span>
              <span><ShieldCheck size={16} /> Cybersecurity interest</span>
            </div>
          </div>
        </section>

        <section id="about" className="section">
          <div className="container two-col">
            <div>
              <SectionHeading index="01" title="A student who learns by building." eyebrow="About" />
            </div>
            <div className="section-body">
              <p>
                I’m {profile.name}, preferably <strong>Heera</strong>. I’m currently
                pursuing Computer Science and Engineering at NIT Manipur, where I’m in my
                {` ${profile.semester}`}.
              </p>
              <p>
                My main interests are <strong>web development</strong> and <strong>cybersecurity</strong>.
                I enjoy turning ideas into usable interfaces, working with backend systems,
                and learning by building hands-on projects.
              </p>
              <p>
                Alongside my studies, I also take on <strong>freelance web development</strong> work
                for people and organizations that need a clean, functional web presence.
              </p>
            </div>
          </div>
        </section>

        <section id="skills" className="section section-muted">
          <div className="container">
            <SectionHeading
              index="02"
              title="Tools I work and learn with."
              eyebrow="Skills"
              action={<p className="heading-note">My toolkit evolves as I build and learn.</p>}
            />
            <div className="skills-grid">
              <SkillCard icon={<Monitor size={20} />} title="Frontend" items={skills.frontend} />
              <SkillCard icon={<Code2 size={20} />} title="Backend" items={skills.backend} />
              <SkillCard icon={<Network size={20} />} title="Infrastructure" items={skills.infrastructure} />
              <SkillCard icon={<ShieldCheck size={20} />} title="Security" items={skills.security} />
            </div>
          </div>
        </section>

        <section id="projects" className="section">
          <div className="container">
            <SectionHeading
              index="03"
              title="Selected work."
              eyebrow="Projects"
              action={
                <a className="text-link" href={profile.github} target="_blank" rel="noreferrer">
                  See GitHub <ArrowUpRight size={16} />
                </a>
              }
            />

            <article className="project-card">
              <div className="project-number">01</div>

              <div className="project-content">
                <div className="project-topline">
                  <span className="project-type">WEB DEVELOPMENT</span>
                  <span className="project-status">PUBLIC REPOSITORY</span>
                </div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tags">
                  {project.technologies.map((technology) => <span key={technology}>{technology}</span>)}
                </div>
                <a className="project-link" href={project.github} target="_blank" rel="noreferrer">
                  View repository <ExternalLink size={16} />
                </a>
              </div>

              <div className="project-visual" aria-hidden="true">
                <div className="browser-window">
                  <div className="browser-bar">
                    <i /><i /><i />
                    <span>scigenesis-coaching</span>
                  </div>
                  <div className="browser-content">
                    <div className="mini-kicker">COACHING INSTITUTE</div>
                    <span className="mini-line wide" />
                    <span className="mini-line" />
                    <div className="mini-grid">
                      <b /><b /><b />
                    </div>
                    <div className="mini-footer" />
                  </div>
                </div>
              </div>
            </article>

            <div className="more-projects">
              <div>
                <p className="section-kicker">More coming</p>
                <h3>More projects will be added as they become ready to showcase.</h3>
              </div>
              <p>
                I’m keeping this portfolio focused on work that can be presented accurately,
                instead of filling it with placeholder or unverified projects.
              </p>
            </div>
          </div>
        </section>

        <section id="freelance" className="section section-dark">
          <div className="container freelance-grid">
            <div>
              <p className="section-kicker light">04 — Freelance</p>
              <h2>Need a website that simply works?</h2>
            </div>
            <div className="freelance-copy">
              <p>
                I’m available for freelance web development projects, including personal websites,
                business websites, coaching and educational websites, landing pages, and responsive
                frontend work.
              </p>
              <a className="button button-white" href={`mailto:${profile.email}`}>
                Start a conversation <ArrowUpRight size={17} />
              </a>
            </div>
          </div>
        </section>

        <section className="section education">
          <div className="container two-col">
            <div>
              <p className="section-kicker">05 — Education</p>
              <h2>Currently learning at NIT Manipur.</h2>
            </div>
            <div className="education-card">
              <div className="education-icon"><GraduationCap size={23} /></div>
              <div>
                <p className="education-school">{profile.college}</p>
                <h3>{profile.education}</h3>
                <p className="education-semester">{profile.semester}</p>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="section contact">
          <div className="container">
            <div className="contact-panel">
              <div>
                <p className="section-kicker">06 — Contact</p>
                <h2>Let’s build something useful.</h2>
                <p className="contact-intro">
                  For freelance work, collaborations, or a conversation about web development,
                  you can reach me through the links below.
                </p>
              </div>

              <div className="contact-links">
                <a href={`mailto:${profile.email}`} className="contact-link">
                  <span className="contact-icon"><Mail size={18} /></span>
                  <span><small>EMAIL</small>{profile.email}</span>
                  <ArrowUpRight size={17} />
                </a>
                <a href={profile.phoneHref} className="contact-link">
                  <span className="contact-icon"><Phone size={18} /></span>
                  <span><small>PHONE</small>{profile.phoneDisplay}</span>
                  <ArrowUpRight size={17} />
                </a>
                <a href={profile.github} target="_blank" rel="noreferrer" className="contact-link">
                  <span className="contact-icon"><Github size={18} /></span>
                  <span><small>GITHUB</small>github.com/heeraOp</span>
                  <ArrowUpRight size={17} />
                </a>
                <a href={profile.linkedin} target="_blank" rel="noreferrer" className="contact-link">
                  <span className="contact-icon"><Linkedin size={18} /></span>
                  <span><small>LINKEDIN</small>LinkedIn profile</span>
                  <ArrowUpRight size={17} />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <div>
            <span className="brand footer-brand"><span className="brand-mark">H</span><span>Heera</span></span>
            <p>CSE Student · Web Developer · Freelancer</p>
          </div>
          <div className="footer-right">
            <span>© {new Date().getFullYear()} Wahengbam Heramani Singh</span>
            <div className="footer-socials">
              <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={17} /></a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={17} /></a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
