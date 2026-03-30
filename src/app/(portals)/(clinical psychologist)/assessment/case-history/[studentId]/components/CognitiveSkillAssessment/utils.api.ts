import { MedicalFormsType } from '@/app/(portals)/type';

import { submitMedicalForms } from '@/app/(portals)/utils';

import { COGNITIVE_SKILLS_ASSESSMENT_ENDPOINT } from '@/app/api/apiRoutes';

export const submitReflexes = async (payload: MedicalFormsType) =>
    submitMedicalForms({
        url: COGNITIVE_SKILLS_ASSESSMENT_ENDPOINT,
        body: payload,
    });
