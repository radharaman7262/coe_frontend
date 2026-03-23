import { MedicalFormsType } from '@/app/(portals)/type';

import { submitMedicalForms } from '@/app/(portals)/utils';

import { RECOMMENDATION_ENDPOINT } from '@/app/api/apiRoutes';

export const submitRecommendation = async (payload: MedicalFormsType) =>
    submitMedicalForms({
        url: RECOMMENDATION_ENDPOINT,
        body: payload,
    });
