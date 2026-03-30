import { MedicalFormsType } from '@/app/(portals)/type';

import { submitMedicalForms } from '@/app/(portals)/utils';

import { CP_SPEECH_MOTOR_EXAMINATION } from '@/app/api/apiRoutes';

export const submitSpeechMotorAssessment = async (payload: MedicalFormsType) =>
    submitMedicalForms({
        url: CP_SPEECH_MOTOR_EXAMINATION,
        body: payload,
    });
