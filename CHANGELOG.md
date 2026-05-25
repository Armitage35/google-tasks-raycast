# Google Tasks Changelog

## [New Google Tasks Icon] - 2026-05-25

- Updated extension icon to match Google's 2026 gradient redesign: blue gradient rounded square with prominent white checkmark, dropping the old ring/circle container

## [Tab Navigation and Icon Refresh] - 2026-05-21

- Added `autoFocus` to the Title field in all three forms (Create Task, Edit Task, Inline Create) so keyboard focus lands on the first field immediately and Tab navigates through subsequent fields
- Refreshed extension icon from Google's CDN at 1024×1024 source resolution for a crisper render

## [Fix Pagination and Prettier Formatting] - 2026-05-21

- Fixed silent truncation of task lists with more than 100 items by implementing full pagination via `nextPageToken`
- Fixed Prettier formatting in `src/date-parser.ts` (function signature wrapping)

## [Natural Language Date Input] - 2026-05-21

- Replaced calendar date picker with a natural language text field in all task forms
- Supports 6 languages: English, French, German, Spanish, Portuguese, and Italian
- Live feedback: "Recognized: Thursday, May 28, 2026" appears below the field when a date is understood
- Unrecognized input shows a red "Date not recognized" error directly under the field
- Edit Task pre-populates the due date field with the existing date as readable text
- Added `src/date-parser.ts` utility module with `parseNaturalDate()` backed by chrono-node
- Added Vitest test suite (36 tests) covering all 6 languages, edge cases, and guard cases

## [Fix Timezone and Form Bugs] - 2026-05-15

- Fixed off-by-one day error in due date display for UTC- timezones
- Fixed overdue comparison using UTC midnight instead of local midnight
- Fixed task list dropdown submitting empty on first use in Create Task form

## [Address PR Review Feedback] - 2026-05-15

- Fixed bug where clearing task notes on edit was silently ignored (empty string was dropped from PATCH body)
- Use auto-generated `Preferences` type instead of manual inline type annotation in `oauth.ts`
- Remove hardcoded `"en-US"` locale from date formatting
- Switch ESLint config to use `defineConfig` from `eslint/config`
- Regenerate `package-lock.json` to remove stale `node-fetch` dependency

## [Improve Onboarding] - 2026-05-15

- Rewrote README with step-by-step OAuth setup including consent screen and test user configuration
- Added troubleshooting table for common setup errors
- Added first-launch guidance (what to expect after entering the Client ID)
- Fixed README title to match extension name (Google Tasks Manager)
- Added metadata/ folder for Raycast Store screenshots
- Improved preference description to reference README

## [Add Project Plan and Fix Plan Gaps] - 2026-05-15

- Added PLAN.md with full architecture, UI mockups, implementation details, and testing plan
- Added empty state view for the task lists screen when no lists exist
- Switched form validation to `useForm` with `FormValidation.Required` for inline field-level errors

## [Initial Version] - 2026-05-15

- View all Google Task lists
- Browse tasks within a list with filtering (Open, Completed, All)
- Create tasks with title, notes, and due date
- Complete and reopen tasks
- Edit task title, notes, and due date
- Delete tasks
- Visual indicators for completed and overdue tasks
- Google OAuth authentication via Client ID
