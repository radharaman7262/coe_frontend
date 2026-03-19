import { MedicalFormsType } from '@/app/(portals)/type';

import { submitMedicalForms } from '@/app/(portals)/utils';

import { SUBMIT_LANGUAGE_DEVELOPMENT_ENDPOINT } from '@/app/api/apiRoutes';

export const submitLanguageDevelopment = async (payload: MedicalFormsType) =>
    submitMedicalForms({
        url: SUBMIT_LANGUAGE_DEVELOPMENT_ENDPOINT,
        body: payload,
    });
