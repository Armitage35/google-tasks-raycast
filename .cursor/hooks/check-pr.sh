#!/bin/bash
PR_STATUS=$(gh pr view 27928 --repo raycast/extensions --json state,isDraft,labels,comments,reviews,mergedAt 2>/dev/null)

if [ $? -ne 0 ]; then
  echo '{"additional_context": "Could not fetch PR #27928 status. Run: gh pr view 27928 --repo raycast/extensions"}'
  exit 0
fi

echo "{\"additional_context\": \"Raycast Store PR #27928 (google-tasks-manager) current status: $PR_STATUS\"}"
exit 0
