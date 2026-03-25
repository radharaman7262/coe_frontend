import { MedicalFormsType } from '@/app/(portals)/type';

import { submitMedicalForms } from '@/app/(portals)/utils';

import { GSL_FORMAL_TOOLS_ENDPOINT } from '@/app/api/apiRoutes';

export const submitGSLFormalTools = async (payload: MedicalFormsType) =>
    submitMedicalForms({
        url: GSL_FORMAL_TOOLS_ENDPOINT,
        body: payload,
    });
