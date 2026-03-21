import { createStudentGoalApiCall } from '../utils.api';

import { bodyPayloadType } from './type';

export const userStudentGoalService = {
    create: (body: bodyPayloadType) => createStudentGoalApiCall(body),
};
