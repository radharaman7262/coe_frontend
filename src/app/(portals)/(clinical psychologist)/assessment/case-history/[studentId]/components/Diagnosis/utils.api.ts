import { MedicalFormsType } from '@/app/(portals)/type';
import { submitMedicalForms } from '@/app/(portals)/utils';

import { SUBMIT_DIAGNOSIS_ENDPOINT } from '@/app/api/apiRoutes';

export const submitDiagnosis = async (payload: MedicalFormsType) =>
    submitMedicalForms({
        url: SUBMIT_DIAGNOSIS_ENDPOINT,
        body: payload,
    });
