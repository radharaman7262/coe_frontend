import { MedicalFormsType } from '@/app/(portals)/type';

import { submitMedicalForms } from '@/app/(portals)/utils';

import { EMOTIONAL_AWARENESS_ENDPOINT } from '@/app/api/apiRoutes';

export const submitEmotionalAndExpression = async (payload: MedicalFormsType) =>
    submitMedicalForms({
        url: EMOTIONAL_AWARENESS_ENDPOINT,
        body: payload,
    });
