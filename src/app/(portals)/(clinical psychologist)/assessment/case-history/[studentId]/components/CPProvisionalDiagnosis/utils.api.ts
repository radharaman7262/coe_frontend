import { MedicalFormsType } from '@/app/(portals)/type';

import { submitMedicalForms } from '@/app/(portals)/utils';

import { CP_PROVISIONAL_DIAGNOSIS_ENDPOINT } from '@/app/api/apiRoutes';

export const submitProvisionDiagnosis = async (payload: MedicalFormsType) =>
    submitMedicalForms({
        url: CP_PROVISIONAL_DIAGNOSIS_ENDPOINT,
        body: payload,
    });
