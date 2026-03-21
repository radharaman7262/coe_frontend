import { MedicalFormsType } from '@/app/(portals)/type';

import { submitMedicalForms } from '@/app/(portals)/utils';

import { COMMUNICATION_SKILLS_ENDPOINT } from '@/app/api/apiRoutes';

export const submitCommunicationSkills = async (payload: MedicalFormsType) =>
    submitMedicalForms({
        url: COMMUNICATION_SKILLS_ENDPOINT,
        body: payload,
    });
