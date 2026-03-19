import { MedicalFormsType } from '@/app/(portals)/type';

import { submitMedicalForms } from '@/app/(portals)/utils';

import { SUBMIT_PERSONAL_BIRTH_HISTORY_ENDPOINT } from '@/app/api/apiRoutes';

export const submitPersonalBirthHistory = async (payload: MedicalFormsType) =>
    submitMedicalForms({
        url: SUBMIT_PERSONAL_BIRTH_HISTORY_ENDPOINT,
        body: payload,
    });
