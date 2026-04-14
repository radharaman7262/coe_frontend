import { useMutation } from '@tanstack/react-query';

import { CenterAdminPayloadType } from '@/types/centerAdminType';

import { userCenterAdminService } from './userCenterAdmin.service';

export type UserCenterAdminMutationPayload =
    | { type: 'create'; body: CenterAdminPayloadType }
    | { type: 'update'; id: number; body: CenterAdminPayloadType }
    | { type: 'status'; id: string; status: string };

export const useUserCenterAdminMutation = () =>
    useMutation({
        mutationFn: async (payload: UserCenterAdminMutationPayload) => {
            switch (payload.type) {
                case 'create':
                    return userCenterAdminService.create(payload.body);

                case 'update':
                    return userCenterAdminService.update(payload.id, payload.body);

                case 'status':
                    return userCenterAdminService.updateStatus(payload.id, payload.status);

                default:
                    return null;
            }
        },
    });
