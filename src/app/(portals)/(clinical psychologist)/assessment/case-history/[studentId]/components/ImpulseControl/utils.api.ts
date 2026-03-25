import { MedicalFormsType } from '@/app/(portals)/type';

import { submitMedicalForms } from '@/app/(portals)/utils';

import { IMPULSE_CONTROLE_ENDPOINT } from '@/app/api/apiRoutes';

export const submitImpulseControl = async (payload: MedicalFormsType) =>
    submitMedicalForms({
        url: IMPULSE_CONTROLE_ENDPOINT,
        body: payload,
    });
