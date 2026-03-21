import { MedicalFormsType } from '@/app/(portals)/type';

import { submitMedicalForms } from '@/app/(portals)/utils';

import { ASSISTIVE_DEVICE_ENDPOINT } from '@/app/api/apiRoutes';

export const submitAssistiveDevice = async (payload: MedicalFormsType) =>
    submitMedicalForms({
        url: ASSISTIVE_DEVICE_ENDPOINT,
        body: payload,
    });
