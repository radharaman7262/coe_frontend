import { MedicalFormsType } from '@/app/(portals)/type';

import { submitMedicalForms } from '@/app/(portals)/utils';

import { BEHAVIORAL_OBSERVATION_ENDPOINT } from '@/app/api/apiRoutes';

export const submitBehavioralObservation = async (payload: MedicalFormsType) =>
    submitMedicalForms({
        url: BEHAVIORAL_OBSERVATION_ENDPOINT,
        body: payload,
    });
