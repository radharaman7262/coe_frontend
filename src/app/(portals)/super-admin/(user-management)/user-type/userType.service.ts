import { UserTypePayload } from '@/types/userType';

import { AddUserTypeApiCall, UpdateUserTypeAPICall, UpdateUserTypeStatusAPICall } from './utils';

export const userTypeService = {
    create: (body: UserTypePayload) => AddUserTypeApiCall(body),

    update: (id: string, body: UserTypePayload) => UpdateUserTypeAPICall(id, body),

    updateStatus: (id: string, status: string) => UpdateUserTypeStatusAPICall({ id, status }),
};
