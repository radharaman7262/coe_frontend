import { MedicalFormsType } from '@/app/(portals)/type';

import { submitMedicalForms } from '@/app/(portals)/utils';

import { FLUENCY_ASSOCIATED_BEHAVIORS_ENDPOINT } from '@/app/api/apiRoutes';

export const submitAssociatedBehaviors = async (payload: MedicalFormsType) =>
    submitMedicalForms({
        url: FLUENCY_ASSOCIATED_BEHAVIORS_ENDPOINT,
        body: payload,
    });
