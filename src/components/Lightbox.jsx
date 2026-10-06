import { useEffect } from 'react';

export default function Lightbox({ set, index, onClose, onMove }) {
  useEffect(() => {
    const k = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onMove(1);
      if (e.key === 'ArrowLeft') onMove(-1);
    };
    window.addEventListener('keydown', k);
    return () => window.removeEventListener('keydown', k);
  }, [onClose, onMove]);

  const it = set[index];

  return (
    <div className="lb" onClick={onClose} role="dialog" aria-modal="true" aria-label={it.title}>
      <button className="x" onClick={onClose} aria-label="Close">×</button>
      {set.length > 1 && (
        <button className="nav prev" aria-label="Previous"
                onClick={(e) => { e.stopPropagation(); onMove(-1); }}>‹</button>
      )}
      {set.length > 1 && (
        <button className="nav next" aria-label="Next"
                onClick={(e) => { e.stopPropagation(); onMove(1); }}>›</button>
      )}
      <div className="stage">
        {it.video ? (
          <video
            key={it.video}
            src={it.video}
            poster={it.src}
            controls
            autoPlay
            loop
            muted
            playsInline
            onClick={(e) => e.stopPropagation()}
          />
        ) : (
          <img src={it.src} alt={it.title} onClick={(e) => e.stopPropagation()} />
        )}
      </div>
      <div className="meta"><b>{it.title}</b><span>{it.note}</span></div>
    </div>
  );
}
