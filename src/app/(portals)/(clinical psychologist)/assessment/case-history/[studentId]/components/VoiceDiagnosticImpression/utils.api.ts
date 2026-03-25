import { MedicalFormsType } from '@/app/(portals)/type';

import { submitMedicalForms } from '@/app/(portals)/utils';

import { VOICE_DIAGNOSTIC_IMPRESSION_ENDPOINT } from '@/app/api/apiRoutes';

export const submitVoiceFormalTools = async (payload: MedicalFormsType) =>
    submitMedicalForms({
        url: VOICE_DIAGNOSTIC_IMPRESSION_ENDPOINT,
        body: payload,
    });
