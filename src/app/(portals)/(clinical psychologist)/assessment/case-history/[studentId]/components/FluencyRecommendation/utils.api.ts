import { MedicalFormsType } from '@/app/(portals)/type';

import { submitMedicalForms } from '@/app/(portals)/utils';

import { FLUENCY_RECOMMENDATION_ENDPOINT } from '@/app/api/apiRoutes';

export const submitFluencyRecommendation = async (payload: MedicalFormsType) =>
    submitMedicalForms({
        url: FLUENCY_RECOMMENDATION_ENDPOINT,
        body: payload,
    });
