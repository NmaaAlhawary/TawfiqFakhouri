import { Fragment } from 'react';

export default function Gallery({ items, onOpen, showCat }) {
  return (
    <div className="gal">
      {items.map((it, i) => {
        const inner = (
          <Fragment>
            <span className="ph">
              <img src={it.src} alt={it.title} loading="lazy" />
              {showCat && <span className="cat">{it.cat}</span>}
              {it.link && <span className="live">Open live ↗</span>}
              {it.video && (
                <span className="vbadge">
                  <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 3.5v17L21 12 6 3.5z" /></svg>
                  Video
                </span>
              )}
            </span>
            <span className="cap"><b>{it.title}</b><span>{it.note}</span></span>
          </Fragment>
        );
        return it.link ? (
          <a className="card linked" key={it.src} href={it.link} target="_blank" rel="noopener">
            {inner}
          </a>
        ) : (
          <button
            className="card"
            key={it.src}
            onClick={() => onOpen(items, i)}
            aria-label={(it.video ? 'Play: ' : 'Enlarge: ') + it.title}
          >
            {inner}
          </button>
        );
      })}
    </div>
  );
}
