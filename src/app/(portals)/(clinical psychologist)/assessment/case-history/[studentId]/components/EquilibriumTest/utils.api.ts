import { MedicalFormsType } from '@/app/(portals)/type';

import { submitMedicalForms } from '@/app/(portals)/utils';

import { EQUILIBRIUM_ENDPOINT } from '@/app/api/apiRoutes';

export const submitEquilibriumTest = async (payload: MedicalFormsType) =>
    submitMedicalForms({
        url: EQUILIBRIUM_ENDPOINT,
        body: payload,
    });
