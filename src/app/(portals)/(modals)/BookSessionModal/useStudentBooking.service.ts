import { createStudentScheduleApiCall } from '../utils.api';

import { CreateSessionPayload } from './type';

export const userStudentbookSessionService = {
    create: (body: CreateSessionPayload) => createStudentScheduleApiCall(body),
};
