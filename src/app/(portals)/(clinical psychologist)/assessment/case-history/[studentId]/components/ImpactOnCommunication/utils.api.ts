import { MedicalFormsType } from '@/app/(portals)/type';

import { submitMedicalForms } from '@/app/(portals)/utils';

import { IMPACT_ON_COMMUNICATION_ENDPOINT } from '@/app/api/apiRoutes';

export const submitImpactOnCommunication = async (payload: MedicalFormsType) =>
    submitMedicalForms({
        url: IMPACT_ON_COMMUNICATION_ENDPOINT,
        body: payload,
    });
