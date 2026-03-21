import { MedicalFormsType } from '@/app/(portals)/type';

import { submitMedicalForms } from '@/app/(portals)/utils';

import { BEHAVIOR_ENDPOINT } from '@/app/api/apiRoutes';

export const submitBehaviorEndpoint = async (payload: MedicalFormsType) =>
    submitMedicalForms({
        url: BEHAVIOR_ENDPOINT,
        body: payload,
    });
