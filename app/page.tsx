import Image from "next/image";
import type { CSSProperties } from "react";
import HeroParallax from "@/components/HeroParallax";
import { CursorArrow, Flag, Icon } from "@/components/Icons";
import Nav from "@/components/Nav";
import Reveal from "@/components/Reveal";
import TiltCard from "@/components/TiltCard";
import Timeline from "@/components/Timeline";
import {
  education,
  experience,
  languages,
  profile,
  projects,
  skillGroups,
} from "@/lib/data";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: "Front-end Developer & UX/UI Designer",
  url: "https://sabiendouven.nl",
  sameAs: [profile.linkedin.href],
  address: { "@type": "PostalAddress", addressLocality: "Beek", addressCountry: "NL" },
  alumniOf: [
    { "@type": "CollegeOrUniversity", name: "Zuyd Hogeschool" },
    { "@type": "Organization", name: "Educom" },
  ],
  knowsAbout: ["Front-end development", "UX design", "UI design", "Vue", "React", "Nuxt"],
};

function Letters({ text, start = 0 }: { text: string; start?: number }) {
  return (
    <span aria-hidden="true">
      {Array.from(text).map((char, i) => (
        <span className="ch" key={`${char}-${i}`} style={{ "--i": start + i } as CSSProperties}>
          {char}
        </span>
      ))}
    </span>
  );
}

function SectionHead({ id, title }: { id: string; title: string }) {
  return (
    <Reveal className="section__head">
      <h2 id={id} className="section__title">
        {title}
      </h2>
      <span className="section__rule" aria-hidden="true" />
    </Reveal>
  );
}

export default function Page() {
  return (
    <>
      <a className="skip" href="#main">
        Ga naar de inhoud
      </a>
      <Nav />

      <main id="main">
        {/* ───────────── Hero ───────────── */}
        <section id="home" data-nav="home" className="hero" aria-labelledby="hero-title">
          <div className="wrap">
            <HeroParallax className="hero__stage">
              <div className="blobs" aria-hidden="true">
                <span className="blob blob--violet" />
                <span className="blob blob--mint" />
                <span className="blob blob--peach" />
              </div>

              <div className="hero__inner">
                <div className="hero__intro">
                  <span className="avatar">
                    <Image
                      src="/img/sabien-profiel.jpg"
                      alt="Portret van Sabien Douven"
                      width={640}
                      height={640}
                      priority
                    />
                  </span>
                  <span className="place">
                    <Icon name="pin" size={18} />
                    {profile.location}
                  </span>
                </div>

                <div className="framebox">
                <div className="frame">
                  <h1 id="hero-title" className="name">
                    <span className="sr-only">{profile.name}</span>
                    <span className="name__line">
                      <Letters text="Sabien" />
                    </span>
                    <span className="name__line">
                      <Letters text="Douven" start={6} />
                    </span>
                  </h1>

                  <span className="handle handle--tl" aria-hidden="true" />
                  <span className="handle handle--tr" aria-hidden="true" />
                  <span className="handle handle--bl" aria-hidden="true" />
                  <span className="handle handle--br" aria-hidden="true" />
                  <span className="frame__tag" aria-hidden="true">
                    Front-end × UX/UI
                  </span>

                  <span className="cursor cursor--dev" aria-hidden="true">
                    <CursorArrow />
                    <b className="cursor__label">Development</b>
                  </span>
                  <span className="cursor cursor--design" aria-hidden="true">
                    <CursorArrow />
                    <b className="cursor__label">Design</b>
                  </span>
                </div>
                </div>

                <p className="hero__role">
                  {profile.role}
                  <span>{profile.tagline}</span>
                </p>

                <blockquote className="quote">
                  <p>{profile.quote.text}</p>
                  <footer>
                    <cite>{profile.quote.author}</cite>
                  </footer>
                </blockquote>

                <div className="hero__actions">
                  <a className="btn btn--primary" href={`mailto:${profile.email}`}>
                    <Icon name="mail" size={20} />
                    Stuur een mail
                  </a>
                  <a
                    className="btn"
                    href={profile.linkedin.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon name="linkedin" size={20} />
                    LinkedIn
                    <span className="sr-only"> (opent in een nieuw tabblad)</span>
                  </a>
                </div>
              </div>
            </HeroParallax>
          </div>
        </section>

        {/* ───────────── Projecten ───────────── */}
        <section
          id="projecten"
          data-nav="projecten"
          className="section"
          aria-labelledby="projecten-title"
        >
          <div className="wrap">
            <SectionHead id="projecten-title" title="Projecten" />

            <div className="projects">
              {projects.map((project, i) => (
                <Reveal
                  key={project.slug}
                  className={`project-cell project-cell--${project.size}`}
                  delay={(i % 2) * 120}
                >
                  <TiltCard className="project">
                    <div className="project__media" style={{ background: project.tone }}>
                      <Image
                        src={project.image}
                        alt={project.imageAlt}
                        fill
                        sizes="(min-width: 960px) 45vw, (min-width: 768px) 55vw, 100vw"
                        className={`project__img project__img--${project.fit}`}
                        style={{ objectPosition: project.position }}
                      />
                    </div>
                    <div className="project__body">
                      <h3 className="project__title">{project.title}</h3>
                      <p>{project.description}</p>
                      {project.link && (
                        <a
                          className="link"
                          href={project.link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <span className="link__icon">
                            <Icon name="link" size={16} />
                          </span>
                          {project.link.label}
                          <span className="sr-only"> (opent in een nieuw tabblad)</span>
                        </a>
                      )}
                    </div>
                  </TiltCard>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ───────────── Werkervaring ───────────── */}
        <section id="werk" data-nav="werk" className="section" aria-labelledby="werk-title">
          <div className="wrap">
            <SectionHead id="werk-title" title="Werkervaring" />

            <Timeline>
              {experience.map((job, i) => (
                <li key={job.company} className="exp" data-node="">
                  <Reveal delay={i * 90}>
                    <article className="exp__card">
                      <span
                        className={
                          !job.logo ? "logo logo--text" : job.logoFit === "contain" ? "logo logo--contain" : "logo"
                        }
                      >
                        {job.logo ? (
                          <Image src={job.logo} alt="" width={96} height={96} />
                        ) : (
                          <span aria-hidden="true">{job.initials ?? job.company.slice(0, 2)}</span>
                        )}
                      </span>
                      <div className="exp__text">
                        <p className="exp__role">
                          {job.role}
                          {job.via ? ` via ${job.via}` : ""}
                        </p>
                        <h3 className="exp__company">{job.company}</h3>
                      </div>
                      <div className="exp__meta">
                        <span className="exp__period">
                          {job.current && <i className="live" aria-hidden="true" />}
                          {job.period}
                        </span>
                        <span className="exp__place">
                          <Icon name="pin" size={14} />
                          {job.location}
                        </span>
                      </div>
                    </article>
                  </Reveal>
                </li>
              ))}
            </Timeline>
          </div>
        </section>

        {/* ───────────── Skills ───────────── */}
        <section id="skills" data-nav="skills" className="section" aria-labelledby="skills-title">
          <div className="wrap">
            <SectionHead id="skills-title" title="Skills" />

            <div className="skills">
              {skillGroups.map((group, g) => (
                <Reveal
                  key={group.id}
                  delay={g * 120}
                  className={group.id === "ai" ? "skills__cell--wide" : ""}
                >
                  <div className={`skillgroup skillgroup--${group.id}`}>
                    <h3 className="skillgroup__head">
                      <span className="skillgroup__icon">
                        <Icon name={group.icon} size={22} />
                      </span>
                      {group.title}
                    </h3>
                    {group.note && <p className="skillgroup__note">{group.note}</p>}
                    <ul className="chips">
                      {group.skills.map((skill, i) => (
                        <li key={skill} className="chip" style={{ "--n": i } as CSSProperties}>
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ───────────── Opleiding ───────────── */}
        <section
          id="opleiding"
          data-nav="skills"
          className="section section--tight"
          aria-labelledby="opleiding-title"
        >
          <div className="wrap">
            <SectionHead id="opleiding-title" title="Opleiding" />

            <div className="edu">
              {education.map((item, i) => (
                <Reveal key={item.school} className="edu__cell" delay={i * 100}>
                  <article className="edu__card">
                    <span className="logo">
                      <Image src={item.logo} alt="" width={96} height={96} />
                    </span>
                    <p className="edu__school">{item.school}</p>
                    <h3 className="edu__program">{item.program}</h3>
                    <p className="edu__years">{item.years}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ───────────── Contact ───────────── */}
        <section
          id="contact"
          data-nav="contact"
          className="section contact"
          aria-labelledby="contact-title"
        >
          <div className="wrap">
            <SectionHead id="contact-title" title="Contact" />

            <Reveal>
              <a className="contact__mail" href={`mailto:${profile.email}`}>
                {profile.email}
              </a>
            </Reveal>

            <Reveal delay={80}>
              <ul className="facts">
                <li className="fact">
                  <span className="fact__icon">
                    <Icon name="pin" size={20} />
                  </span>
                  <div>
                    <span className="fact__label">Woonachtig in</span>
                    <span className="fact__value">{profile.location}</span>
                  </div>
                </li>
                <li className="fact">
                  <span className="fact__icon">
                    <Icon name="linkedin" size={20} />
                  </span>
                  <div>
                    <span className="fact__label">Linkedin</span>
                    <span className="fact__value">
                      <a href={profile.linkedin.href} target="_blank" rel="noopener noreferrer">
                        {profile.linkedin.label}
                        <span className="sr-only"> (opent in een nieuw tabblad)</span>
                      </a>
                    </span>
                  </div>
                </li>
              </ul>
            </Reveal>

            <Reveal delay={120}>
              <h3 className="langs__title">Talen</h3>
              <ul className="langs">
                {languages.map((lang) => (
                  <li key={lang.name} className="lang">
                    <span className="lang__flag">
                      <Flag code={lang.flag} />
                    </span>
                    <div className="lang__text">
                      <span className="lang__name">{lang.name}</span>
                      <span className="lang__level">{lang.level}</span>
                    </div>
                    <span className="dots" aria-hidden="true">
                      {[0, 1, 2, 3, 4].map((dot) => (
                        <i
                          key={dot}
                          className={dot < lang.dots ? "dot dot--on" : "dot"}
                          style={{ "--n": dot } as CSSProperties}
                        />
                      ))}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="wrap">
          <p>© {new Date().getFullYear()} Sabien Douven</p>
        </div>
      </footer>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
