import { MedicalFormsType } from '@/app/(portals)/type';

import { submitMedicalForms } from '@/app/(portals)/utils';

import { FLUENCY_CHARACTER_STICKS_ENDPOINT } from '@/app/api/apiRoutes';

export const submitFluencyCharactersticks = async (payload: MedicalFormsType) =>
    submitMedicalForms({
        url: FLUENCY_CHARACTER_STICKS_ENDPOINT,
        body: payload,
    });
