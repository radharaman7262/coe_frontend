import { MedicalFormsType } from '@/app/(portals)/type';

import { submitMedicalForms } from '@/app/(portals)/utils';

import { SUBMIT_SOCIAL_SKILLS_ENDPOINT } from '@/app/api/apiRoutes';

export const submitSocialSkills = async (payload: MedicalFormsType) =>
    submitMedicalForms({
        url: SUBMIT_SOCIAL_SKILLS_ENDPOINT,
        body: payload,
    });
