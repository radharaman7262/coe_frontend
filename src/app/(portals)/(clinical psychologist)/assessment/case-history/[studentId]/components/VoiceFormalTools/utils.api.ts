import { MedicalFormsType } from '@/app/(portals)/type';

import { submitMedicalForms } from '@/app/(portals)/utils';

import { VOICE_FORMAL_TOOLS_ENDPOINT } from '@/app/api/apiRoutes';

export const submitVoiceFormalTools = async (payload: MedicalFormsType) =>
    submitMedicalForms({
        url: VOICE_FORMAL_TOOLS_ENDPOINT,
        body: payload,
    });
