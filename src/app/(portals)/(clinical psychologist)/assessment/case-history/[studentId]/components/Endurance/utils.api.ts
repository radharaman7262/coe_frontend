import { MedicalFormsType } from '@/app/(portals)/type';

import { submitMedicalForms } from '@/app/(portals)/utils';

import { ENDURANCE_ENDPOINT } from '@/app/api/apiRoutes';

export const submitEndurance = async (payload: MedicalFormsType) =>
    submitMedicalForms({
        url: ENDURANCE_ENDPOINT,
        body: payload,
    });
