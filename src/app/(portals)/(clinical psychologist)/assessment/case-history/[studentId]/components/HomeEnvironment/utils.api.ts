import { MedicalFormsType } from '@/app/(portals)/type';

import { submitMedicalForms } from '@/app/(portals)/utils';

import { HOME_ENVIRONMENT_ENDPOINT } from '@/app/api/apiRoutes';

export const submitHomeEnvironment = async (payload: MedicalFormsType) =>
    submitMedicalForms({
        url: HOME_ENVIRONMENT_ENDPOINT,
        body: payload,
    });
