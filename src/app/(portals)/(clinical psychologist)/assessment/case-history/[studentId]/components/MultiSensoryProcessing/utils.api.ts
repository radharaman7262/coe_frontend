import { MedicalFormsType } from '@/app/(portals)/type';

import { submitMedicalForms } from '@/app/(portals)/utils';

import { OT_MULTI_SENSORY_PROCESSING } from '@/app/api/apiRoutes';

export const multiSensoryProcessing = async (payload: MedicalFormsType) =>
    submitMedicalForms({
        url: OT_MULTI_SENSORY_PROCESSING,
        body: payload,
    });
