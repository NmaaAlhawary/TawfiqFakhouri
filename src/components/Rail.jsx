import { SECTIONS } from '../data.js';

export default function Rail({active}){
  return (
    <aside className="rail">
      <div>
        <p className="who">Tawfiq<br/>Fakhouri</p>
        <p className="whos">Skills report · Oct 2026</p>
      </div>
      <nav>
        {SECTIONS.map(s=>(
          <a key={s.id} href={'#'+s.id} className={active===s.id?'on':''}>{s.label}</a>
        ))}
      </nav>
    </aside>
  );
}
