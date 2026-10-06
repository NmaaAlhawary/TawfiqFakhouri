/* Simple line icons drawn to match the page, rather than brand logos. */

const PATHS = {
  // LEGO brick with studs
  brick: (
    <>
      <rect x="3" y="9" width="18" height="11" rx="1.6" />
      <path d="M7.5 9V7.2a1.2 1.2 0 0 1 1.2-1.2h.6a1.2 1.2 0 0 1 1.2 1.2V9M13.5 9V7.2a1.2 1.2 0 0 1 1.2-1.2h.6a1.2 1.2 0 0 1 1.2 1.2V9" />
    </>
  ),
  // driving robot: body, wheels, sensor eyes
  rover: (
    <>
      <rect x="4" y="7" width="16" height="8" rx="1.6" />
      <circle cx="8" cy="18" r="2.2" />
      <circle cx="16" cy="18" r="2.2" />
      <circle cx="9.5" cy="11" r="1.1" />
      <circle cx="14.5" cy="11" r="1.1" />
    </>
  ),
  // code blocks
  blocks: (
    <>
      <path d="M9.5 5.5 4 12l5.5 6.5M14.5 5.5 20 12l-5.5 6.5" />
    </>
  ),
  // trophy / competition
  trophy: (
    <>
      <path d="M8 4h8v5a4 4 0 0 1-8 0V4Z" />
      <path d="M8 5.5H5.5A1.5 1.5 0 0 0 4 7a3.5 3.5 0 0 0 3.5 3.5M16 5.5h2.5A1.5 1.5 0 0 1 20 7a3.5 3.5 0 0 1-3.5 3.5" />
      <path d="M12 13v4M9 20h6M10 17h4" />
    </>
  ),
  // microcontroller chip
  chip: (
    <>
      <rect x="7" y="7" width="10" height="10" rx="1.4" />
      <path d="M10 4v3M14 4v3M10 17v3M14 17v3M4 10h3M4 14h3M17 10h3M17 14h3" />
    </>
  ),
  // quadcopter drone
  drone: (
    <>
      <rect x="9.5" y="9.5" width="5" height="5" rx="1.2" />
      <path d="M9.5 9.5 6 6M14.5 9.5 18 6M9.5 14.5 6 18M14.5 14.5 18 18" />
      <circle cx="5" cy="5" r="2.2" />
      <circle cx="19" cy="5" r="2.2" />
      <circle cx="5" cy="19" r="2.2" />
      <circle cx="19" cy="19" r="2.2" />
    </>
  ),
};

export default function ToolIcon({ name }) {
  const d = PATHS[name] || PATHS.brick;
  return (
    <svg
      className="ticon"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {d}
    </svg>
  );
}
