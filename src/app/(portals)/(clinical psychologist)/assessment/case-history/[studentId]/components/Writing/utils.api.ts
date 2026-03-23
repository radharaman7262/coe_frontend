import { MedicalFormsType } from '@/app/(portals)/type';

import { submitMedicalForms } from '@/app/(portals)/utils';

import { SUBMIT_WRITING_ENDPOINT } from '@/app/api/apiRoutes';

export const submitWriting = async (payload: MedicalFormsType) =>
    submitMedicalForms({
        url: SUBMIT_WRITING_ENDPOINT,
        body: payload,
    });
