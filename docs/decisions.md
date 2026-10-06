# Decisions

## Button

Chakra's variant names stay: solid, outline, ghost, and link. Secondary and destructive are added. `colorScheme` is ignored; color comes from the variant and semantic tokens. Hover mixes the background to 90%, active to 80%. Disabled is opacity 0.5 with no hover or active change. Sizes are 32, 36, 40, and 44px. Icon buttons are square. Focus uses the offset outline ring.

## Form inputs

Field focus changes the border to `focus-border` and removes the box shadow, with no layout shift. Invalid does not change the field border. Only the label and error message turn destructive, matching Midday. The required indicator stays foreground. Sizes match Button. Fields have no hover color change. The Select open list is the native menu and cannot be themed; a Midday-style dropdown would need a custom component, to decide later.

## Selection controls

Checkbox uses Midday’s soft fill: `control-checked` with the border left at `border` and a foreground check. `control-checked` aliases accent. `control-off` is the switch’s unchecked track. Checkbox, radio, switch, and the slider thumb use the offset outline ring. Invalid does not recolor the control; the label and error message do. Each control has Midday’s single size: checkbox and radio are 16px, the switch is 44×24, and the slider track is 8px with a 20px square thumb. The check and indeterminate dash come from the icon set.

## Labels

Badge’s default is Midday’s real tag style: square, accent background, normal weight, never uppercase. Text is 12px rather than Midday’s 10px, and the color is `muted-foreground` so it clears contrast. Variants stay monochrome (subtle, solid, outline) plus destructive. Tag uses that same look, with sizes aligned to the button scale. Avatars are round by default, with a square variant for companies and logos, and every name uses the same tokens instead of a random color. Code and Kbd keep Hedvig Letters Sans.

## Icons

Icons are IBM Carbon (`@carbon/icons-react`): one set with square line ends that match the 0-radius theme. They are free under the Apache License 2.0, Copyright IBM Corp. This replaces Midday’s mix of Material, Lucide, and Radix. The catalogue uses names that describe the glyph rather than Midday’s product names. `ExpandMore` and `ExpandLess` stay as aliases of `ChevronDown` and `ChevronUp` because the accordion and number steppers need those names. Sizes are `icon-sm` 16px, `icon-md` 20px, and `icon-lg` 24px, applied with `boxSize`. Chakra’s built-in icons are replaced by wrappers in `src/components`. Consumers import those wrappers from `src/components`. Decorative icons set `aria-hidden="true"`; the parent keeps the accessible name. `StatArrow` still uses Chakra’s own glyph. The breadcrumb separator is the default slash, not an icon.

