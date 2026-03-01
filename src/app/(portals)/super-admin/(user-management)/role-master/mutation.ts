import { useMutation } from '@tanstack/react-query';

import { UserRolePayloadType } from '@/types/roleType';

import { userRoleService } from './userRole.service';

export type UserRoleMutationPayload =
    | { type: 'create'; body: UserRolePayloadType }
    | { type: 'update'; id: string; body: UserRolePayloadType }
    | { type: 'status'; id: string; status: string };

export const useUserRoleMutation = () =>
    useMutation({
        mutationFn: async (payload: UserRoleMutationPayload) => {
            switch (payload.type) {
                case 'create':
                    return userRoleService.create(payload.body);

                case 'update':
                    return userRoleService.update(payload.id, payload.body);

                case 'status':
                    return userRoleService.updateStatus(payload.id, payload.status);

                default:
                    return null;
            }
        },
    });
