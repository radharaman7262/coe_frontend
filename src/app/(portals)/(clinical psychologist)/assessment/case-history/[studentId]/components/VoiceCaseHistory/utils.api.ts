import { MedicalFormsType } from '@/app/(portals)/type';

import { submitMedicalForms } from '@/app/(portals)/utils';

import { SUBMIT_VOICE_CASE_HISTORY_ENDPOINT } from '@/app/api/apiRoutes';

export const submitVoiceCaseHistory = async (payload: MedicalFormsType) =>
    submitMedicalForms({
        url: SUBMIT_VOICE_CASE_HISTORY_ENDPOINT,
        body: payload,
    });
