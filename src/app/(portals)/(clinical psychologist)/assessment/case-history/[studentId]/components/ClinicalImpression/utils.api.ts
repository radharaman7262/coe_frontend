import { MedicalFormsType } from '@/app/(portals)/type';

import { submitMedicalForms } from '@/app/(portals)/utils';

import { SUBMIT_CLINICAL_IMPRESSION_ENDPOINT } from '@/app/api/apiRoutes';

export const submitClinicalImpression = async (payload: MedicalFormsType) =>
    submitMedicalForms({
        url: SUBMIT_CLINICAL_IMPRESSION_ENDPOINT,
        body: payload,
    });
