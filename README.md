# Wedding Invitation (React + Vite)

A single-page wedding invitation website, ready for Netlify.

## Edit the details
All text — names, parents, date, function hall, map, relatives and contact numbers — lives in **`src/data/wedding.js`**.

- `dateTime` drives the countdown timer (format `YYYY-MM-DDTHH:mm:ss`).
- `venue.mapsLink`: Google Maps → your hall → **Share → Copy link**.
- `venue.mapEmbed`: Google Maps → **Share → Embed a map** → copy only the `src="..."` URL.

## Add your 2 photos
1. Put your pictures in `public/photos/`, e.g. `photo1.jpg` (groom) and `photo2.jpg` (bride). Portrait (3:4) photos look best.
2. In `src/data/wedding.js`, change `photo: '/photos/photo1.svg'` → `'/photos/photo1.jpg'` (same for `photo2`).
3. Optionally delete the placeholder `.svg` files.

## Run locally
```bash
npm install
npm run dev
```

## Deploy to Netlify
**Option A – drag & drop:** run `npm run build`, then drag the `dist/` folder onto https://app.netlify.com/drop.

**Option B – from Git:** push this folder to GitHub, then in Netlify choose *Add new site → Import from Git*. Build settings are picked up from `netlify.toml` (`npm run build`, publish `dist`).

## God photos
The three God images are in `public/photos/gods/`. To use different ones, replace those files (keep the same names) or change the `gods` list in `src/data/wedding.js`.

**Image credits (Wikimedia Commons):**
- Sri Ganesha — Raja Ravi Varma, public domain ([source](https://commons.wikimedia.org/wiki/File:Ganapati1.jpg))
- Sri Shiva Parvati — Ravi Varma Press, public domain ([source](https://commons.wikimedia.org/wiki/File:Siva-parvati-by-raja-ravi-varma.jpg))
- Sri Lakshmi Narasimha Swamy — photo by Bshankar31, CC BY-SA 3.0 ([source](https://commons.wikimedia.org/wiki/File:Lord_Lakshmi_Narasimha_Swamy.jpg))
