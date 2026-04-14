import { CenterAdminPayloadType } from '@/types/centerAdminType';

import {
    addCenterAdminApiCall,
    changeCenterAdminStatusApiCall,
    updateCenterAdminApiCall,
} from './utils';

export const userCenterAdminService = {
    create: (body: CenterAdminPayloadType) => addCenterAdminApiCall(body),

    update: (id: number, body: CenterAdminPayloadType) => updateCenterAdminApiCall(id, body),

    updateStatus: (id: string, status: string) => changeCenterAdminStatusApiCall({ id, status }),
};
