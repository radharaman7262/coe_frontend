import { useMutation } from '@tanstack/react-query';

import { userAdminStaffService } from './useStaff.service';

import { staffListPayloadDataType } from './type';

export type UserStaffManagementMutationPayload =
    | { type: 'create'; body: staffListPayloadDataType }
    | { type: 'update'; id: number; body: staffListPayloadDataType }
    | { type: 'status'; id: string; status: string };

export const useUserAdminStaffMutation = () =>
    useMutation({
        mutationFn: async (payload: UserStaffManagementMutationPayload) => {
            switch (payload.type) {
                case 'create':
                    return userAdminStaffService.create(payload.body);

                // case 'update':
                //     return userAdminStaffService.update(payload.id, payload.body);

                case 'status':
                    return userAdminStaffService.updateStatus(payload.id, payload.status);

                default:
                    return null;
            }
        },
    });
