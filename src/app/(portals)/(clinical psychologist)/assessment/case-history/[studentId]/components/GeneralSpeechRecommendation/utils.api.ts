import { MedicalFormsType } from '@/app/(portals)/type';

import { submitMedicalForms } from '@/app/(portals)/utils';

import { GSL_SPEECH_RECOMMENDATION } from '@/app/api/apiRoutes';

export const submitGeneralSpeechRecommend = async (payload: MedicalFormsType) =>
    submitMedicalForms({
        url: GSL_SPEECH_RECOMMENDATION,
        body: payload,
    });