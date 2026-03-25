import { MedicalFormsType } from '@/app/(portals)/type';

import { submitMedicalForms } from '@/app/(portals)/utils';

import { VOICE_PERCEPTION_ANALYSIS_ENDPOINT } from '@/app/api/apiRoutes';

export const submitPerceptionAndVoice = async (payload: MedicalFormsType) =>
    submitMedicalForms({
        url: VOICE_PERCEPTION_ANALYSIS_ENDPOINT,
        body: payload,
    });
