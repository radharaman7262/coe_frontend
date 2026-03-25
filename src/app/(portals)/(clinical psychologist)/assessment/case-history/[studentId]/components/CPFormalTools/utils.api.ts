import { MedicalFormsType } from '@/app/(portals)/type';

import { submitMedicalForms } from '@/app/(portals)/utils';

import { CP_FORMAL_INFORMAL_TOOLS_ENDPOINT } from '@/app/api/apiRoutes';

export const submitCPFormalTools = async (payload: MedicalFormsType) =>
    submitMedicalForms({
        url: CP_FORMAL_INFORMAL_TOOLS_ENDPOINT,
        body: payload,
    });
