# Decisions

## Button

Chakra's variant names stay: solid, outline, ghost, and link. Secondary and destructive are added. `colorScheme` is ignored; color comes from the variant and semantic tokens. Hover mixes the background to 90%, active to 80%. Disabled is opacity 0.5 with no hover or active change. Sizes are 32, 36, 40, and 44px. Icon buttons are square. Focus uses the offset outline ring.

## Form inputs

Field focus changes the border to `focus-border` and removes the box shadow, with no layout shift. Invalid does not change the field border. Only the label and error message turn destructive, matching Midday. The required indicator stays foreground. Sizes match Button. Fields have no hover color change. The Select open list is the native menu and cannot be themed; a Midday-style dropdown would need a custom component, to decide later.

## Selection controls

Checkbox uses Midday’s soft fill: `control-checked` with the border left at `border` and a foreground check. `control-checked` aliases accent. `control-off` is the switch’s unchecked track. Checkbox, radio, switch, and the slider thumb use the offset outline ring. Invalid does not recolor the control; the label and error message do. Each control has Midday’s single size: checkbox and radio are 16px, the switch is 44×24, and the slider track is 8px with a 20px square thumb. The check and indeterminate dash come from the icon set.

## Icons

Icons are Material glyphs from `react-icons/md`, curated to Midday’s purpose names. Custom SVGs and brand marks are left out. `Check`, `Remove`, `Info`, `Warning`, `CheckCircle`, `ExpandLess`, and `ExpandMore` are added for the controls Midday draws another way. Sizes are `icon-sm` 16px, `icon-md` 20px, and `icon-lg` 24px, applied with `boxSize`. Chakra’s built-in icons are replaced by wrappers in `src/components`. Consumers import those wrappers from `src/components`. Decorative icons set `aria-hidden="true"`; the parent keeps the accessible name. `StatArrow` still uses Chakra’s own glyph. The breadcrumb separator is the default slash, not an icon.

