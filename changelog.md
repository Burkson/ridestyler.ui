# ridestyler.ui Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.4.0] - 2020-1-13

**Added**:

- New rsui custom components, including branded navbar menu

## [1.3.0] - 2019-12-17

**Fixed**:

- A bug with the modal positioning on IE
- Added a build of just the icons to the framework

## [1.2.0] - 2019-11-19

**Fixed**:

- Margin for the buttons and links in the modals have been moved from the right, to the left. Let's hope they stay there.
- `.btn` elements with a `loading` class will now have more transparent text

**Added**:

- Padding for the breakpoints `md`, `sm` and `xs` have been set to `$unit-1`, `$unit-2` and `$unit-3` respectively. Default padding is currently `$unit-8`.

**Updated**:

- The default `.btn` text color now matches the body color. This makes it look less disabled.

## [1.1.0] - 2019-11-18

**Added**:

- Pointer cursor to switches, radios and checkboxes
- [Loading utilities](../../utilities/loading.html) for `form`, `.container` and `.column` elements
- `.disabled` class for links
- `.btn-success` & `.btn-error` button styles
- `equal-height-columns` class for `.columns` to make columns equal height
- [Mini-tables](../../elements/tables.html#tables-mini)
- [Sidebar menus](../../components/menu.html#menu-sidebar)

**Fixed**:

- Element spacing on navbar
- Sidebar links padding & highlighting
- Menu & dropdown menu width
- Spacing for buttons and links in card footers
- Font color on when the entire .card-action was a link
- `.d-*` rule priority
- Styling of checkboxes, switches and radio elements
- Navbar images to be served over HTTPS
- Navbar would appear under some elements (increased z-index)

**Updates**:

- Button text is now smaller
- Outline for links is now less obtrusive (dotted, matching font color)
- Horizontal container padding now matches vertical
- Inputs are now prettier, with a cleaned up border style
- Text selection color now matches marketing website
- `html`, `body` elements now have margin/padding removed by default
- The badges have been updated to better match brand spacing and one-corner border-radius style
- Dropdown style (removed shadow)
- Headers are now no longer upper-case

## [1.0.0] - 2019-10-30

Initial release.
