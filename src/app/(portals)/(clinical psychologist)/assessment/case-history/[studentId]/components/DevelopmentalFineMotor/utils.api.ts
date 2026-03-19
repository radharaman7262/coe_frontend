import { MedicalFormsType } from '@/app/(portals)/type';

import { submitMedicalForms } from '@/app/(portals)/utils';

import { SUBMIT_DEVELOPMENTAL_FINE_MOTOR_ENDPOINT } from '@/app/api/apiRoutes';

export const submitDevelopmentFineMotorHistory = async (payload: MedicalFormsType) =>
    submitMedicalForms({
        url: SUBMIT_DEVELOPMENTAL_FINE_MOTOR_ENDPOINT,
        body: payload,
    });
