import React from 'react';

import NewUserActivity from './renderers/NewUserActivity';

import StudentCaseAssignedActivity from './renderers/StudentCaseAssignedActivity';

export type ActivityType = 'newUserAdded' | 'studentCaseAssigned';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const activityRenderers: Record<ActivityType, React.ComponentType<any>> = {
    newUserAdded: NewUserActivity,
    studentCaseAssigned: StudentCaseAssignedActivity,
};
