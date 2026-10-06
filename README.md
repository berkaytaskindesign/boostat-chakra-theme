# midday-chakra-theme

A Chakra UI v2 theme with the Midday look: monochrome, square corners, Hedvig Letters Sans and Serif, and a single font weight. It ships the theme, a small set of wrappers, and an icon set. Storybook is the place to look at it.

Built and tested with React 19, Chakra UI 2.10, framer-motion 14, and Storybook 10. Treat that list as the baseline when you adopt it.

## Quick start

```
npm install
npm run storybook
```

Storybook opens on port 6006. The hosted Storybook is at https://boostat-chakra-theme.vercel.app.

## Usage

```tsx
import { ChakraProvider, theme, Button, Icon, Icons } from 'midday-chakra-theme'

export function App() {
  return (
    <ChakraProvider theme={theme}>
      <Button>Save</Button>
      <Icon as={Icons.Check} boxSize="icon-sm" />
    </ChakraProvider>
  )
}
```

Import icons from this package (`Icons`), not from `@chakra-ui/icons` or another icon library. Import the wrapped components from this package too: CloseButton, ModalCloseButton, DrawerCloseButton, PopoverCloseButton, Select, Checkbox, the number steppers, AccordionIcon, AlertIcon, FormErrorIcon, Avatar, TagCloseButton, MenuItemOption, StepIcon, StatArrow, AlertDialog, Drawer, Breadcrumb, useToast, CircularProgress, Skeleton, SkeletonText, and SkeletonCircle. Everything else Chakra exports is re-exported from the same entry.

## Adopting this in your app

Copy `src/` into the app, or depend on this package. Either way the public API is `src/index.ts`.

The package exports TypeScript source, so the consuming app has to transpile it (Next.js does this with `transpilePackages`). The bundler also has to accept the `@fontsource` CSS imports that load Hedvig Letters.

Check the version list above before you upgrade React, Chakra, framer-motion, or Storybook.

## Licences & attribution

Midday was used only as a visual reference. No Midday source code is included. Midday is AGPL-3.0, and `reference/` is gitignored.

Carbon icons are © IBM and licensed under the Apache License 2.0. See `NOTICE`.

Hedvig Letters Sans and Serif are under the SIL Open Font License.

Chakra UI is MIT.

## Further reading

- [AGENTS.md](AGENTS.md) — rules, folders, and how to verify a change
- [docs/decisions.md](docs/decisions.md) — why the theme looks this way
- [docs/migration.md](docs/migration.md) — what changes for an existing Chakra v2 app
- [Hosted Storybook](https://boostat-chakra-theme.vercel.app)
