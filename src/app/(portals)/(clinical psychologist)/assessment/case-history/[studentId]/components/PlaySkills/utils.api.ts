import { MedicalFormsType } from '@/app/(portals)/type';

import { submitMedicalForms } from '@/app/(portals)/utils';

import { SUBMIT_PLAY_SKILLS_ENDPOINT } from '@/app/api/apiRoutes';

export const submitPlaySkills = async (payload: MedicalFormsType) =>
    submitMedicalForms({
        url: SUBMIT_PLAY_SKILLS_ENDPOINT,
        body: payload,
    });
