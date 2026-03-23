import { MedicalFormsType } from '@/app/(portals)/type';

import { submitMedicalForms } from '@/app/(portals)/utils';

import { SUBMIT_VISUAL_PERCEPTION_ENDPOINT } from '@/app/api/apiRoutes';

export const submitVisualPerception = async (payload: MedicalFormsType) =>
    submitMedicalForms({
        url: SUBMIT_VISUAL_PERCEPTION_ENDPOINT,
        body: payload,
    });
