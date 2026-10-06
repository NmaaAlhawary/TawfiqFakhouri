import { useState, useEffect } from 'react';
import { LEVELS } from '../data.js';

export default function Levels(){
  const [lit,setLit] = useState(false);
  useEffect(()=>{ const t=setTimeout(()=>setLit(true),120); return ()=>clearTimeout(t); },[]);
  return (
    <div className="levels">
      {LEVELS.map(l=>(
        <div className={'lv'+(l.grow?' grow':'')} key={l.name}>
          <b>{l.name}</b>
          <span className="bar"><i style={{width:(lit?l.pct:0)+'%'}}/></span>
          <span className="tag">{l.tag}</span>
        </div>
      ))}
    </div>
  );
}
