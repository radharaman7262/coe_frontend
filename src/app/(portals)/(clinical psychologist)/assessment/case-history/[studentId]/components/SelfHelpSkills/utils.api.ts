import { MedicalFormsType } from '@/app/(portals)/type';

import { submitMedicalForms } from '@/app/(portals)/utils';

import { SUBMIT_SELF_HELP_ENDPOINT } from '@/app/api/apiRoutes';

export const submitSelfHelpDevelopment = async (payload: MedicalFormsType) =>
    submitMedicalForms({
        url: SUBMIT_SELF_HELP_ENDPOINT,
        body: payload,
    });
