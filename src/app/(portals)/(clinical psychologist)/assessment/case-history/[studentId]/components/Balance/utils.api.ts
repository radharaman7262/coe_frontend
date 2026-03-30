import { MedicalFormsType } from '@/app/(portals)/type';

import { submitMedicalForms } from '@/app/(portals)/utils';

import { BALANCE_ENDPOINT } from '@/app/api/apiRoutes';

export const submitBalanceForm = async (payload: MedicalFormsType) =>
    submitMedicalForms({
        url: BALANCE_ENDPOINT,
        body: payload,
    });
