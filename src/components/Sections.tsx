import Image from "next/image";
import { Link } from "@/i18n/navigation";
import type { Content, Project } from "@/content/types";
import { site, type Locale } from "@/content/site";
import credits from "@/content/image-credits.json";
import TopBar from "./TopBar";
import Explainer from "./Explainer";
import CreditFragment from "./CreditFragment";

const mailto = `mailto:${site.email}`;

export function Hero({ c, locale }: { c: Content; locale: Locale }) {
  const { hero, nav } = c;
  return (
    <header className="hero">
      <div className="hero__photo">
        <Image src={hero.picture.src} alt="" width={hero.picture.width} height={hero.picture.height} priority sizes="100vw" />
      </div>
      <div className="hero__top">
        <TopBar
          locale={locale}
          links={[
            { href: "#work", label: nav.work },
            { href: "#experience", label: nav.experience },
            { href: "#contact", label: nav.contact },
          ]}
          themeLabel={nav.theme}
          languageLabel={nav.language}
        />
      </div>
      <h1 className="hero__grid">
        <span className="hero__line hero__line--first">
          <span>{hero.first}</span>
        </span>
        <span className="hero__line hero__line--last">
          <span>{hero.last}</span>
        </span>
      </h1>
      <div className="hero__middle-wrap">
        <div className="hero__middle">
          <p className="hero__sentence">{hero.sentence}</p>
          <a className="button" href={mailto}>
            {hero.action}
          </a>
        </div>
      </div>
      <p className="hero__caption small" role="note">
        <span className="sr-only">{hero.picture.alt}. </span>
        {hero.picture.caption}
      </p>
    </header>
  );
}

export function About({ c }: { c: Content }) {
  const { about } = c;
  return (
    <section className="section" id="about" aria-labelledby="about-title">
      <div className="about__row">
        <dl className="about__facts small" data-reveal style={{ ["--i" as string]: 1 }}>
          {about.facts.map((f) => (
            <div key={f.label}>
              <dt>{f.label}</dt>
              <dd>{f.value}</dd>
            </div>
          ))}
        </dl>
        <div>
          <h2 id="about-title" className="section-title about__heading" data-reveal>
            {about.heading}
          </h2>
          <p className="about__paragraph" data-reveal style={{ ["--i" as string]: 1 }}>
            {about.paragraph}
          </p>
        </div>
      </div>
      <div className="about__row about__records">
        <span aria-hidden="true" />
        <div className="about__lists">
          {about.records.map((record, i) => (
            <div key={record.label} data-reveal style={{ ["--i" as string]: i }}>
              <h3 className="about__list-label small">{record.label}</h3>
              <ul className="about__list small">
                {record.items.map((item) => (
                  <li key={item.name}>
                    <span>{item.name}</span>
                    <span className="soft">{item.note}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Explain({ c }: { c: Content }) {
  const { explain } = c;
  return (
    <section className="section" id="why" aria-labelledby="why-title">
      <div className="explain">
        <div>
          <h2 id="why-title" className="section-title" data-reveal>
            {explain.heading}
          </h2>
          <p className="explain__intro" data-reveal style={{ ["--i" as string]: 1 }}>
            {explain.intro}
          </p>
          <p className="explain__note small soft" data-reveal style={{ ["--i" as string]: 2 }}>
            {explain.note}
          </p>
        </div>
        <div data-reveal style={{ ["--i" as string]: 2 }}>
          <Explainer copy={explain} />
        </div>
      </div>
    </section>
  );
}

const frames = ["project--a", "project--b", "project--c", "project--a"] as const;
const ratios = ["3x2", "4x5", "16x9", "3x2"] as const;

function ProjectItem({ p, i, c }: { p: Project; i: number; c: Content }) {
  const ratio = ratios[i % ratios.length];
  const frame = p.picture ? (
    <Image
      src={p.picture.src}
      alt={p.picture.alt}
      width={p.picture.width}
      height={p.picture.height}
      sizes="(max-width: 720px) 100vw, 50vw"
    />
  ) : (
    <CreditFragment copy={c.work.fragment} />
  );
  return (
    <article className={`project ${frames[i % frames.length]}`} data-reveal>
      <div className="project__media">
        <p className="project__name">{p.picture ? p.picture.caption : p.status}</p>
        <div className={`project__frame project__frame--${ratio} ${p.picture ? "" : "project__frame--fragment"}`}>
          {p.slug ? (
            <Link href={`/projects/${p.slug}`} aria-label={p.title} tabIndex={-1}>
              {frame}
            </Link>
          ) : (
            frame
          )}
        </div>
      </div>
      <div className="project__text">
        <h3 className="project__title">
          {p.slug ? (
            <Link href={`/projects/${p.slug}`} className="plain-link">
              {p.title}
            </Link>
          ) : (
            p.title
          )}
        </h3>
        {p.picture && <p className="small soft" style={{ margin: "0 0 8px" }}>{p.status}</p>}
        <p className="project__summary">{p.summary}</p>
        {p.slug && (
          <Link href={`/projects/${p.slug}`} className="project__more link">
            {c.work.readCase}
          </Link>
        )}
      </div>
    </article>
  );
}

export function Work({ c }: { c: Content }) {
  const { work } = c;
  const [first, second, third, fourth] = work.projects;
  return (
    <section className="section" id="work" aria-labelledby="work-title">
      <h2 id="work-title" className="section-title work__heading" data-reveal>
        {work.heading}
      </h2>
      <div className="work__row">
        <ProjectItem p={first} i={0} c={c} />
      </div>
      <div className="work__row work__row--overlap">
        <p className="work__remark" data-reveal>
          {work.remark}
        </p>
        <ProjectItem p={second} i={1} c={c} />
      </div>
      <div className="work__row">
        <ProjectItem p={third} i={2} c={c} />
      </div>
      <div className="work__row">
        <ProjectItem p={fourth} i={3} c={c} />
      </div>
      <p className="work__earlier soft" data-reveal>
        {work.earlier}
      </p>
    </section>
  );
}

export function Experience({ c }: { c: Content }) {
  const { experience } = c;
  return (
    <section className="lineup" id="experience" aria-labelledby="experience-title">
      <h2 id="experience-title" className="section-title" data-reveal>
        {experience.heading}
      </h2>
      <table className="lineup__table" data-reveal style={{ ["--i" as string]: 1 }}>
        {experience.groups.map((group) => (
          <tbody key={group.label}>
            <tr className="lineup__group">
              <th colSpan={4} scope="colgroup">
                {group.label}
              </th>
            </tr>
            {group.rows.map((row) => (
              <tr key={row.role} className="lineup__entry">
                <td>{row.role}</td>
                <td>{row.org}</td>
                <td className="lineup__focus">{row.focus}</td>
                <td className="tabular">{row.dates}</td>
              </tr>
            ))}
          </tbody>
        ))}
      </table>
      {site.cvAvailable && (
        <p className="lineup__cv">
          <a className="link" href={site.cvPath} download>
            {experience.cv}
          </a>
        </p>
      )}
    </section>
  );
}

export function Now({ c }: { c: Content }) {
  const { now } = c;
  return (
    <section className="section" id="now" aria-labelledby="now-title">
      <div className="now">
        <div className="now__text">
          <h2 id="now-title" className="section-title now__heading" data-reveal>
            {now.heading}
          </h2>
          {now.paragraphs.map((p, i) => (
            <p key={i} data-reveal style={{ ["--i" as string]: i + 1 }}>
              {p}
            </p>
          ))}
          <p data-reveal style={{ ["--i" as string]: 4 }}>
            <Link className="link" href="/projects/xai-financial-decision-support">
              {now.link}
            </Link>
          </p>
        </div>
        <figure className="now__figure" data-reveal style={{ ["--i" as string]: 2 }}>
          <Image
            src={now.picture.src}
            alt={now.picture.alt}
            width={now.picture.width}
            height={now.picture.height}
            sizes="(max-width: 720px) 100vw, 55vw"
          />
          <figcaption className="small soft">{now.picture.caption}</figcaption>
        </figure>
      </div>
    </section>
  );
}

function Arrow() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
      <path d="M4 12h15M13 5l7 7-7 7" />
    </svg>
  );
}

export function Contact({ c }: { c: Content }) {
  const { contact } = c;
  return (
    <section className="contact" id="contact" aria-labelledby="contact-title">
      <h2 id="contact-title" className="section-title contact__heading" data-reveal>
        {contact.heading}
      </h2>
      <ul className="contact__rows">
        <li className="contact__row" data-reveal>
          <a href={mailto}>{site.email}</a>
        </li>
        <li className="contact__row" data-reveal>
          <a href={site.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </li>
        {site.github && (
          <li className="contact__row" data-reveal>
            <a href={site.github} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </li>
        )}
        <li className="contact__row" data-reveal>
          {contact.place}
        </li>
        <li className="contact__row" data-reveal>
          {contact.languages}
        </li>
        <li className="contact__row contact__greeting" data-reveal>
          <span>{contact.greeting}</span>
          <a className="round-button" href={mailto} aria-label={contact.greetingLabel}>
            <Arrow />
          </a>
        </li>
      </ul>
    </section>
  );
}

export function Footer({ c }: { c: Content }) {
  const { footer } = c;
  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="footer__invitation">
          <p className="footer__title">
            {footer.invitation[0]}
            <br />
            {footer.invitation[1]}
          </p>
          <a className="button button--inverse" href={mailto}>
            {footer.action}
          </a>
        </div>
        <ul className="footer__links">
          <li>
            <a className="plain-link" href={mailto}>
              Email
            </a>
          </li>
          <li>
            <a className="plain-link" href={site.linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </li>
          {site.github && (
            <li>
              <a className="plain-link" href={site.github} target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </li>
          )}
          {site.cvAvailable && (
            <li>
              <a className="plain-link" href={site.cvPath} download>
                CV (PDF)
              </a>
            </li>
          )}
        </ul>
      </div>
      <div className="footer__legal">
        <p>{footer.rights}</p>
        <p className="footer__credits">
          {footer.credits}:{" "}
          {credits.map((cr, i) => (
            <span key={cr.file}>
              <a className="plain-link" href={cr.page} target="_blank" rel="noopener noreferrer">
                {cr.title}
              </a>
              {cr.creator ? `, ${cr.creator.split(" (")[0]}` : ""}, {cr.license}
              {i < credits.length - 1 ? " · " : ", via Wikimedia Commons"}
            </span>
          ))}
        </p>
      </div>
      <p className="footer__name" aria-hidden="true">
        {c.hero.last}
      </p>
    </footer>
  );
}
