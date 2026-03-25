import { MedicalFormsType } from '@/app/(portals)/type';

import { submitMedicalForms } from '@/app/(portals)/utils';

import { GSL_SENSORY_PROFILE_ENDPOINT } from '@/app/api/apiRoutes';

export const submitSensoryProfile = async (payload: MedicalFormsType) =>
    submitMedicalForms({
        url: GSL_SENSORY_PROFILE_ENDPOINT,
        body: payload,
    });
