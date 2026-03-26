import { MedicalFormsType } from '@/app/(portals)/type';

import { submitMedicalForms } from '@/app/(portals)/utils';

import { SSD_FORMAL_AND_INFORMAL_ENDPOINT } from '@/app/api/apiRoutes';

export const submitFormalAndInformalTools = async (payload: MedicalFormsType) =>
    submitMedicalForms({
        url: SSD_FORMAL_AND_INFORMAL_ENDPOINT,
        body: payload,
    });
