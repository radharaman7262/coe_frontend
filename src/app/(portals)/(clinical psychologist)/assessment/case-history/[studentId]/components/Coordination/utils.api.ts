import { MedicalFormsType } from '@/app/(portals)/type';

import { submitMedicalForms } from '@/app/(portals)/utils';

import { CO_ORDINATION_ENDPOINT } from '@/app/api/apiRoutes';

export const submitEndurance = async (payload: MedicalFormsType) =>
    submitMedicalForms({
        url: CO_ORDINATION_ENDPOINT,
        body: payload,
    });
