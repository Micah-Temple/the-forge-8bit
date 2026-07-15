# ⚒️ The Forge: 8-Bit

**A pixel-art, dungeon-themed reskin of [The Forge](https://github.com/Micah-Temple/the-forge) — the same daily-discipline dashboard, rebuilt with a retro game aesthetic.**

**Live app:** [micah-temple.github.io/the-forge-8bit](https://micah-temple.github.io/the-forge-8bit/)

This is a standalone companion to the original Forge: identical habit-tracking engine and scoring, wrapped in an 8-bit / dungeon-crawler presentation. It runs as an installable, offline-first progressive web app with zero third-party dependencies.

## What makes it "8-bit"

- **Real pixel typefaces.** Headings, buttons, and scores are set in [Press Start 2P](https://fonts.google.com/specimen/Press+Start+2P) (the classic NES-era arcade face); body text, notes, and quotes use [VT323](https://fonts.google.com/specimen/VT323) (a DEC VT320 terminal face) for readability at small sizes. Both are open-source (SIL OFL, licenses included in the repo) and bundled locally as `.woff2`, so the app stays fully offline-capable with zero third-party requests.
- **Hand-built pixel sprites.** The anvil, hammer, and app icons are drawn from pixel grids in Python/PIL and scaled with nearest-neighbor so edges stay hard. No smoothing.
- **8-bit boot animation.** On launch, a pixel hammer swings down in stepped frames, strikes the anvil, throws square sparks, shakes the screen, and reveals a pixel title card — the retro version of the original's forge animation. Uses CSS `steps()` timing for choppy, frame-by-frame motion.
- **Dungeon palette.** Dark stone background with a glowing ember gradient and drifting pixel embers, styled after games like Pixel Dungeon and Enchanted Cave.
- **Chunky pixel chrome.** Sharp corners, stepped/inset borders, and RPG-style stat labels (`[STR] Physique`, `[FTH] Piety`, etc.) in place of soft cards.

## Shared engine

Everything below is identical to the original Forge, so records are fully portable between the two apps:

- **Three-state habit logging** — Complete / Incomplete / N/A. N/A days are excluded from the scoring denominator and don't break streaks.
- **Scoring** — daily 0–10 score, weekly average, two-decimal monthly "locked-in score," and per-habit streaks.
- **12-week heatmap**, **note-to-tomorrow** forward journaling, and six configurable pillars.
- **Local-first data** in `localStorage` under a separate key (`forge-8bit`), so this app keeps its own independent history. The backup JSON schema is byte-for-byte compatible with the original — **Copy backup** in one app and **Paste backup** in the other to migrate.

## Tech

- **Vanilla HTML/CSS/JS**, single `index.html`, no frameworks, no build step at runtime.
- **Service worker** with cache-first offline support; **web app manifest** for standalone install.
- **GitHub Pages** static hosting.
- **Python** (`Pillow`) for one-time sprite/icon generation; sprites are drawn from pixel grids and scaled nearest-neighbor so edges stay hard.
- **Fonts:** Press Start 2P © CodeMan38, VT323 © Peter Hull — both under the SIL Open Font License (see `FONT-LICENSE-*.txt`).

## Run locally

```bash
git clone https://github.com/Micah-Temple/the-forge-8bit.git
cd the-forge-8bit
python3 -m http.server 8000
# open http://localhost:8000
```

---

*"Strong blades are forged with a thousand blows."*
