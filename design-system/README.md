# NextGen Scholars Design System (Mock Foundation)

This directory introduces a scalable, token-first architecture for the website's premium metallic brand identity.

## Source of truth
- `tokens/brand-palette.json` contains primitive, semantic, gradient and policy tokens.
- `../styles/brand-theme.css` exposes CSS variables and starter utility classes for implementation.

## Exclusive palette
- Premium Black: `#111214`
- Graphite: `#34363A`
- Metallic Silver: `#C7C9CC`
- Light Silver: `#F3F4F5`
- Pure White: `#FFFFFF`
- Royal Gold: `#C5A253`
- Gold gradient: `linear-gradient(100deg, #8D6A2C 0%, #E6CA83 50%, #B18A43 100%)`

## Usage guidance
- 50% White → main backgrounds
- 25% Premium Black → typography/navigation/dark sections
- 12% Light Silver → section backgrounds and UI surfaces
- 8% Metallic Silver → borders/dividers/metallic effects
- 5% Royal Gold → buttons/highlights/icons/important accents

## Restrictions
- Do not use blue, purple, green, red or unrelated colours.
- Keep a consistent black/silver/white/gold identity.
- Use gold sparingly for premium emphasis.
- Preserve readability and WCAG-conscious contrast in implementation.

## Scaling path
- Plug `tokens/brand-palette.json` into a design-token build pipeline (Style Dictionary or equivalent).
- Generate platform outputs (CSS, Tailwind, native tokens) from the same source.
- Keep semantic tokens stable while allowing primitive updates for future rebrands.
