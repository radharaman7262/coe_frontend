import { MedicalFormsType } from '@/app/(portals)/type';

import { submitMedicalForms } from '@/app/(portals)/utils';

import { SUBMIT_LANGUAGE_RECEIPT_ENDPOINT } from '@/app/api/apiRoutes';

export const submitLanguageReceipt = async (payload: MedicalFormsType) =>
    submitMedicalForms({
        url: SUBMIT_LANGUAGE_RECEIPT_ENDPOINT,
        body: payload,
    });
