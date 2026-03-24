import { MedicalFormsType } from '@/app/(portals)/type';

import { submitMedicalForms } from '@/app/(portals)/utils';

import { DIAGNOSIS_IMPRESSION_ENDPOINT } from '@/app/api/apiRoutes';

export const submitDiagnosticImpression = async (payload: MedicalFormsType) =>
    submitMedicalForms({
        url: DIAGNOSIS_IMPRESSION_ENDPOINT,
        body: payload,
    });
