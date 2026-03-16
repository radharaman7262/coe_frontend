import { addStaffApiCall, changeStaffStatusApiCall } from './utils';

export const userAdminStaffService = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    create: (body: any) => addStaffApiCall(body),

    // update: (id: number, body: CenterAdminPayloadType) => updateCenterAdminApiCall(id, body),

    updateStatus: (id: string, status: string) => changeStaffStatusApiCall({ id, status }),
};
