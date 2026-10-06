import { useState, useEffect, useRef, Fragment } from 'react';
import { SECTIONS, TOOLS, PROJECTS, CERTS, AWARDS } from './data.js';
import Gallery from './components/Gallery.jsx';
import ToolIcon from './components/ToolIcon.jsx';

/* Steps are visible by default; the animation only engages once JS runs,
   so nothing is ever stuck hidden. */
function useReveal() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    el.classList.add('pre');
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) { el.classList.add('in'); io.disconnect(); }
      },
      { threshold: 0.2 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return ref;
}

const reduced = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* Counts up from zero on load. Renders the final number straight away
   when motion is reduced, so the figure is never wrong. */
function Count({ to, suffix = '', duration = 1400, delay = 300 }) {
  const [n, setN] = useState(() => (reduced() ? to : 0));

  useEffect(() => {
    if (reduced()) return;
    let raf, start;
    const step = (t) => {
      if (!start) start = t;
      const p = Math.min(1, (t - start) / duration);
      setN(Math.round(to * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    const timer = setTimeout(() => { raf = requestAnimationFrame(step); }, delay);
    return () => { clearTimeout(timer); cancelAnimationFrame(raf); };
  }, [to, duration, delay]);

  return <span className="count">{n}{suffix}</span>;
}

/* Name reveals letter by letter on load. */
function Name({ first, last }) {
  let i = 0;
  const letters = (word) =>
    [...word].map((ch, k) => (
      <span key={word + k} style={{ animationDelay: (0.14 + 0.035 * i++).toFixed(3) + 's' }}>
        {ch}
      </span>
    ));
  return (
    <h1 className="name" aria-label={first + ' ' + last}>
      <span className="line" aria-hidden="true">{letters(first)}</span>
      <span className="line" aria-hidden="true">{letters(last)}</span>
    </h1>
  );
}

export default function App() {
  const howRef = useReveal();
  const certsRef = useReveal();
  const awardsRef = useReveal();
  const skillsRef = useReveal();
  const [active, setActive] = useState('top');
  const [pct, setPct] = useState(0);
  const [filter, setFilter] = useState('All');

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      setPct(max > 0 ? (h.scrollTop / max) * 100 : 0);
      let cur = 'top';
      for (const s of SECTIONS) {
        const n = document.getElementById(s.id);
        if (n && n.getBoundingClientRect().top <= h.clientHeight * 0.35) cur = s.id;
      }
      setActive(cur);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  const cats = ['All', 'Robots', 'Code', 'Hands-on'];
  const count = (c) => (c === 'All' ? PROJECTS.length : PROJECTS.filter((p) => p.cat === c).length);
  /* Videos lead the grid so the moving cards are what you see first;
     everything else keeps its order from data.js. */
  const ordered = [...PROJECTS].sort((a, b) => (b.video ? 1 : 0) - (a.video ? 1 : 0));
  const shown = filter === 'All' ? ordered : ordered.filter((p) => p.cat === filter);

  return (
    <Fragment>
      <div className="progress" style={{ width: pct + '%' }} />

      <div className="main">

        <header className="hero" id="top">
          <span className="glow" /><span className="grid" />
          <div className="inner">
            <p className="eyebrow">Portfolio · 2024–2026</p>
            <Name first="Tawfiq" last="Fakhouri" />
            <p className="sub">Ten years old · <b>The youngest engineer</b></p>
            <p className="lede">
              Tawfiq is a brilliant ten-year-old. He builds robots that drive themselves, writes his
              own games, solders his own circuits and flies FPV drones, and he has the award-winning
              skill of <em>seeing a problem and building the thing that solves it</em>.
            </p>
            <div className="chips">
              <div className="chips-awards">
                <span className="chip win"><b>🏆</b> Creative Solution Award · RFO 2025</span>
                <span className="chip win"><b>🏆</b> Showmanship Award · Robofest 2026</span>
              </div>
              <div className="chips-counts">
                <span className="chip"><b><Count to={70} suffix="+" /></b> projects</span>
                <span className="chip"><b><Count to={2} delay={420} /></b> awards</span>
                <span className="chip"><b><Count to={4} delay={540} /></b> certificates</span>
              </div>
            </div>
          </div>
        </header>

        <section className="sec" id="featured">
          <p className="sec-label">Featured project</p>
          <h2 className="fhead">AI LiveGuard</h2>
          <p className="fintro">
            Football injuries happen when tired players stay on the pitch. Tawfiq's answer: let the
            coach <b>see the tiredness before the injury</b>.
          </p>

          <div className="feature">
            <div className="fmedia">
              <a className="video" href="https://youtu.be/PFmzdAx26yI?t=30" target="_blank" rel="noopener">
                <img src="img/video-poster.jpg" alt="Tawfiq presenting the AI LiveGuard system to camera" />
                <span className="shade" />
                <span className="play">
                  <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 3.5v17L21 12 6 3.5z" /></svg>
                </span>
              </a>
            </div>

            <div className="fcopy">
              <ol className="how" ref={howRef}>
                <li>
                  <b>A sensor vest</b>
                  <span>Heart rate, speed and distance, straight off the player.</span>
                </li>
                <li>
                  <b>The app watches</b>
                  <span>It turns all of that into one fatigue number per player.</span>
                </li>
                <li>
                  <b>The coach gets told</b>
                  <span>Who to take off now, and who is ready to come on.</span>
                </li>
              </ol>

              <a href="https://nmaas-team-1.adalo.com/ai" target="_blank" rel="noopener" className="btn">
                Open the app ↗
              </a>
            </div>
          </div>
        </section>

        <section className="sec" id="award">
          <p className="sec-label">Awards</p>
          <h2>Two competitions, two awards</h2>
          <p className="say">The Robot Football Olympics 2025 and Robofest Jordan 2026.</p>

          <div className="awards" ref={awardsRef}>
          {AWARDS.map((a, i) => (
            <div className={'award has-photo' + (i === 0 ? ' lead' : '')} key={a.title}>
              <div className="awardshot">
                <img src={a.photo} alt={a.alt} loading="lazy" draggable="false" />
              </div>
              <div>
                <p className="wk">{a.kicker}</p>
                <p className="wt">{a.title}</p>
                <p className="wd" dangerouslySetInnerHTML={{ __html: a.text }} />
                <p className="wm">
                  {a.meta.map((x, k) => (
                    <span key={x} className={['b', 'i', 'em'][k] || 'i'}>{x}</span>
                  ))}
                </p>
              </div>
            </div>
          ))}
          </div>
        </section>

        <section className="sec" id="projects">
          <p className="sec-label">The work</p>
          <h2>A selection of his work</h2>
          <p className="say">Fifteen of the 70+ projects he has built.</p>
          <div className="filters">
            {cats.map((c) => (
              <button key={c} className={filter === c ? 'on' : ''} onClick={() => setFilter(c)}>
                {c}<span className="n">{count(c)}</span>
              </button>
            ))}
          </div>
          <Gallery items={shown} showCat={filter === 'All'} />
        </section>


        <section className="sec" id="certs">
          <p className="sec-label">Certificates</p>
          <h2>Where he has competed and trained</h2>
          
          <div className="certs" ref={certsRef}>
            {CERTS.map((c) => (
              <div className="certcard" key={c.src}>
                <img src={c.src} alt={c.title} loading="lazy" draggable="false" />
              </div>
            ))}
          </div>
        </section>
        <section className="sec" id="tools">
          <p className="sec-label">Skills</p>
          <p className="say">Eight areas, built up across more than seventy projects.</p>
          <div className="skills" ref={skillsRef}>
            {TOOLS.map((t, i) => (
              <div className={'srow' + (t.star ? ' star' : '')} key={t.name}>
                <span className="snum">{String(i + 1).padStart(2, '0')}</span>
                <div className="sid">
                  <span className="tbadge"><ToolIcon name={t.icon} /></span>
                  <span className="sname">
                    <b>{t.name}</b>
                    <i>{t.meta}</i>
                  </span>
                </div>
                <p className="sitems">
                  {t.items.map((x) => <span key={x}>{x}</span>)}
                </p>
              </div>
            ))}
          </div>
        </section>


        <footer>
          <span>Tawfiq Fakhouri · Portfolio</span>
          <span>Built with Nmaa Al Hawary · 2024–2026</span>
        </footer>
      </div>

    </Fragment>
  );
}
