import { MedicalFormsType } from '@/app/(portals)/type';

import { submitMedicalForms } from '@/app/(portals)/utils';

import { SUBMIT_GROSS_MOTOR_DEVELOPMENT_ENDPOINT } from '@/app/api/apiRoutes';

export const submitGrossMotorHistory = async (payload: MedicalFormsType) =>
    submitMedicalForms({
        url: SUBMIT_GROSS_MOTOR_DEVELOPMENT_ENDPOINT,
        body: payload,
    });
