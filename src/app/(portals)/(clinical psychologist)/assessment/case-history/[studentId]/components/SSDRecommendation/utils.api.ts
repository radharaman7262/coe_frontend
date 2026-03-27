import { MedicalFormsType } from '@/app/(portals)/type';

import { submitMedicalForms } from '@/app/(portals)/utils';

import { SSD_RECOMMENDATION_ENDPOINT } from '@/app/api/apiRoutes';

export const submitSSDRecommendation = async (payload: MedicalFormsType) =>
    submitMedicalForms({
        url: SSD_RECOMMENDATION_ENDPOINT,
        body: payload,
    });
