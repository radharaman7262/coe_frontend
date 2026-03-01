import { CenterAdminPayloadType } from '@/types/centerAdminType';

import {
    addCenterSetupApiCall,
    changeCenterSetupStatusApiCall,
    updateCenterSetupApiCall,
} from './utils';

export const userCenterSetupService = {
    create: (body: CenterAdminPayloadType) => addCenterSetupApiCall(body),

    update: (id: number, body: CenterAdminPayloadType) => updateCenterSetupApiCall(id, body),

    updateStatus: (id: string, status: string) => changeCenterSetupStatusApiCall({ id, status }),
};
