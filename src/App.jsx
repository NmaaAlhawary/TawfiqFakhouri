import { useState, useEffect, useCallback, Fragment } from 'react';
import { SECTIONS, TOOLS, PROJECTS, CERTS, AWARD_PHOTOS } from './data.js';
import Rail from './components/Rail.jsx';
import Gallery from './components/Gallery.jsx';
import Lightbox from './components/Lightbox.jsx';
import ToolIcon from './components/ToolIcon.jsx';

export default function App() {
  const [active, setActive] = useState('top');
  const [pct, setPct] = useState(0);
  const [filter, setFilter] = useState('All');
  const [box, setBox] = useState(null);

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

  useEffect(() => {
    document.body.style.overflow = box ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [box]);

  const open = useCallback((set, index) => setBox({ set, index }), []);
  const move = useCallback(
    (d) => setBox((b) => b && { ...b, index: (b.index + d + b.set.length) % b.set.length }),
    []
  );

  const cats = ['All', 'Robots', 'Code', 'Hands-on'];
  const count = (c) => (c === 'All' ? PROJECTS.length : PROJECTS.filter((p) => p.cat === c).length);
  const shown = filter === 'All' ? PROJECTS : PROJECTS.filter((p) => p.cat === filter);

  return (
    <Fragment>
      <div className="progress" style={{ width: pct + '%' }} />
      <Rail active={active} />

      <div className="main">

        <header className="hero" id="top">
          <span className="glow" /><span className="grid" />
          <div className="inner">
            <p className="eyebrow">Portfolio · 2024 — 2026</p>
            <h1>Tawfiq<br />Fakhouri</h1>
            <p className="sub">Ten years old · <b>He finds the problem, then builds the answer</b></p>
            <p className="lede">
              Everything here is something Tawfiq actually built — robots that run, games he
              programmed, circuits he soldered, and an app he invented that
              <em> won an award at an international competition</em>.
            </p>
            <div className="chips">
              <span className="chip win"><b>🏆</b> Creative Solution Award · RFO 2025</span>
              <span className="chip"><b>70+</b> projects</span>
              <span className="chip"><b>4</b> certificates</span>
            </div>
          </div>
        </header>

        <section className="sec" id="featured">
          <p className="sec-label">Featured project</p>
          <h2>AI LiveGuard</h2>
          <p className="say">He invented it, designed it, built the app, and presented it himself.</p>

          <div className="feature">
            <div className="fmedia">
            <a className="video" href="https://youtu.be/PFmzdAx26yI?t=30" target="_blank" rel="noopener">
              <img
                src="img/video-poster.jpg"
                alt="Tawfiq presenting the AI LiveGuard system to camera"
              />
              <span className="shade" />
              <span className="play">
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 3.5v17L21 12 6 3.5z" /></svg>
              </span>
            </a>
            </div>

            <div className="fcopy">
              <p className="fintro">
                Football injuries happen when tired players stay on the pitch. Tawfiq's answer: let
                the coach <b>see the tiredness before the injury</b>.
              </p>

              <ol className="how">
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
          <p className="sec-label">Award</p>
          <h2>Creative Solution Award</h2>
          <p className="say">Robot Football Olympics 2025 · Dead Sea, Jordan</p>

          <div className="award has-photo">
            <button
              className="awardshot"
              onClick={() => open(AWARD_PHOTOS, 0)}
              aria-label="Enlarge: the team"
            >
              <img
                src="img/team.jpg"
                alt="Tawfiq and Zaid with their coach Nmaa Al Hawary and the robot they built"
              />
            </button>
            <div>
              <p className="wk">🏆 Robotna · Robot Football Olympics 2025</p>
              <p className="wt">Most creative<br />solution</p>
              <p className="wd">
                Teams came from eleven countries. Tawfiq and his teammate Zaid took the award for
                the <b>most creative solution</b> — judged on the strength of the idea, not just on
                how fast the robot ran.
              </p>
              <p className="wm">AI LiveGuard · 5–6 December 2025 · Hilton, Dead Sea</p>
            </div>
          </div>
        </section>

        <section className="sec" id="projects">
          <p className="sec-label">The work</p>
          <h2>A selection of his work</h2>
          <p className="say">Thirteen of the 70+ projects he has built. Tap any one to see it up close — some of them play.</p>
          <div className="filters">
            {cats.map((c) => (
              <button key={c} className={filter === c ? 'on' : ''} onClick={() => setFilter(c)}>
                {c}<span className="n">{count(c)}</span>
              </button>
            ))}
          </div>
          <Gallery items={shown} onOpen={open} showCat={filter === 'All'} />
        </section>


        <section className="sec" id="certs">
          <p className="sec-label">Certificates</p>
          <h2>Where he has competed and trained</h2>
          <p className="say">Tap one to read it.</p>
          <div className="certs">
            {CERTS.map((c, i) => (
              <button key={c.src} onClick={() => open(CERTS, i)} aria-label={'Enlarge: ' + c.title}>
                <img src={c.src} alt={c.title} loading="lazy" />
              </button>
            ))}
          </div>
        </section>
        <section className="sec" id="tools">
          <p className="sec-label">Toolkit</p>
          <h2>What he builds with</h2>
          <p className="say">Six platforms, not one repeated.</p>
          <div className="plats">
            {TOOLS.map((t) => (
              <div className={'plat' + (t.now ? ' now' : '')} key={t.name}>
                <span className="tbadge"><ToolIcon name={t.icon} /></span>
                <h3>{t.name}</h3>
                <p className="meta">{t.meta}</p>
                <ul className="made">
                  {t.items.map((x) => <li key={x}>{x}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </section>


        <footer>
          <span>Tawfiq Fakhouri · Portfolio</span>
          <span>Built with Nmaa Al Hawary · 2024 — 2026</span>
        </footer>
      </div>

      {box && (
        <Lightbox set={box.set} index={box.index} onClose={() => setBox(null)} onMove={move} />
      )}
    </Fragment>
  );
}
