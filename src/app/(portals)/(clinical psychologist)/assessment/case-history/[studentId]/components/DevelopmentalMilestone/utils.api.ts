import { MedicalFormsType } from '@/app/(portals)/type';

import { submitMedicalForms } from '@/app/(portals)/utils';

import { SUBMIT_DEVELOPMENTAL_MILESTONE_ENDPOINT } from '@/app/api/apiRoutes';

export const submitDevelopmentalMilestone = async (payload: MedicalFormsType) =>
    submitMedicalForms({
        url: SUBMIT_DEVELOPMENTAL_MILESTONE_ENDPOINT,
        body: payload,
    });
