import { MedicalFormsType } from '@/app/(portals)/type';

import { submitMedicalForms } from '@/app/(portals)/utils';

import { SCHOLASTIC_HISTORY_ENDPOINT } from '@/app/api/apiRoutes';

export const submitScholasticHistory = async (payload: MedicalFormsType) =>
    submitMedicalForms({
        url: SCHOLASTIC_HISTORY_ENDPOINT,
        body: payload,
    });
