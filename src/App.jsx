import { useState, useEffect, useCallback, Fragment } from 'react';
import { SECTIONS, TOOLS, PROJECTS, CERTS, AWARD_PHOTOS } from './data.js';
import Rail from './components/Rail.jsx';
import Gallery from './components/Gallery.jsx';
import Lightbox from './components/Lightbox.jsx';

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
            <p className="sub">10 years old · Robot builder · Coder · Maker</p>
            <p className="lede">
              Everything here is something Tawfiq actually built — robots that run, games he
              programmed, circuits he soldered, and an app he invented that
              <em> won an award at an international competition</em>.
            </p>
            <div className="chips">
              <span className="chip win"><b>🏆</b> Creative Solution Award · RFO 2025</span>
              <span className="chip"><b>13</b> projects</span>
              <span className="chip"><b>4</b> certificates</span>
              <span className="chip">LEGO · mBot2 · Scratch · drones</span>
            </div>
          </div>
        </header>

        <section className="sec" id="featured">
          <p className="sec-label">Featured project</p>
          <h2>AI LiveGuard</h2>
          <p className="say">He invented it, designed it, built the app, and presented it himself.</p>
          <a className="video" href="https://youtu.be/PFmzdAx26yI" target="_blank" rel="noopener">
            <img
              src="img/video-poster.jpg"
              alt="Tawfiq presenting the AI LiveGuard system beside a diagram of a conductive sports vest"
            />
            <span className="shade" />
            <span className="play">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 3.5v17L21 12 6 3.5z" /></svg>
            </span>
            <span className="cap">
              <span className="kicker">Watch him present it · 2 minutes</span>
              <p className="vt">AI LiveGuard System</p>
              <p className="vm">Tawfiq Fakhouri &amp; Zaid Diken · opens on YouTube</p>
            </span>
          </a>
          <p className="measure" style={{ marginTop: '26px' }}>
            Football players wear a sensor vest. An app watches their heart rate, speed and
            tiredness in real time, then tells the coach who should be substituted. Tawfiq found the
            problem himself, designed the solution, and built the app screens in Adalo.
          </p>
          <p className="measure">
            <a href="https://nmaas-team-1.adalo.com/ai" target="_blank" rel="noopener" className="btn">
              Open the app ↗
            </a>
          </p>
        </section>

        <section className="sec" id="award">
          <p className="sec-label">Award</p>
          <h2>Creative Solution Award</h2>
          <p className="say">Robot Football Olympics 2025 · Dead Sea, Jordan</p>

          <div className="award has-photo">
            <button
              className="awardshot"
              onClick={() => open(AWARD_PHOTOS, 0)}
              aria-label="Enlarge: lifting the cup on stage"
            >
              <img
                src="img/award-stage.jpg"
                alt="Tawfiq lifting the trophy on stage with his teammate and coach"
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
              <button className="awardmore" onClick={() => open(AWARD_PHOTOS, 1)}>
                <img src="img/award-ceremony.jpg" alt="Tawfiq and Zaid holding the trophy" />
                <span>See both photos →</span>
              </button>
            </div>
          </div>
        </section>

        <section className="sec" id="projects">
          <p className="sec-label">The work</p>
          <h2>Thirteen things he built</h2>
          <p className="say">Tap any one to see it up close — some of them play.</p>
          <div className="filters">
            {cats.map((c) => (
              <button key={c} className={filter === c ? 'on' : ''} onClick={() => setFilter(c)}>
                {c}<span className="n">{count(c)}</span>
              </button>
            ))}
          </div>
          <Gallery items={shown} onOpen={open} showCat={filter === 'All'} />
        </section>

        <section className="sec" id="tools">
          <p className="sec-label">Toolkit</p>
          <h2>What he builds with</h2>
          <p className="say">Six platforms, not one repeated.</p>
          <div className="plats">
            {TOOLS.map((t) => (
              <div className={'plat' + (t.now ? ' now' : '')} key={t.name}>
                <h3>{t.name}</h3>
                <p className="meta">{t.meta}</p>
                <p>{t.text}</p>
              </div>
            ))}
          </div>
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
          <figure className="team">
            <img src="img/rfo-team.jpg" alt="Tawfiq with his teammate at the robotics competition" />
            <figcaption>With his teammate Zaid at the Dead Sea.</figcaption>
          </figure>
        </section>

        <section className="sec" id="about">
          <p className="sec-label">About</p>
          <h2>About Tawfiq</h2>
          <p className="measure" style={{ fontSize: 'clamp(18px,2vw,23px)', lineHeight: 1.5 }}>
            Tawfiq is ten. He builds robots, writes games, solders his own circuits and flies FPV
            drones — and the thing he does best is <b>look at a problem and think of something to
            build that would solve it</b>.
          </p>
          <p className="measure">
            That is how AI LiveGuard started, and it is why the judges at the Dead Sea gave him the
            Creative Solution Award. He is now training on LEGO Mindstorms for competition.
          </p>
          <p className="measure">
            Everything in this portfolio was built with his instructor, <b>Nmaa Al Hawary</b>, between
            2024 and 2026.
          </p>
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
