import { Fragment, useEffect, useRef } from 'react';

/* Plays only while the card is on screen, so several clips never decode at once. */
function InlineVideo({ item }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) el.play().catch(() => {});
        else el.pause();
      },
      { threshold: 0.3 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <video
      ref={ref}
      src={item.video}
      poster={item.src}
      muted
      loop
      playsInline
      preload="metadata"
      aria-label={item.title}
    />
  );
}

export default function Gallery({ items, onOpen, showCat }) {
  return (
    <div className="gal">
      {items.map((it, i) => {
        const inner = (
          <Fragment>
            <span className="ph">
              {it.video ? (
                <InlineVideo item={it} />
              ) : (
                <img
                  src={it.src}
                  alt={it.title}
                  loading="lazy"
                  style={it.pos ? { objectPosition: it.pos } : undefined}
                />
              )}
              {showCat && <span className="cat">{it.cat}</span>}
              {it.link && <span className="live">Open live ↗</span>}
              {it.video && <span className="vbadge">Playing</span>}
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
            aria-label={(it.video ? 'Play full size: ' : 'Enlarge: ') + it.title}
          >
            {inner}
          </button>
        );
      })}
    </div>
  );
}
