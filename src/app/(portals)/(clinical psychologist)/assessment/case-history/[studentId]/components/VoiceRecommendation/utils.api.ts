import { MedicalFormsType } from '@/app/(portals)/type';

import { submitMedicalForms } from '@/app/(portals)/utils';

import { VOICE_RECOMMENDATION_ENDPOINT } from '@/app/api/apiRoutes';

export const submitVoiceRecommendation = async (payload: MedicalFormsType) =>
    submitMedicalForms({
        url: VOICE_RECOMMENDATION_ENDPOINT,
        body: payload,
    });
