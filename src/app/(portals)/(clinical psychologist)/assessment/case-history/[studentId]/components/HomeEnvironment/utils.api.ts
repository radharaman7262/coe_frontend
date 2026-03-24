import { MedicalFormsType } from '@/app/(portals)/type';

import { submitMedicalForms } from '@/app/(portals)/utils';

import { SUBMIT_FAMILY_HISTORY_ENDPOINT } from '@/app/api/apiRoutes';

export const submitHomeEnvironment = async (payload: MedicalFormsType) =>
    submitMedicalForms({
        url: SUBMIT_FAMILY_HISTORY_ENDPOINT,
        body: payload,
    });
