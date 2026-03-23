import { MedicalFormsType } from '@/app/(portals)/type';

import { submitMedicalForms } from '@/app/(portals)/utils';

import { SUBMIT_MATHEMATICAL_SKILLS_ENDPOINT } from '@/app/api/apiRoutes';

export const submitMathematicalSkills = async (payload: MedicalFormsType) =>
    submitMedicalForms({
        url: SUBMIT_MATHEMATICAL_SKILLS_ENDPOINT,
        body: payload,
    });
