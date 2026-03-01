import { UserRolePayloadType } from '@/types/roleType';
import {
    addRoleMasterApiCall,
    changeRoleMasterStatusApiCall,
    updaterRoleMasterApiCall,
} from './utils';

export const userRoleService = {
    create: (body: UserRolePayloadType) => addRoleMasterApiCall(body),

    update: (id: string, body: UserRolePayloadType) => updaterRoleMasterApiCall(id, body),

    updateStatus: (id: string, status: string) => changeRoleMasterStatusApiCall({ id, status }),
};
