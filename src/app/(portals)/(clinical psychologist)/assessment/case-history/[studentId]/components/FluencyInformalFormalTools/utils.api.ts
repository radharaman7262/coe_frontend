import { MedicalFormsType } from '@/app/(portals)/type';

import { submitMedicalForms } from '@/app/(portals)/utils';

import { FLUENCY_FORMAL_INFORMAL_TOOLS_ENDPOINT } from '@/app/api/apiRoutes';

export const submitFormalInformalTools = async (payload: MedicalFormsType) =>
    submitMedicalForms({
        url: FLUENCY_FORMAL_INFORMAL_TOOLS_ENDPOINT,
        body: payload,
    });
