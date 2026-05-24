from fontTools.ttLib import TTFont
from fontTools.pens.svgPathPen import SVGPathPen
from fontTools.misc.transform import Identity

font_path = r".next/dev/static/media/f48d461c03e0a8ec-s.p.13m1ppbimti50.woff2"
font = TTFont(font_path)

glyf = font['glyf'] if 'glyf' in font else None
cmap = font.getBestCmap()
hmtx = font['hmtx']
head = font['head']

units_per_em = head.unitsPerEm
target_height = 220  # px height for the SVG
scale = target_height / units_per_em

text = "Linde"
glyph_names = [cmap[ord(c)] for c in text]

# Collect paths and advance widths
paths = []
total_width = 0
x_cursor = 0

for gname in glyph_names:
    pen = SVGPathPen(font.getGlyphSet())
    font.getGlyphSet()[gname].draw(pen)
    d = pen.getCommands()
    advance = hmtx.metrics[gname][0]
    paths.append((d, x_cursor, advance))
    x_cursor += advance

total_width = x_cursor

# Build SVG with transform: flip Y (font coords go up, SVG goes down)
# ascent from OS/2 table
os2 = font['OS/2']
ascent = os2.sTypoAscender

svg_w = round(total_width * scale, 1)
svg_h = round(target_height * 1.2, 1)
baseline_y = round(ascent * scale, 1)

print(f"<!-- viewBox width={svg_w} height={svg_h} baseline={baseline_y} scale={scale:.4f} -->")
print(f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {svg_w} {svg_h}" width="{svg_w}" height="{svg_h}">')

for (d, x_off, adv) in paths:
    tx = round(x_off * scale, 2)
    print(f'  <path transform="translate({tx},{baseline_y}) scale({scale:.4f},{-scale:.4f})" d="{d}" fill="white"/>')

print('</svg>')
