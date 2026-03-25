import { MedicalFormsType } from '@/app/(portals)/type';

import { submitMedicalForms } from '@/app/(portals)/utils';

import { SUBMIT_FLUENCY_ENDPOINT } from '@/app/api/apiRoutes';

export const submitFluency = async (payload: MedicalFormsType) =>
    submitMedicalForms({
        url: SUBMIT_FLUENCY_ENDPOINT,
        body: payload,
    });
