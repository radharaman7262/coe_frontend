import { MedicalFormsType } from '@/app/(portals)/type';

import { submitMedicalForms } from '@/app/(portals)/utils';

import { PLAY_HISTORY_ENDPOINT } from '@/app/api/apiRoutes';

export const submitPlayHistory = async (payload: MedicalFormsType) =>
    submitMedicalForms({
        url: PLAY_HISTORY_ENDPOINT,
        body: payload,
    });
