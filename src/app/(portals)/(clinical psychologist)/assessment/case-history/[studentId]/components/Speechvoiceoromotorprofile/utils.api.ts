import { MedicalFormsType } from '@/app/(portals)/type';

import { submitMedicalForms } from '@/app/(portals)/utils';

import { SPEECH_VOICE_ORO_MOTOR_PROFILE_ENDPOINT } from '@/app/api/apiRoutes';

export const submitSpeechVoiceProfile = async (payload: MedicalFormsType) =>
    submitMedicalForms({
        url: SPEECH_VOICE_ORO_MOTOR_PROFILE_ENDPOINT,
        body: payload,
    });
