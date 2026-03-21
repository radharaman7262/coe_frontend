import { MedicalFormsType } from '@/app/(portals)/type';

import { submitMedicalForms } from '@/app/(portals)/utils';

import { ROM_ENDPOINT } from '@/app/api/apiRoutes';

export const submitROM = async (payload: MedicalFormsType) =>
    submitMedicalForms({
        url: ROM_ENDPOINT,
        body: payload,
    });
