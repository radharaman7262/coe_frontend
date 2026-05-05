import { MedicalFormsType } from '@/app/(portals)/type';

import { submitMedicalForms } from '@/app/(portals)/utils';
import { OT_ENDURANCE_TONE_PROCESSING } from '@/app/api/apiRoutes';

export const sensoryProcessingTone = async (payload: MedicalFormsType) =>
    submitMedicalForms({
        url: OT_ENDURANCE_TONE_PROCESSING,
        body: payload,
    });
