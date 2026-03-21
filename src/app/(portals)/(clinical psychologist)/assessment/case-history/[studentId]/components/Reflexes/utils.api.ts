import { MedicalFormsType } from '@/app/(portals)/type';

import { submitMedicalForms } from '@/app/(portals)/utils';

import { REFLEXES_ENDPOINT } from '@/app/api/apiRoutes';

export const submitReflexes = async (payload: MedicalFormsType) =>
    submitMedicalForms({
        url: REFLEXES_ENDPOINT,
        body: payload,
    });
