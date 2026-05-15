# Google Tasks Changelog

## [Add Project Plan and Fix Plan Gaps] - {PR_MERGE_DATE}

- Added PLAN.md with full architecture, UI mockups, implementation details, and testing plan
- Added empty state view for the task lists screen when no lists exist
- Switched form validation to `useForm` with `FormValidation.Required` for inline field-level errors

## [Initial Version] - {PR_MERGE_DATE}

- View all Google Task lists
- Browse tasks within a list with filtering (Open, Completed, All)
- Create tasks with title, notes, and due date
- Complete and reopen tasks
- Edit task title, notes, and due date
- Delete tasks
- Visual indicators for completed and overdue tasks
- Google OAuth authentication via Client ID
