import { useMutation } from '@tanstack/react-query';

import { StatusNumberString } from '@/constant/appConstants';

import { MenuMasterPayloadType } from '../types';

import { userMenuMasterService } from '../userMenu.service';

export type UserMenuMasterMutationPayload =
    | { type: 'create'; body: MenuMasterPayloadType }
    | { type: 'update'; id: string; body: MenuMasterPayloadType }
    | { type: 'status'; id: string; status: StatusNumberString };

export const useUserMenuMasterMutation = () =>
    useMutation({
        mutationFn: async (payload: UserMenuMasterMutationPayload) => {
            switch (payload.type) {
                case 'create':
                    return userMenuMasterService.create(payload.body);

                case 'update':
                    return userMenuMasterService.update(payload.id, payload.body);

                case 'status':
                    return userMenuMasterService.updateStatus(payload.id, payload.status);

                default:
                    return null;
            }
        },
    });
