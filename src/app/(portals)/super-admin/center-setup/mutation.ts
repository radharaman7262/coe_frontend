import { useMutation } from '@tanstack/react-query';

import { CenterAdminPayloadType } from '@/types/centerAdminType';

import { userCenterSetupService } from './userCenterSetup.service';

export type UserCenterSetupMutationPayload =
    | { type: 'create'; body: CenterAdminPayloadType }
    | { type: 'update'; id: number; body: CenterAdminPayloadType }
    | { type: 'status'; id: string; status: string };

export const useUserCenterSetupMutation = () =>
    useMutation({
        mutationFn: async (payload: UserCenterSetupMutationPayload) => {
            switch (payload.type) {
                case 'create':
                    return userCenterSetupService.create(payload.body);

                case 'update':
                    return userCenterSetupService.update(payload.id, payload.body);

                case 'status':
                    return userCenterSetupService.updateStatus(payload.id, payload.status);

                default:
                    return null;
            }
        },
    });
