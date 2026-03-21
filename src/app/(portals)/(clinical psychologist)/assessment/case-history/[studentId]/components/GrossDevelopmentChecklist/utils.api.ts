import { MedicalFormsType } from '@/app/(portals)/type';

import { submitMedicalForms } from '@/app/(portals)/utils';

import { GRASP_DEVELOPMENT_ENDPOINT } from '@/app/api/apiRoutes';

export const submitGraspDevelopment = async (payload: MedicalFormsType) =>
    submitMedicalForms({
        url: GRASP_DEVELOPMENT_ENDPOINT,
        body: payload,
    });
