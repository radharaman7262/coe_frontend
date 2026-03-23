import { MedicalFormsType } from '@/app/(portals)/type';

import { submitMedicalForms } from '@/app/(portals)/utils';

import { SENSORY_PROCESS_ENDPOINT } from '@/app/api/apiRoutes';

export const submitSensoryProcessing = async (payload: MedicalFormsType) =>
    submitMedicalForms({
        url: SENSORY_PROCESS_ENDPOINT,
        body: payload,
    });
