import { MedicalFormsType } from '@/app/(portals)/type';

import { submitMedicalForms } from '@/app/(portals)/utils';

import { COGNITIVE_AND_PERCEPTUAL_SKILLS_ENDPOINT } from '@/app/api/apiRoutes';

export const submitCognitiveAndPerceptualSkills = async (payload: MedicalFormsType) =>
    submitMedicalForms({
        url: COGNITIVE_AND_PERCEPTUAL_SKILLS_ENDPOINT,
        body: payload,
    });
