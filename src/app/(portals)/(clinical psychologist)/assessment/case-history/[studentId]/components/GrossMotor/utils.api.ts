import { MedicalFormsType } from '@/app/(portals)/type';

import { submitMedicalForms } from '@/app/(portals)/utils';

import { GROSS_MOTOR_SKILLS_ENDPOINT } from '@/app/api/apiRoutes';

export const submitGrossMotor = async (payload: MedicalFormsType) =>
    submitMedicalForms({
        url: GROSS_MOTOR_SKILLS_ENDPOINT,
        body: payload,
    });