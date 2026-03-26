import { MedicalFormsType } from '@/app/(portals)/type';

import { submitMedicalForms } from '@/app/(portals)/utils';

import { SSD_SPEECH_PHONOLOGY_ENDPOINT } from '@/app/api/apiRoutes';

export const submitSpeechPhonology = async (payload: MedicalFormsType) =>
    submitMedicalForms({
        url: SSD_SPEECH_PHONOLOGY_ENDPOINT,
        body: payload,
    });
