import { MedicalFormsType } from '@/app/(portals)/type';

import { submitMedicalForms } from '@/app/(portals)/utils';

import { SUBMIT_LANGUAGE_EXPRESSION_ENDPOINT } from '@/app/api/apiRoutes';

export const submitLanguageExpression = async (payload: MedicalFormsType) =>
    submitMedicalForms({
        url: SUBMIT_LANGUAGE_EXPRESSION_ENDPOINT,
        body: payload,
    });
