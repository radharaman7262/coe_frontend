import { MedicalFormsType } from '@/app/(portals)/type';

import { submitMedicalForms } from '@/app/(portals)/utils';

import { NON_EQUILIBRIUM_ENDPOINT } from '@/app/api/apiRoutes';

export const submitEquilibriumTest = async (payload: MedicalFormsType) =>
    submitMedicalForms({
        url: NON_EQUILIBRIUM_ENDPOINT,
        body: payload,
    });
