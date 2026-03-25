import { MedicalFormsType } from '@/app/(portals)/type';

import { submitMedicalForms } from '@/app/(portals)/utils';

import { SUBMIT_ALTERNATE_MODES_ENDPOINT } from '@/app/api/apiRoutes';

export const submitAlternateModes = async (payload: MedicalFormsType) =>
    submitMedicalForms({
        url: SUBMIT_ALTERNATE_MODES_ENDPOINT,
        body: payload,
    });
