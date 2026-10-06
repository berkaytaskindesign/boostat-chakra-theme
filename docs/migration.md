# Migrating an existing Chakra v2 app

Each line is the Chakra default, what this theme does, and what to change in the app.

- `colorScheme` tints the component → it is ignored → set color with the variant and the semantic tokens.
- Radii are `sm` through `3xl` → every radius except `full` is 0 → expect square corners; `full` stays for avatar, switch, and radio.
- `medium`, `semibold`, and `bold` are 500–700 → every weight token is 400 → do not rely on bold; use size and color.
- Links are plain until hover → inline links are underlined → use `variant="plain"` for navigation and menus.
- Heading sizes are responsive arrays, all in the heading font → sizes are fixed pixels, and the serif starts at 20px (`md`) → check headings below 20px, which use the sans.
- Body text is 16px → body text is 14px (`sm`) → check pages that assumed a 16px body.
- `Text` has its own size → `Text` has no base size, so it inherits → a `Text` inside a button or a stat keeps that parent’s size.
- Tabs default to `line`, Table to a simple table, Badge to `solid` → Tabs default to `segmented`, Table to the full grid, Badge to `subtle` → pass the old variant name where you still want it.
- Button has solid, outline, ghost, and link → `secondary` and `destructive` are added → use those names instead of a color scheme.
- Alert has no toast panel, Avatar is round, Table has no minimal or interactive density → Alert `toast`, Avatar `square`, Table `minimal` and `interactive` are added → opt in where the layout needs them.
- CloseButton, ModalCloseButton, DrawerCloseButton, PopoverCloseButton, Select, Checkbox, NumberIncrementStepper, NumberDecrementStepper, AccordionIcon, AlertIcon, FormErrorIcon, Avatar, TagCloseButton, MenuItemOption, StepIcon, StatArrow, AlertDialog, Drawer, Breadcrumb, useToast, CircularProgress, Skeleton, SkeletonText, and SkeletonCircle come from `@chakra-ui/react` → the same names come from this package → import them from the package entry, not from `@chakra-ui/react`.
- AlertDialog has no default size of its own → the wrapper defaults it to `sm` → pass `size` when a dialog should be larger.
- `useToast` has no default position → toasts sit at the top on small screens and bottom-left from `md` → pass `position` when a toast should sit somewhere else.
- `@chakra-ui/icons` supplies the glyphs → those icons are not used → import `Icons` from this package.
