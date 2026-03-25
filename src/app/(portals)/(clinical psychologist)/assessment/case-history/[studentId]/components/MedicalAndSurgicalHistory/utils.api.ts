import { MedicalFormsType } from '@/app/(portals)/type';

import { submitMedicalForms } from '@/app/(portals)/utils';

import { SUBMIT_MEDICAL_SURGERY_ENDPOINT } from '@/app/api/apiRoutes';

export const submitMedicalSurgeryHistory = async (payload: MedicalFormsType) =>
    submitMedicalForms({
        url: SUBMIT_MEDICAL_SURGERY_ENDPOINT,
        body: payload,
    });
