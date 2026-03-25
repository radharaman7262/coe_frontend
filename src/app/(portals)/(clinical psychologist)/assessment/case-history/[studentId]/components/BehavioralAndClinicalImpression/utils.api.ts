import { MedicalFormsType } from '@/app/(portals)/type';

import { submitMedicalForms } from '@/app/(portals)/utils';

import { SUBMIT_BEHAVIORAL_CLINICAL_OBSERVATION_ENDPOINT } from '@/app/api/apiRoutes';

export const submitBehaviorAndClinicalImpression = async (payload: MedicalFormsType) =>
    submitMedicalForms({
        url: SUBMIT_BEHAVIORAL_CLINICAL_OBSERVATION_ENDPOINT,
        body: payload,
    });
