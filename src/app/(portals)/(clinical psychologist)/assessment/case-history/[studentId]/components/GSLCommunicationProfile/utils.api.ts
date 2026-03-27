import { MedicalFormsType } from '@/app/(portals)/type';

import { submitMedicalForms } from '@/app/(portals)/utils';

import { GSL_COMMUNICATION_PROFILE_ENDPOINT } from '@/app/api/apiRoutes';

export const submitGSLCommunicationProfile = async (payload: MedicalFormsType) =>
    submitMedicalForms({
        url: GSL_COMMUNICATION_PROFILE_ENDPOINT,
        body: payload,
    });
