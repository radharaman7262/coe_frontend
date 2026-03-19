import { SUBMIT_POST_NATAL_ENDPOINT } from '@/app/api/apiRoutes';

import { submitMedicalForms } from '@/app/(portals)/utils';

import { MedicalFormsType } from '@/app/(portals)/type';

export const submitPostNatalHistory = async (payload: MedicalFormsType) =>
    submitMedicalForms({
        url: SUBMIT_POST_NATAL_ENDPOINT,
        body: payload,
    });
