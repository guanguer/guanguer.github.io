import { useEffect, useRef } from 'react';
import {
  profile,
  experience,
  projects,
  skills,
  certifications,
  education,
} from './data';

/** Adds a fade-up reveal when the element scrolls into view. */
function useReveal() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('visible');
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return ref;
}

function Section({ id, title, subtitle, children, className = '' }) {
  const ref = useReveal();
  return (
    <section id={id} className={className}>
      <div className="container reveal" ref={ref}>
        <h2 className="section-title">
          <span className="hash">#</span>
          {title}
        </h2>
        {subtitle && <p className="section-sub">{subtitle}</p>}
        {children}
      </div>
    </section>
  );
}

function Nav() {
  const links = ['about', 'experience', 'projects', 'skills', 'contact'];
  return (
    <nav className="nav">
      <div className="container nav-inner">
        <a href="#top" className="nav-logo">
          juan<span>.taborda</span>
        </a>
        <ul className="nav-links">
          {links.map((link) => (
            <li key={link}>
              <a href={`#${link}`}>{link}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <header id="top" className="hero">
      <div className="container hero-inner">
        <div className="hero-text">
          <p className="hero-eyebrow">{profile.location}</p>
          <h1>
            Hi, I&rsquo;m {profile.name.split(' ')[0]}.
            <br />
            <span className="gradient">{profile.headline}</span>
          </h1>
          <p className="hero-tagline">{profile.tagline}</p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#projects">
              View my work
            </a>
            <a className="btn btn-ghost" href="#contact">
              Get in touch
            </a>
          </div>
        </div>
        <div className="hero-avatar">
          <img src={profile.avatar} alt={profile.name} />
        </div>
      </div>
    </header>
  );
}

function About() {
  return (
    <Section id="about" title="about">
      <div className="about-grid">
        <div className="about-text">
          {profile.about.map((paragraph) => (
            <p key={paragraph.slice(0, 24)}>{paragraph}</p>
          ))}
        </div>
        <div className="about-facts">
          <div className="fact">
            <div className="num">19+</div>
            <div className="label">years of experience</div>
          </div>
          <div className="fact">
            <div className="num">UI → C++</div>
            <div className="label">full-stack range, frontend to embedded</div>
          </div>
        </div>
      </div>
    </Section>
  );
}

function Experience() {
  return (
    <Section
      id="experience"
      title="experience"
      subtitle="Two decades across consumer entertainment, IoT, hospitality, and enterprise platforms."
    >
      <div className="timeline">
        {experience.map((job) => (
          <div className="timeline-item" key={`${job.company}-${job.period}`}>
            <div className="period">{job.period}</div>
            <h3>{job.role}</h3>
            <div className="company">
              {job.company} · {job.location}
            </div>
            <p className="summary">{job.summary}</p>
            <div className="chips">
              {job.tech.map((tech) => (
                <span className="chip" key={tech}>
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Projects() {
  return (
    <Section
      id="projects"
      title="featured work"
      subtitle="Projects I led or built, from theme-park experiences to embedded products."
    >
      <div className="projects-grid">
        {projects.map((project) => (
          <article
            className="project-card"
            key={project.title}
            style={{ '--accent-color': `var(--${project.accent})` }}
          >
            <h3>{project.title}</h3>
            <div className="client">{project.client}</div>
            <p>{project.description}</p>
            <div className="chips">
              {project.tech.map((tech) => (
                <span className="chip" key={tech}>
                  {tech}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}

function Skills() {
  return (
    <Section id="skills" title="skills">
      <div className="skills-grid">
        {skills.map(({ group, items }) => (
          <div className="skill-group" key={group}>
            <h3>{group}</h3>
            <div className="chips">
              {items.map((item) => (
                <span className="chip" key={item}>
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Certifications() {
  return (
    <Section id="certifications" title="certifications & education">
      <div className="certs">
        {certifications.map((cert) => (
          <div className="cert-card" key={cert.name}>
            <div className="cert-badge">SF</div>
            <div>
              <h3>{cert.name}</h3>
              <div className="year">{cert.year}</div>
            </div>
          </div>
        ))}
        {education.map((edu) => (
          <div className="cert-card" key={edu.school}>
            <div className="cert-badge">🎓</div>
            <div>
              <h3>{edu.degree}</h3>
              <div className="year">
                {edu.school} · {edu.period}
              </div>
            </div>
          </div>
        ))}
      </div>
      <p className="certs-link">
        Verify certifications on my{' '}
        <a href={profile.links.trailblazer} target="_blank" rel="noreferrer">
          Trailblazer profile
        </a>
        .
      </p>
    </Section>
  );
}

function Contact() {
  return (
    <Section id="contact" title="get in touch" className="contact">
      <p>
        Open to senior engineering opportunities and interesting problems.
        The fastest way to reach me is email.
      </p>
      <div className="contact-links">
        <a className="btn btn-primary" href={`mailto:${profile.email}`}>
          {profile.email}
        </a>
        <a className="btn btn-ghost" href={profile.links.linkedin} target="_blank" rel="noreferrer">
          LinkedIn
        </a>
        <a className="btn btn-ghost" href={profile.links.github} target="_blank" rel="noreferrer">
          GitHub
        </a>
      </div>
    </Section>
  );
}

function Footer() {
  return (
    <footer>
      <div className="container">
        © {new Date().getFullYear()} {profile.name} · Built with{' '}
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          React
        </a>{' '}
        +{' '}
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          Vite
        </a>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <Nav />
      <Hero />
      <main>
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
