import { MedicalFormsType } from '@/app/(portals)/type';

import { submitMedicalForms } from '@/app/(portals)/utils';

import { CP_DIAGNOSIS_IMPRESSION_ENDPOINT } from '@/app/api/apiRoutes';

export const submitDiagnosticImpression = async (payload: MedicalFormsType) =>
    submitMedicalForms({
        url: CP_DIAGNOSIS_IMPRESSION_ENDPOINT,
        body: payload,
    });
