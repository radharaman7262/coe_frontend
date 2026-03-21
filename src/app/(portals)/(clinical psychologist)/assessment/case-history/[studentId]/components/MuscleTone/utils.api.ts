import { MedicalFormsType } from '@/app/(portals)/type';

import { submitMedicalForms } from '@/app/(portals)/utils';

import { MUSCLE_TONE_ENDPOINT } from '@/app/api/apiRoutes';

export const submitMuscleTone = async (payload: MedicalFormsType) =>
    submitMedicalForms({
        url: MUSCLE_TONE_ENDPOINT,
        body: payload,
    });
