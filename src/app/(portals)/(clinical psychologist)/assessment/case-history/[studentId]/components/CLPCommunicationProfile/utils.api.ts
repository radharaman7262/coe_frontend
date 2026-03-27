import { MedicalFormsType } from '@/app/(portals)/type';

import { submitMedicalForms } from '@/app/(portals)/utils';

import { CLP_COMMUNICATION_EXAMINATION_ENDPOINT } from '@/app/api/apiRoutes';

export const submitCommunicationProfile = async (payload: MedicalFormsType) =>
    submitMedicalForms({
        url: CLP_COMMUNICATION_EXAMINATION_ENDPOINT,
        body: payload,
    });
