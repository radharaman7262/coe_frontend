import { MedicalFormsType } from '@/app/(portals)/type';

import { submitMedicalForms } from '@/app/(portals)/utils';

import { CP_RECOMMENDATION_ENDPOINT } from '@/app/api/apiRoutes';

export const submitCPRecommendation = async (payload: MedicalFormsType) =>
    submitMedicalForms({
        url: CP_RECOMMENDATION_ENDPOINT,
        body: payload,
    });
