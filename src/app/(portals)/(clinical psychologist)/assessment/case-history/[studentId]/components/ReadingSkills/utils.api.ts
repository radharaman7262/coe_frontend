import { MedicalFormsType } from '@/app/(portals)/type';

import { submitMedicalForms } from '@/app/(portals)/utils';

import { SUBMIT_READING_SKILLS_ENDPOINT } from '@/app/api/apiRoutes';

export const submitReadingSkills = async (payload: MedicalFormsType) =>
    submitMedicalForms({
        url: SUBMIT_READING_SKILLS_ENDPOINT,
        body: payload,
    });
