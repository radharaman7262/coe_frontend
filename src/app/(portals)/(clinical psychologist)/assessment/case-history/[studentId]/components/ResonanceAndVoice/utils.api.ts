import { MedicalFormsType } from '@/app/(portals)/type';

import { submitMedicalForms } from '@/app/(portals)/utils';

import { SUBMIT_RESONANCE_AND_VOICE_ENDPOINT } from '@/app/api/apiRoutes';

export const submitResonanceAndVoice = async (payload: MedicalFormsType) =>
    submitMedicalForms({
        url: SUBMIT_RESONANCE_AND_VOICE_ENDPOINT,
        body: payload,
    });
