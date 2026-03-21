import { MedicalFormsType } from '@/app/(portals)/type';

import { submitMedicalForms } from '@/app/(portals)/utils';

import { ACTIVITY_OF_DAILY_LIVING_ENDPOINT } from '@/app/api/apiRoutes';

export const submitActivityOfDailyLiving = async (payload: MedicalFormsType) =>
    submitMedicalForms({
        url: ACTIVITY_OF_DAILY_LIVING_ENDPOINT,
        body: payload,
    });
