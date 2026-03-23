import { MedicalFormsType } from '@/app/(portals)/type';

import { submitMedicalForms } from '@/app/(portals)/utils';

import { SUBMIT_FUNCTIONAL_READING_ENDPOINT } from '@/app/api/apiRoutes';

export const submitFunctionalReading = async (payload: MedicalFormsType) =>
    submitMedicalForms({
        url: SUBMIT_FUNCTIONAL_READING_ENDPOINT,
        body: payload,
    });
