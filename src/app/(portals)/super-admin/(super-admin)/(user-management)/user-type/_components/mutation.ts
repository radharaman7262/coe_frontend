import { useMutation } from '@tanstack/react-query';

import { UserTypePayload } from '@/types/userType';

import { userTypeService } from '../userType.service';

export type UserTypeMutationPayload =
    | { type: 'create'; body: UserTypePayload }
    | { type: 'update'; id: string; body: UserTypePayload }
    | { type: 'status'; id: string; status: string };

export const useUserTypeMutation = () =>
    useMutation({
        mutationFn: async (payload: UserTypeMutationPayload) => {
            switch (payload.type) {
                case 'create':
                    return userTypeService.create(payload.body);

                case 'update':
                    return userTypeService.update(payload.id, payload.body);

                case 'status':
                    return userTypeService.updateStatus(payload.id, payload.status);

                default:
                    return null;
            }
        },
    });
