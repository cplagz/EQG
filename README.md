# Emby Maximum Playback Quality Guide

## Real screenshot references

The Android mobile bitrate step and Web app playback-settings step include real,
locally bundled screenshots with source credits and tap-to-enlarge controls.
Android TV and Fire TV also offer an expandable Android TV player-menu reference
that explicitly applies to the current video only. Public source captures are
historical examples; other steps retain labeled illustrations. See
`assets/screenshots/SOURCES.md` for source dates, credits, and coverage.

Keep `screenshots.js`, `screenshots.css`, and `assets/` beside the original files
when publishing. No external image hosting is needed.

A lightweight, responsive, static, interactive guide for choosing the highest available streaming bitrate across Emby clients.

## Files
- `index.html` — single-page website content
- `styles.css` — mobile-first responsive design
- `app.js` — device selection, steps, search and shareable device links
- `.nojekyll` — ensures GitHub Pages serves files directly

No build process, framework, external fonts, analytics or API keys. All text and illustrations are included in the files. Works offline after downloading all files.

## Publish on GitHub Pages
1. Create a **public** GitHub repository, for example `emby-quality-guide`.
2. Upload `index.html`, `styles.css`, `app.js` and `.nojekyll` to the repository root. Commit.
3. Open **Settings → Pages → Build and deployment**.
4. Choose **Deploy from a branch**, select `main` and `/ (root)`, then Save.
5. Your site should be at `https://YOUR-USERNAME.github.io/emby-quality-guide/` after GitHub finishes deploying.

## Publish on Cloudflare Pages
1. In Cloudflare, choose **Workers & Pages → Create → Pages** (labels may change).
2. Use **Direct Upload** and upload this folder or the ZIP (if supported by the current interface); alternatively connect a GitHub repository.
3. For Git-based deployment use **no build command** and set the output directory to `/` or the repository root as Cloudflare's UI permits.
4. Publish and use the generated `*.pages.dev` URL. You can attach a custom domain later.

## Preview locally
Open `index.html` in a browser. For a local server, run `python3 -m http.server 8000` from this directory and browse to `http://localhost:8000`.

## Important maintenance note
This is an independent community guide, not an Emby product. Specific menu labels change across device types, client versions and releases. The Android TV/Fire TV and Roku menu paths are directly supported by Emby community documentation; other clients are intentionally labeled version-dependent. Verify paths on a specific device before making absolute claims.

Sources:
- https://emby.media/support/articles/Transcoding.html
- https://emby.media/support/articles/Android-TV.html
- https://support.emby.media/support/articles/Android-Mobile.html
- https://emby.media/support/articles/Web-Client.html
- https://emby.media/community/topic/136022-how-to-adjust-video-quality/
- https://emby.media/community/topic/79491-stream-quality-settings-in-app/
