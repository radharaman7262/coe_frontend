import { MedicalFormsType } from '@/app/(portals)/type';

import { submitMedicalForms } from '@/app/(portals)/utils';

import { OT_VISUAL_PROCESSING } from '@/app/api/apiRoutes';

export const visualProcessing = async (payload: MedicalFormsType) =>
    submitMedicalForms({
        url: OT_VISUAL_PROCESSING,
        body: payload,
    });
