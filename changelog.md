# ridestyler.ui Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.5.16] - 2021-11-18

**Fixed**:

- Changed old divide operator from '/' to math.div() to get rid of build warnings.

## [1.5.15] - 2021-6-15

**Updated**:

- Updated accordion body max height to be much larger.

## [1.5.14] - 2021-6-14

**Fixed**:

- Fixed Typeahead so that menu would always hide after item is selected.

## [1.5.13] - 2021-6-11

**Updated**:

- Added support for a modal inside a modal.

## [1.5.12] - 2021-6-10

**Updated**:

- Adjusted Typeahead so user wouldn't navigate to HREF when clicked

**Fixed**:

- Fixed dropdown menus that couldn't be clicked

## [1.5.11] - 2021-6-8

**Updated**:

- Rounded off buttons.
- Added 'btn-group-spaced' class for a spaced out button group.

## [1.5.10] - 2021-6-2

**Updated**:

- Fixed TypeaheadSelect IE error
- Added TypeaheadSelect documentation

## [1.5.9] - 2021-5-28

**Updated**:

- Updated TypeaheadSelect component to support up/down arrows

## [1.5.8] - 2021-5-26

**Added**:

- Added TypeaheadSelect component

## [1.5.7] - 2020-9-9

**Fixes**:

- Fixes bug in styling on BrandedNavColumn component

## [1.5.6] - 2020-7-17

**Updated**:

- Updated styling on BrandedNavColumn component

## [1.5.5] - 2020-7-17

**Fixed**:

- Fixes responsive styling on the BrandedNavColumn component


## [1.5.4] - 2020-7-17

**Fixed**:

- Fixes styling on the BrandedNavColumn component

## [1.5.3] - 2020-7-17

**Added**:

- Adds styling to the BrandedNavColumn component

## [1.5.2] - 2020-7-16

**Added**:

- Added BrandedNavColumn component

## [1.5.1] - 2020-7-15

**Fixed**:

- Fixes ToggleNav bug

## [1.5.0] - 2020-6-9

**Fixed**:

- Fixes ToggleNav bug

## [1.4.9] - 2020-6-9

**Updated**:

- Adds ToggleNav component

## [1.4.8] - 2020-4-22

**Updated**:

- Updated accordion style

## [1.4.7] - 2020-5-19

**Updated**:

- Updated all inputs to use a rounded border

## [1.4.6] - 2020-2-5

**Updated**:

- Updated all of the old static.ridestyler.net references

## [1.4.5] - 2020-1-31

**Added**:

- Added borders to all popovers

## [1.4.4] - 2020-1-27

**Updated**:

- The BrandedNavbarMenu component's initial check for the user's ready state

## [1.4.3] - 2020-1-13

**Added**:

- Call to wait for ridestyler user ready on BrandedNavbarMenu

## [1.4.2] - 2020-1-13

**Updated**:

- The BrandedNavbarMenu component to no longer take user props

## [1.4.1] - 2020-1-13

**Fixed**:

- A bug with the branded navbar menu component

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
