import { MedicalFormsType } from '@/app/(portals)/type';

import { submitMedicalForms } from '@/app/(portals)/utils';

import { MUSCLE_STRENGTH_ENDPOINT } from '@/app/api/apiRoutes';

export const submitMuscleStrength = async (payload: MedicalFormsType) =>
    submitMedicalForms({
        url: MUSCLE_STRENGTH_ENDPOINT,
        body: payload,
    });
