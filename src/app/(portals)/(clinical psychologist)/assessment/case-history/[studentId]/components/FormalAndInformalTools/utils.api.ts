import { MedicalFormsType } from '@/app/(portals)/type';

import { submitMedicalForms } from '@/app/(portals)/utils';

import { FORMAL_INFORMAL_TOOLS_ENDPOINT } from '@/app/api/apiRoutes';

export const submitFormalAndInformal = async (payload: MedicalFormsType) =>
    submitMedicalForms({
        url: FORMAL_INFORMAL_TOOLS_ENDPOINT,
        body: payload,
    });
