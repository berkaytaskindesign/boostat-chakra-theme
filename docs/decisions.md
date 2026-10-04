# Decisions

## Button

Chakra's variant names stay: solid, outline, ghost, and link. Secondary and destructive are added. `colorScheme` is ignored; color comes from the variant and semantic tokens. Hover mixes the background to 90%, active to 80%. Disabled is opacity 0.5 with no hover or active change. Sizes are 32, 36, 40, and 44px. Icon buttons are square. Focus uses the offset outline ring.

## Form inputs

Field focus uses the same offset outline ring as buttons. The field border stays at rest. Invalid does not change the field border. Only the label and error message turn destructive, matching Midday. The required indicator stays foreground. Sizes match Button. Fields have no hover color change. The Select open list is the native menu and cannot be themed; a Midday-style dropdown would need a custom component, to decide later.
