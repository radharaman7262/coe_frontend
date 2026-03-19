import { MedicalFormsType } from '@/app/(portals)/type';

import { submitMedicalForms } from '@/app/(portals)/utils';

import { GENERAL_OBSERVATION_ENDPOINT } from '@/app/api/apiRoutes';

export const submitGeneralObservation = async (payload: MedicalFormsType) =>
    submitMedicalForms({
        url: GENERAL_OBSERVATION_ENDPOINT,
        body: payload,
    });
