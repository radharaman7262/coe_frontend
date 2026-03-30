import { MedicalFormsType } from '@/app/(portals)/type';

import { submitMedicalForms } from '@/app/(portals)/utils';

import { CP_COMMUNICATION_PROFILE_ENDPOINT } from '@/app/api/apiRoutes';

export const submitCommunicationProfile = async (payload: MedicalFormsType) =>
    submitMedicalForms({
        url: CP_COMMUNICATION_PROFILE_ENDPOINT,
        body: payload,
    });
