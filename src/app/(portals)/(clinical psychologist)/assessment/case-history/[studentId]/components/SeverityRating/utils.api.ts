import { MedicalFormsType } from '@/app/(portals)/type';

import { submitMedicalForms } from '@/app/(portals)/utils';

import { SUBMIT_SEVERITY_RATING_ENDPOINT } from '@/app/api/apiRoutes';

export const submitSeverityRating = async (payload: MedicalFormsType) =>
    submitMedicalForms({
        url: SUBMIT_SEVERITY_RATING_ENDPOINT,
        body: payload,
    });
