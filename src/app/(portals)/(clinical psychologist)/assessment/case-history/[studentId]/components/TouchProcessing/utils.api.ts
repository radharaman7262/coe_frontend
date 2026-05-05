import { MedicalFormsType } from '@/app/(portals)/type';

import { submitMedicalForms } from '@/app/(portals)/utils';

import { OT_TOUCH_PROCESSING } from '@/app/api/apiRoutes';

export const touchProcessing = async (payload: MedicalFormsType) =>
    submitMedicalForms({
        url: OT_TOUCH_PROCESSING,
        body: payload,
    });
