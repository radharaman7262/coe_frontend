import { MedicalFormsType } from '@/app/(portals)/type';

import { submitMedicalForms } from '@/app/(portals)/utils';

import { SUBMIT_NEO_NATAL_ENDPOINT } from '@/app/api/apiRoutes';

export const submitNeoNatalHistory = (payload: MedicalFormsType) =>
    submitMedicalForms({
        url: SUBMIT_NEO_NATAL_ENDPOINT,
        body: payload,
    });
