# Builds ElectroDromos's mark, wordmark and share-banner SVGs into public/. Text is outlined from
# Chakra Petch Bold Italic and Barlow (SIL OFL, public/fonts), so they render the same without the
# fonts installed.
# Needs fontTools:  python3 -m venv .venv && .venv/bin/pip install fonttools
# Run from anywhere: .venv/bin/python scripts/make-logo.py /path/to/ElectroDocs
# Then rasterize the share banner (sharp ships with Next):
#   node -e "require('sharp')('public/og-banner.svg').png().toFile('public/og-banner.png')"
from fontTools.ttLib import TTFont
from fontTools.pens.svgPathPen import SVGPathPen
from fontTools.pens.transformPen import TransformPen
import sys
root = sys.argv[1]
BLACK, WHITE, CYAN, RED, INK = "#08090B", "#F4F6F7", "#19E3E8", "#FF4B3A", "#0B0D10"

# The D on a 64-unit grid: a track's straight (cyan) and its turn (red), split by a small gap.
STRAIGHT = "13,12 23,12 23,52 13,52"
TURN = "M27,12 H35 A20,20 0 0 1 35,52 H27 V42 H35 A10,10 0 0 0 35,22 H27 Z"
# After the slant the D spans x 9.5..55.3 and y 12..52.
MARK_X, MARK_Y, MARK_W, MARK_H = 9.5, 12, 46, 40
def mark(dx=0, dy=0, s=1.0):
    # Slanted 10 degrees about the D's center to match the italic lettering.
    t = f'transform="translate({dx} {dy}) scale({s}) translate(32 32) skewX(-10) translate(-32 -32)"'
    return (f'<g {t}><polygon points="{STRAIGHT}" fill="{CYAN}"/>'
            f'<path d="{TURN}" fill="{RED}"/></g>')

open(f"{root}/public/logo-mark.svg","w").write(
 f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64" height="64">'
 f'<title>ElectroDromos</title><rect width="64" height="64" rx="14" fill="{BLACK}"/>{mark()}</svg>\n')
open(f"{root}/public/logo-mark-transparent.svg","w").write(
 f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="6 9 52 46" width="52" height="46">'
 f'<title>ElectroDromos</title>{mark()}</svg>\n')

def load(name):
    font = TTFont(f"{root}/public/fonts/{name}")
    return font, font.getGlyphSet(), font.getBestCmap(), font["head"].unitsPerEm
display = load("ChakraPetch-BoldItalic.ttf")
body = load("Barlow-Regular.ttf")
cap = display[0]["OS/2"].sCapHeight

def text_paths(f, text, x0, baseline, size, tracking=0.0):
    """Outline `text`; returns (list of path d, advance end x)."""
    _, gs, cmap, upm = f
    scale = size / upm; x = x0; out = []
    for ch in text:
        g = cmap[ord(ch)]; pen = SVGPathPen(gs)
        gs[g].draw(TransformPen(pen, (scale, 0, 0, -scale, x, baseline)))
        out.append(pen.getCommands()); x += gs[g].width * scale + tracking * size
    return out, x - tracking * size

def wordmark(fg, accent):
    """Returns (svg body, width, height) for the mark and ELECTRODROMOS, DROMOS in the accent."""
    size = 100; capH = cap * size / display[3]
    # Mark scaled so the D spans the cap height plus a little.
    s = (capH * 1.25) / MARK_H
    baseline = 20 + capH * 1.25 * 0.5 + capH * 0.5
    m = mark(dx=8 - MARK_X * s, dy=20 - MARK_Y * s, s=s)
    word, end = text_paths(display, "ELECTRODROMOS", 8 + MARK_W * s + 26, baseline, size, 0.02)
    paths = "".join(f'<path d="{d}" fill="{fg if i < 7 else accent}"/>' for i, d in enumerate(word))
    return m + paths, end + 12, baseline + 24

for name, fg, accent in [("logo-wordmark.svg", WHITE, CYAN),            # for dark grounds
                         ("logo-wordmark-light.svg", INK, "#0A8F94")]:  # for light grounds
    svg, W, H = wordmark(fg, accent)
    open(f"{root}/public/{name}","w").write(
      f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {W:.0f} {H:.0f}" width="{W:.0f}" height="{H:.0f}">'
      f'<title>ElectroDromos</title>{svg}</svg>\n')

# Share banner, 1200x630: the brand thread on top, the wordmark, a tagline and the credit.
svg, W, H = wordmark(WHITE, CYAN)
k = 990 / W
grid = "".join(f'<line x1="{x}" y1="470" x2="{x}" y2="630" stroke="#12151A"/>' for x in range(0, 1201, 60))
grid += "".join(f'<line x1="0" y1="{y}" x2="1200" y2="{y}" stroke="#12151A"/>' for y in range(480, 631, 60))
tag, _ = text_paths(body, "Battery-proof Pedro Pathing for FTC.", 90, 382, 38)
credit, _ = text_paths(body, "Made by ElectroLights 30686 · Built on Pedro Pathing", 90, 560, 22)
open(f"{root}/public/og-banner.svg","w").write(
  f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 630" width="1200" height="630">'
  f'<title>ElectroDromos</title><rect width="1200" height="630" fill="{BLACK}"/>{grid}'
  f'<rect width="935" height="7" fill="{CYAN}"/><rect x="943" width="257" height="7" fill="{RED}"/>'
  f'<g transform="translate(100 {300 - H * k:.1f}) scale({k:.4f})">{svg}</g>'
  + "".join(f'<path d="{d}" fill="#9BA3AC"/>' for d in tag)
  + "".join(f'<path d="{d}" fill="#6C747D"/>' for d in credit)
  + '</svg>\n')
print("ok")
