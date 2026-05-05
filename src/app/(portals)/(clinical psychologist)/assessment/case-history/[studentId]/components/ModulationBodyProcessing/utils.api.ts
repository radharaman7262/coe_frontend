import { MedicalFormsType } from '@/app/(portals)/type';

import { submitMedicalForms } from '@/app/(portals)/utils';

import { OT_MODULATION_BODY_POSITION } from '@/app/api/apiRoutes';

export const modulationBodyProcessing = async (payload: MedicalFormsType) =>
    submitMedicalForms({
        url: OT_MODULATION_BODY_POSITION,
        body: payload,
    });
