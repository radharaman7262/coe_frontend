import { MedicalFormsType } from '@/app/(portals)/type';

import { submitMedicalForms } from '@/app/(portals)/utils';

import { SELF_REGULATION_ENDPOINT } from '@/app/api/apiRoutes';

export const submitSelfRegulation = async (payload: MedicalFormsType) =>
    submitMedicalForms({
        url: SELF_REGULATION_ENDPOINT,
        body: payload,
    });
