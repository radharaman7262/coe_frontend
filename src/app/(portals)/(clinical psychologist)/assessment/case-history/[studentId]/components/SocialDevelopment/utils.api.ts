import { MedicalFormsType } from '@/app/(portals)/type';

import { submitMedicalForms } from '@/app/(portals)/utils';

import { SUBMIT_SOCIAL_DEVELOPMENT_ENDPOINT } from '@/app/api/apiRoutes';

export const submitSocialDevelopment = async (payload: MedicalFormsType) =>
    submitMedicalForms({
        url: SUBMIT_SOCIAL_DEVELOPMENT_ENDPOINT,
        body: payload,
    });
