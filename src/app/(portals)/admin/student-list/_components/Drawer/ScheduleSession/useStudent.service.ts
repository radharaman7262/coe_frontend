import { SchedulePayload } from './type';

import { createStudentScheduleApiCall } from '../utils.api';

export const userStudentSessionService = {
    create: (body: SchedulePayload) => createStudentScheduleApiCall(body),
};
