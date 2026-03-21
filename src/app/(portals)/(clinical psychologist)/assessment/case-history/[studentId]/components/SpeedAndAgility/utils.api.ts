import { MedicalFormsType } from '@/app/(portals)/type';

import { submitMedicalForms } from '@/app/(portals)/utils';

import { SPEED_AND_AGILITY_ENDPOINT } from '@/app/api/apiRoutes';

export const submitSpeedAndAgility = async (payload: MedicalFormsType) =>
    submitMedicalForms({
        url: SPEED_AND_AGILITY_ENDPOINT,
        body: payload,
    });
