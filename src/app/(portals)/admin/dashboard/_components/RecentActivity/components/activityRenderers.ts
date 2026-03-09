import React from 'react';

import NewUserActivity from './renderers/NewUserActivity';

import AssignedCaseActivity from './renderers/AssignedCaseActivity';

export type ActivityType = 'newUserAdded' | 'assigned';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const activityRenderers: Record<ActivityType, React.ComponentType<any>> = {
    newUserAdded: NewUserActivity,
    assigned: AssignedCaseActivity,
};
