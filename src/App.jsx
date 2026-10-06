import { useState, useEffect, useCallback, Fragment } from 'react';
import { SECTIONS, KITS, PROJECTS, CERTS, PATH, OUTCOMES } from './data.js';
import Rail from './components/Rail.jsx';
import Levels from './components/Levels.jsx';
import Gallery from './components/Gallery.jsx';
import Lightbox from './components/Lightbox.jsx';

export default function App(){
  const [active,setActive] = useState('top');
  const [pct,setPct] = useState(0);
  const [filter,setFilter] = useState('All');
  const [box,setBox] = useState(null);

  useEffect(()=>{
    const onScroll = ()=>{
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      setPct(max>0 ? (h.scrollTop/max)*100 : 0);
      let cur = 'top';
      for(const s of SECTIONS){
        const n = document.getElementById(s.id);
        if(n && n.getBoundingClientRect().top <= h.clientHeight*0.35) cur = s.id;
      }
      setActive(cur);
    };
    onScroll();
    window.addEventListener('scroll',onScroll,{passive:true});
    window.addEventListener('resize',onScroll);
    return ()=>{window.removeEventListener('scroll',onScroll);window.removeEventListener('resize',onScroll);};
  },[]);

  useEffect(()=>{
    document.body.style.overflow = box ? 'hidden' : '';
    return ()=>{document.body.style.overflow='';};
  },[box]);

  const open = useCallback((set,index)=>setBox({set,index}),[]);
  const move = useCallback(d=>setBox(b=>b && ({...b,index:(b.index+d+b.set.length)%b.set.length})),[]);

  const cats = ['All','Robots','Code','Hands-on'];
  const count = c => c==='All' ? PROJECTS.length : PROJECTS.filter(p=>p.cat===c).length;
  const shown = filter==='All' ? PROJECTS : PROJECTS.filter(p=>p.cat===filter);

  return (
    <Fragment>
      <div className="progress" style={{width:pct+'%'}}/>
      <Rail active={active}/>

      <div className="main">

        <header className="hero" id="top">
          <span className="glow"/><span className="grid"/>
          <div className="inner">
            <p className="eyebrow">Skills Report · October 2026</p>
            <h1>Tawfiq<br/>Fakhouri</h1>
            <p className="sub">Age 10 · Robotics · Electronics · AI · <b>Advanced for his age</b></p>
            <p className="lede">Tawfiq doesn't just follow instructions — he <strong>designs robots,
              builds them with his hands, and comes up with his own ideas</strong>. His building and
              his thinking are already ahead of his age. <em>Coding is the part we grow next</em>,
              and that is exactly what the competition training is for.</p>
            <div className="chips">
              <span className="chip win"><b>🏆</b> Creative Solution Award · RFO 2025</span>
              <span className="chip"><b>5</b> robotics platforms</span>
              <span className="chip"><b>12</b> of his own projects</span>
              <span className="chip">FPV drone &amp; soldering</span>
            </div>
          </div>
        </header>

        <section className="sec" id="video">
          <p className="sec-label">Watch first</p>
          <h2>He presents his own invention</h2>
          <p className="say">Two minutes. This says more than any report can.</p>
          <a className="video" href="https://youtu.be/PFmzdAx26yI" target="_blank" rel="noopener">
            <img src="img/video-poster.jpg" alt="Tawfiq presenting the AI LiveGuard system beside a diagram of a conductive sports vest"/>
            <span className="shade"/>
            <span className="play"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 3.5v17L21 12 6 3.5z"/></svg></span>
            <span className="cap">
              <span className="kicker">RFO 4.0 · Project presentation</span>
              <p className="vt">AI LiveGuard System</p>
              <p className="vm">Tawfiq Fakhouri &amp; Zaid Diken · opens on YouTube</p>
            </span>
          </a>
          <p className="measure" style={{marginTop:'26px'}}>His idea: football players wear a sensor
            vest, and an app watches their heart rate, speed and tiredness in real time — then tells
            the coach who should be substituted. He found the problem, designed the solution, and
            explained it on camera himself.</p>
          <p className="measure"><a href="https://nmaas-team-1.adalo.com/ai" target="_blank"
            rel="noopener" className="btn">Open the AI LiveGuard app ↗</a></p>
        </section>

        <section className="sec" id="level">
          <p className="sec-label">Assessment</p>
          <h2>Where he is right now</h2>
          <p className="say">Green = already strong. Orange = what we are focusing on.</p>
          <Levels/>
        </section>

        <section className="sec" id="kits">
          <p className="sec-label">Platforms</p>
          <h2>The robot kits he has used</h2>
          <p className="say">Five different kits — not one platform repeated.</p>
          <div className="plats">
            {KITS.map(k=>(
              <div className={'plat'+(k.now?' now':'')} key={k.name}>
                <h3>{k.name}</h3>
                <p className="meta">{k.meta}</p>
                <p>{k.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="sec" id="projects">
          <p className="sec-label">His work</p>
          <h2>Twelve projects he built</h2>
          <p className="say">Tap any one to see it up close.</p>
          <div className="filters">
            {cats.map(c=>(
              <button key={c} className={filter===c?'on':''} onClick={()=>setFilter(c)}>
                {c}<span className="n">{count(c)}</span>
              </button>
            ))}
          </div>
          <Gallery items={shown} onOpen={open} showCat={filter==='All'}/>
          <p className="measure" style={{marginTop:'30px'}}>He also built a sea game played with your
            <b> hands in the air</b> using AI body tracking, and a fruit catcher game. The important
            part: these use <b>variables, loops and if / else</b> — the same ideas a competition
            robot needs.</p>
        </section>

        <section className="sec" id="record">
          <p className="sec-label">Record</p>
          <h2>He didn't just take part — he won</h2>
          <p className="say">Robot Football Olympics 2025 · Dead Sea, Jordan</p>

          <div className="award">
            <div>
              <p className="wk">🏆 Robot Football Olympics 2025 · Robotna</p>
              <p className="wt">Creative Solution<br/>Award</p>
              <p className="wd">Of all the teams at the Dead Sea, Tawfiq and his teammate Zaid took
                home the award for the <b>most creative solution</b> — judged on the idea itself, not
                just on how fast the robot ran. That is the award that matches exactly what he is
                best at: looking at a problem and inventing something to solve it.</p>
              <p className="wm">AI LiveGuard · Tawfiq Fakhouri &amp; Zaid Diken · 5–6 December 2025</p>
            </div>
          </div>

          <p className="say" style={{margin:'44px 0 24px'}}>Certificates</p>
          <div className="certs">
            {CERTS.map((c,i)=>(
              <button key={c.src} onClick={()=>open(CERTS,i)} aria-label={'Enlarge: '+c.title}>
                <img src={c.src} alt={c.title} loading="lazy"/>
              </button>
            ))}
          </div>
          <figure className="team">
            <img src="img/rfo-team.jpg" alt="Tawfiq with his teammate at the robotics competition"/>
            <figcaption>At the competition with his teammate.</figcaption>
          </figure>
        </section>

        <section className="sec">
          <p className="sec-label">What matters most</p>
          <h2>His strongest quality</h2>
          <p className="measure" style={{fontSize:'clamp(18px,2vw,23px)',lineHeight:1.5}}>
            Most children at this level can follow a tutorial. Tawfiq does something harder and far
            more valuable: <b>he looks at a problem and thinks of something to build that would solve
            it.</b></p>
          <p className="measure">That is the exact skill robotics competitions are scored on. It
            cannot be taught quickly — and he already has it. The judges at the Dead Sea saw it too:
            they gave him the <b>Creative Solution Award</b>.</p>
        </section>

        <section className="sec" id="plan">
          <p className="sec-label">The plan</p>
          <h2>What we work on next</h2>
          <p className="say">Not beginner robotics. It starts from where he already is.</p>
          <ol className="path">
            {PATH.map(([t,d])=>(
              <li key={t}><span><b>{t}</b><span>{d}</span></span></li>
            ))}
          </ol>
          <div className="goal">
            <p className="from">"I know what I want the robot to do."</p>
            <p className="arrow">— the goal —</p>
            <p className="to">"I can design it, code it, test it, fix it and make it better — by myself."</p>
          </div>
        </section>

        <section className="sec">
          <p className="sec-label">Outcome</p>
          <h2>By the end of the training</h2>
          <p className="say">He will be able to:</p>
          <ul className="plain">
            {OUTCOMES.map((o,i)=>(
              <li key={i}>{o[0]}<b>{o[1]}</b>{o[2]}</li>
            ))}
          </ul>
          <p className="measure" style={{marginTop:'30px'}}>He has a very strong base for a
            10-year-old. The work ahead is simply turning that base into a complete, independent
            competition skill set.</p>
        </section>

        <footer>
          <span>Prepared by Nmaa Al Hawary</span>
          <span>Tawfiq Fakhouri · Age 10 · October 2026</span>
        </footer>
      </div>

      {box && <Lightbox set={box.set} index={box.index}
        onClose={()=>setBox(null)} onMove={move}/>}
    </Fragment>
  );
}
