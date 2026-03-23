import { MedicalFormsType } from '@/app/(portals)/type';

import { submitMedicalForms } from '@/app/(portals)/utils';

import { SUBMIT_MEDICAL_DEVELOPMENTAL_HISTORY_ENDPOINT } from '@/app/api/apiRoutes';

export const submitMedicalDevelopmentalHistory = async (payload: MedicalFormsType) =>
    submitMedicalForms({
        url: SUBMIT_MEDICAL_DEVELOPMENTAL_HISTORY_ENDPOINT,
        body: payload,
    });
