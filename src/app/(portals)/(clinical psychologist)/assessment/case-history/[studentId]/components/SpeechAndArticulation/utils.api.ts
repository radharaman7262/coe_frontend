import { MedicalFormsType } from '@/app/(portals)/type';

import { submitMedicalForms } from '@/app/(portals)/utils';

import { SUBMIT_SPEECH_ARTICULATION_ENDPOINT } from '@/app/api/apiRoutes';

export const submitSpeechAndArticulation = async (payload: MedicalFormsType) =>
    submitMedicalForms({
        url: SUBMIT_SPEECH_ARTICULATION_ENDPOINT,
        body: payload,
    });
