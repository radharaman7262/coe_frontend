import { MedicalFormsType } from '@/app/(portals)/type';

import { submitMedicalForms } from '@/app/(portals)/utils';

import { IN_HAND_DEVELOPMENT_ENDPOINT } from '@/app/api/apiRoutes';

export const submitInHandManipulation = async (payload: MedicalFormsType) =>
    submitMedicalForms({
        url: IN_HAND_DEVELOPMENT_ENDPOINT,
        body: payload,
    });
