# Tawfiq Portfolio

Tawfiq Fakhouri's skills report — React + Vite.

## Run it

```bash
cd "~/Desktop/tawfiq portfolio"
npm install     # only the first time
npm run dev     # opens http://localhost:5173
```

Save any file and the browser updates instantly. Stop the server with `Ctrl+C`.

## Build for the web

```bash
npm run build     # output goes to dist/
npm run preview   # check the built version locally
```

Upload the `dist/` folder to any host (Vercel, Netlify, GitHub Pages).

## Where to change things

| What you want to change | File |
|---|---|
| Any wording, skill levels, projects, certificates | `src/data.js` |
| Colours, fonts, spacing, layout | `src/styles.css` (tokens are at the top, in `:root`) |
| Page structure / section order | `src/App.jsx` |
| Photos | `public/img/` — keep the same filename to swap a picture |

### Adding a project
Open `src/data.js`, find `PROJECTS`, and copy one block:

```js
{ src:'img/your-photo.jpg', cat:'Robots', title:'Name of it',
  note:'One short line about it.' },
```

`cat` must be `Robots`, `Code`, or `Hands-on`. Add `link:'https://...'`
to make the card open a live link instead of enlarging the photo.

### Changing a skill level
In `LEVELS`, `pct` is the bar width (0–100) and `tag` is the label.
Add `grow:true` to colour it orange instead of green.
