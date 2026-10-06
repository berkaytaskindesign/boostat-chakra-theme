# Decisions

## Button

Chakra's variant names stay: solid, outline, ghost, and link. Secondary and destructive are added. `colorScheme` is ignored; color comes from the variant and semantic tokens. Hover mixes the background to 90%, active to 80%. Disabled is opacity 0.5 with no hover or active change. Sizes are 32, 36, 40, and 44px. Icon buttons are square. Focus uses the offset outline ring.

## Form inputs

Field focus changes the border to `focus-border` and removes the box shadow, with no layout shift. Invalid does not change the field border. Only the label and error message turn `destructive-text`, matching Midday. The required indicator stays foreground. `destructive` stays the fill for buttons and tags. `destructive-text` is the same red in light mode and a lighter red in dark mode, so error text clears 4.5:1 on `background`. Sizes match Button. Fields have no hover color change. The Select open list is the native menu and cannot be themed; a Midday-style dropdown would need a custom component, to decide later.

## Link

Inline links are underlined at rest: 1px, offset 4px, in `muted-foreground`, turning `foreground` on hover. `variant="plain"` has no underline until hover, for navigation and menus where the link is already obvious.

## Selection controls

Checkbox uses Midday’s soft fill: `control-checked` with the border left at `border` and a foreground check. `control-checked` aliases accent. `control-off` is the switch’s unchecked track. Checkbox, radio, switch, and the slider thumb use the offset outline ring. Invalid does not recolor the control; the label and error message do. Each control has Midday’s single size: checkbox and radio are 16px, the switch is 44×24, and the slider track is 8px with a 20px square thumb. The check and indeterminate dash come from the icon set.

## Labels

There is one label: Tag. It is Midday’s tag badge: square, accent background, normal weight, never uppercase. Text is 12px on the compact sizes rather than Midday’s 10px, and the color is `muted-foreground` so it clears contrast. Variants stay on the gray tag or the outline, plus destructive. The primary fill stays on buttons. Chakra’s `solid` name uses the tag colors. Sizes run from the compact 20px label through 24, 28, and 32px, and a tag can hold an icon and a close button. Chakra’s Badge keeps that same compact look so it does not fall back to the default uppercase chip. Avatars are round by default, with a square variant for companies and logos, and every name uses the same tokens instead of a random color. Code and Kbd keep Hedvig Letters Sans. Code is `0.875em` so inline code follows the paragraph size instead of staying at 12px.

## Icons

Icons are IBM Carbon (`@carbon/icons-react`): one set with square line ends that match the 0-radius theme. They are free under the Apache License 2.0, Copyright IBM Corp. This replaces Midday’s mix of Material, Lucide, and Radix. The catalogue uses names that describe the glyph rather than Midday’s product names. `ExpandMore` and `ExpandLess` stay as aliases of `ChevronDown` and `ChevronUp` because the accordion and number steppers need those names. Sizes are `icon-sm` 16px, `icon-md` 20px, and `icon-lg` 24px, applied with `boxSize`. Chakra’s built-in icons are replaced by wrappers in `src/components`. Consumers import those wrappers from `src/components`. Decorative icons set `aria-hidden="true"`; the parent keeps the accessible name. The breadcrumb separator is the default slash, not an icon.

## Surfaces

Cards are flat. The default is outline: `background`, a 1px `border`, radius 0, and no shadow. Elevated is the same. Filled uses `card` with no border. Unstyled drops the padding. Padding is 16, 24, or 32px, and the body loses its top padding when it follows a header. The footer is a top border, 12px, muted.

Tables default to Midday’s full grid: an outer border, row lines, and column dividers, with `border-collapse` so the last row and last column are not doubled. Minimal is row lines only. Striped is the grid plus accent on odd rows. Interactive is the grid plus a pointer and an accent hover on body rows. Unstyled stays bare. Density is sm, md, and lg. Headers are 12px, sentence case, and muted. The footer matches the body cells, 14px and foreground, with a top border. Numeric cells are right-aligned and use `fonts.numeric`.

Hedvig Letters Sans and Serif have no `tnum` feature, and their digits are proportional (`1` is much narrower than `0`). `fonts.numeric` is the hook: it is Hedvig Letters Sans for now, so a face with tabular figures can replace it in one place. Stat numbers stay on `fonts.serif`. No tabular-nums was applied.

Stat labels and help text are 12px and muted. The number is serif at 20, 24, or 36px. StatGroup spacing is 24px. StatArrow uses `ArrowUpRight` and `ArrowDownRight` in the foreground, with Chakra’s visually hidden “increased by” and “decreased by” labels.

Accordion items have a bottom border only. The button has no hover fill, an offset focus ring, and disabled opacity 0.5. The panel sits under the button with 16px of bottom padding. The icon is 16px and rotates in 200ms.

Divider color is `border` at full opacity. Solid and dashed are the variants.

## Overlays

The scrim is Midday’s warm light wash (`#f6f6f3` at 60%) and a dark 80% scrim (`#0C0C0C` at 80%), shared by Modal and Drawer. Sheets use `sheet` (`#FAFAF9` / `#0C0C0C`). Modals and drawers are square: Midday’s rounding sits on the backdrop, not the dialog, so the unused `subtle` radius is gone. The `overlay` shadow is only on floating layers (Popover, Menu, Tooltip). Modal and Drawer use a 1px border and no shadow. Pages and cards stay flat.

Left and right drawers float: from the `md` breakpoint they sit 16px in from the viewport and use `calc(100% - 32px)` height, and below that they are edge-attached. Top and bottom drawers use auto height, with the same 16px margin and full width minus 32px from `md` up. Padding is on the header, body, and footer (24px), not the dialog. A long modal or drawer scrolls inside the body; the header and footer stay put, and the footer buttons stay visible. Titles keep 56px on the right so they clear the close button.

The tooltip is the classic inverted one (foreground on background), deliberately not Midday’s light tooltip. Modal widths are 512, 576, 720, and 900px, plus full. Drawer widths are 384, 520, and 640px, plus full. AlertDialog uses the Modal theme and defaults to the small size through a wrapper in `src/components`.

