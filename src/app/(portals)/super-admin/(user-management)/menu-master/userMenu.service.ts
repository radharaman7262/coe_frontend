import { StatusNumberString } from '@/constant/appConstants';

import {
    addMenuMasterApiCall,
    updateMenuMasterApiCall,
    updateMenuMasterTypeStatusAPICall,
} from './utils';

import { MenuMasterPayloadType } from './types';

export const userMenuMasterService = {
    create: (body: MenuMasterPayloadType) => addMenuMasterApiCall(body),

    update: (id: string, body: MenuMasterPayloadType) => updateMenuMasterApiCall(id, body),

    updateStatus: (id: string, status: StatusNumberString) =>
        updateMenuMasterTypeStatusAPICall({ id, status }),
};
