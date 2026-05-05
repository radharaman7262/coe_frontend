import { MedicalFormsType } from '@/app/(portals)/type';

import { submitMedicalForms } from '@/app/(portals)/utils';
import { OT_MOVEMENT_ACTIVITY } from '@/app/api/apiRoutes';

export const modulationMovementProcessing = async (payload: MedicalFormsType) =>
    submitMedicalForms({
        url: OT_MOVEMENT_ACTIVITY,
        body: payload,
    });
