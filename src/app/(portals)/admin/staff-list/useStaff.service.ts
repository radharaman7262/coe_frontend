import { staffListPayloadDataType } from './type';

import { addStaffApiCall, changeStaffStatusApiCall, updateStaffApiCall } from './utils';

export const userAdminStaffService = {
    create: (body: staffListPayloadDataType) => addStaffApiCall(body),

    update: (id: number, body: staffListPayloadDataType) => updateStaffApiCall(id, body),

    updateStatus: (id: string, status: string) => changeStaffStatusApiCall({ id, status }),
};
