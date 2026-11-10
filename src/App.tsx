import { useEffect, useState } from 'react'
import {
  ArrowUpRight,
  Code2,
  Download,
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
  ['freelance', 'Services'],
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
            <span>Heera<span className="brand-period">.</span></span>
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
          <div className="container hero-layout">
            <div className="hero-content">
              <div className="eyebrow">
                <span className="status-dot" aria-hidden="true" />
                Open to internships, research & collaborations
              </div>
              <p className="hero-role">COMPUTER SCIENCE STUDENT · AI-ORIENTED DEVELOPER</p>
              <h1>
                Building systems
                <br />
                <span>that solve problems.</span>
              </h1>
              <p className="hero-copy">
                I’m <strong>Wahengbam Heramani Singh</strong>, a Computer Science and Engineering student at NIT Manipur.
                I build full-stack applications and explore AI systems, NLP, large language models,
                and retrieval-augmented generation.
              </p>
              <div className="hero-buttons">
                <button className="button button-dark" onClick={() => navigate('projects')}>
                  Explore my work <ArrowUpRight size={17} />
                </button>
                <a className="button button-light" href={`mailto:${profile.email}`}>
                  Contact me <Mail size={17} />
                </a>
                <a
                  className="button button-light"
                  href="./documents/resume.pdf"
                  download="Wahengbam-Heramani-Singh-CV.pdf"
                >
                  Download CV <Download size={17} />
                </a>
              </div>
              <div className="hero-meta">
                <span><GraduationCap size={16} /> {profile.college} · {profile.semester}</span>
                <span><Code2 size={16} /> Full-stack & AI/ML</span>
                <span><ShieldCheck size={16} /> Security-minded engineering</span>
              </div>
            </div>

            <aside className="hero-portrait" aria-label="Professional portrait">
              <div className="portrait-frame">
                <img
                  src="./images/profile.jpg"
                  alt="Professional portrait of Wahengbam Heramani Singh"
                  fetchPriority="high"
                />
              </div>
              <div className="portrait-caption">
                <span className="portrait-caption-mark">H.</span>
                <span>
                  <strong>Wahengbam Heramani Singh</strong>
                  <small>CSE · NIT Manipur</small>
                </span>
              </div>
              <div className="portrait-index">01 / DEVELOPER PROFILE</div>
            </aside>
          </div>
        </section>

        <section id="about" className="section">
          <div className="container two-col">
            <div>
              <SectionHeading index="01" title="A student who learns by building." eyebrow="About" />
            </div>
            <div className="section-body">
              <p>
                I’m {profile.name}, preferably <strong>Heera</strong>. I’m pursuing Computer Science
                and Engineering at NIT Manipur, where I’m currently in my{` ${profile.semester}`}.
              </p>
              <p>
                My interests include <strong>full-stack engineering, Natural Language Processing,
                LLMs, and Retrieval-Augmented Generation</strong>. I enjoy understanding systems
                end to end—from interfaces and APIs to data pipelines and deployment.
              </p>
              <p>
                I learn by building practical projects, experimenting with infrastructure, and
                collaborating on technology intended to solve real problems. I’m also interested
                in cybersecurity and secure system design.
              </p>
            </div>
          </div>
        </section>

        <section id="skills" className="section section-muted">
          <div className="container">
            <SectionHeading
              index="02"
              title="Tools I work and learn with."
              eyebrow="Technical skills"
              action={<p className="heading-note">A practical toolkit built through coursework and projects.</p>}
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
                  Explore GitHub <ArrowUpRight size={16} />
                </a>
              }
            />

            <article className="project-card">
              <div className="project-number">01</div>
              <div className="project-content">
                <div className="project-topline">
                  <span className="project-type">FEATURED PROJECT</span>
                  <span className="project-status">REPOSITORY</span>
                </div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tags">
                  {project.technologies.map((technology) => <span key={technology}>{technology}</span>)}
                </div>
                <div className="project-actions">
  <a
    className="project-link"
    href={project.github}
    target="_blank"
    rel="noreferrer"
  >
    View repository <ExternalLink size={16} />
  </a>

  <a
    className="project-link"
    href="https://heeraop.github.io/LuwangMaheikolCoaching/"
    target="_blank"
    rel="noreferrer"
  >
    Live Demo <ArrowUpRight size={16} />
  </a>
</div>
              </div>
              <div className="project-visual" aria-hidden="true">
                <div className="browser-window">
                  <div className="browser-bar">
                    <i /><i /><i />
                    <span>project preview</span>
                  </div>
                  <div className="browser-content">
                    <div className="mini-kicker">WEB APPLICATION</div>
                    <span className="mini-line wide" />
                    <span className="mini-line" />
                    <div className="mini-grid"><b /><b /><b /></div>
                    <div className="mini-footer" />
                  </div>
                </div>
              </div>
            </article>

            <div className="project-callout">
              <div>
                <p className="section-kicker">More projects</p>
                <h3>More of my engineering work is available on GitHub.</h3>
              </div>
              <a className="button button-light" href={profile.github} target="_blank" rel="noreferrer">
                Browse repositories <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </section>

        <section id="freelance" className="section section-dark">
          <div className="container freelance-grid">
            <div>
              <p className="section-kicker light">04 — Services</p>
              <h2>Thoughtful websites, built to work.</h2>
            </div>
            <div className="freelance-copy">
              <p>
                I work on responsive websites for individuals, businesses, and educational
                organisations—including coaching websites, portfolio sites, landing pages, and
                content-driven platforms.
              </p>
              <a className="button button-white" href={`mailto:${profile.email}`}>
                Discuss a project <ArrowUpRight size={17} />
              </a>
            </div>
          </div>
        </section>

        <section className="section education">
          <div className="container two-col">
            <div>
              <p className="section-kicker">05 — Education</p>
              <h2>Learning, building, and growing at NIT Manipur.</h2>
            </div>
            <div className="education-card">
              <div className="education-icon"><GraduationCap size={23} /></div>
              <div>
                <p className="education-school">{profile.college}</p>
                <h3>{profile.education}</h3>
                <p className="education-semester">{profile.semester} · 2025–2029</p>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="section contact">
          <div className="container">
            <div className="contact-panel">
              <div>
                <p className="section-kicker">06 — Contact</p>
                <h2>Have an idea worth building?</h2>
                <p className="contact-intro">
                  I’m open to internship opportunities, research collaborations, freelance projects,
                  and conversations about engineering and applied AI.
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
            <span className="brand footer-brand"><span className="brand-mark">H</span><span>Heera<span className="brand-period">.</span></span></span>
            <p>CSE Student · AI-oriented Developer · Full-stack Engineer</p>
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
