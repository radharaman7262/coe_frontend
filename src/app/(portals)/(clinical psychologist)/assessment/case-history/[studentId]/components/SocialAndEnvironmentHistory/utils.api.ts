import { MedicalFormsType } from '@/app/(portals)/type';

import { submitMedicalForms } from '@/app/(portals)/utils';

import { SOCIAL_ENVIRONMENTAL_HISTORY_ENDPOINT } from '@/app/api/apiRoutes';

export const submitSocialEnvironmentHistory = async (payload: MedicalFormsType) =>
    submitMedicalForms({
        url: SOCIAL_ENVIRONMENTAL_HISTORY_ENDPOINT,
        body: payload,
    });
