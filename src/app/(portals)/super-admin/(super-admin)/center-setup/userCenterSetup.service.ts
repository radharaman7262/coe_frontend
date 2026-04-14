import { CenterSetupPayloadType } from '@/types/centerSetupType';

import {
    addCenterSetupApiCall,
    changeCenterSetupStatusApiCall,
    updateCenterSetupApiCall,
} from './utils';

export const userCenterSetupService = {
    create: (body: CenterSetupPayloadType) => addCenterSetupApiCall(body),

    update: (id: number, body: CenterSetupPayloadType) => updateCenterSetupApiCall(id, body),

    updateStatus: (id: string, status: string) => changeCenterSetupStatusApiCall({ id, status }),
};
