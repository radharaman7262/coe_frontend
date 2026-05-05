import { MedicalFormsType } from '@/app/(portals)/type';

import { submitMedicalForms } from '@/app/(portals)/utils';
import { OT_ORAL_SENSORY_PROCESSING } from '@/app/api/apiRoutes';

export const oralSensoryProcessing = async (payload: MedicalFormsType) =>
    submitMedicalForms({
        url: OT_ORAL_SENSORY_PROCESSING,
        body: payload,
    });
