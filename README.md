# ⚒️ The Forge: 8-Bit

**A pixel-art, dungeon-themed reskin of [The Forge](https://github.com/Micah-Temple/the-forge) — the same daily-discipline dashboard, rebuilt with a retro game aesthetic.**

**Live app:** [micah-temple.github.io/the-forge-8bit](https://micah-temple.github.io/the-forge-8bit/)

This is a standalone companion to the original Forge: identical habit-tracking engine and scoring, wrapped in an 8-bit / dungeon-crawler presentation. It runs as an installable, offline-first progressive web app with zero third-party dependencies.

## What makes it "8-bit"

- **Custom pixel font, compiled from scratch.** Rather than shipping an off-the-shelf webfont, this project generates its own bitmap typeface (`forgepixel.ttf`) at build time: each glyph is rasterized from a monospace source at low resolution, then every "on" pixel is emitted as a square contour and assembled into a real TrueType font via `fontTools`. Because it's a genuine font file (not canvas-drawn text), it wraps, scales crisply, and works inside form fields — including the note textarea — while looking authentically blocky.
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

## Build pipeline

The pixel assets are generated, not hand-committed as one-offs:

```
buildfont.py   # rasterize glyphs -> square contours -> forgepixel.ttf (fontTools)
sprites.py     # pixel-grid anvil/hammer sprites + app icons (PIL, nearest-neighbor)
```

## Tech

- **Vanilla HTML/CSS/JS**, single `index.html`, no frameworks, no build step at runtime.
- **Service worker** with cache-first offline support; **web app manifest** for standalone install.
- **GitHub Pages** static hosting.
- **Python** (`fontTools`, `Pillow`) for the one-time asset generation.

## Run locally

```bash
git clone https://github.com/Micah-Temple/the-forge-8bit.git
cd the-forge-8bit
python3 -m http.server 8000
# open http://localhost:8000
```

---

*"Strong blades are forged with a thousand blows."*
