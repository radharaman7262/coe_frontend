import { MedicalFormsType } from '@/app/(portals)/type';

import { submitMedicalForms } from '@/app/(portals)/utils';

import { SUBMIT_IMPACT_ON_FUNCTIONAL_COMMUNICATION_ENDPOINT } from '@/app/api/apiRoutes';

export const submitRecommendation = async (payload: MedicalFormsType) =>
    submitMedicalForms({
        url: SUBMIT_IMPACT_ON_FUNCTIONAL_COMMUNICATION_ENDPOINT,
        body: payload,
    });
