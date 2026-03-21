import { MedicalFormsType } from '@/app/(portals)/type';

import { submitMedicalForms } from '@/app/(portals)/utils';

import { FINE_MOTOR_SKILLS_ENDPOINT } from '@/app/api/apiRoutes';

export const submitFineSkillsMotor = async (payload: MedicalFormsType) =>
    submitMedicalForms({
        url: FINE_MOTOR_SKILLS_ENDPOINT,
        body: payload,
    });
