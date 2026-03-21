import { MedicalFormsType } from '@/app/(portals)/type';

import { submitMedicalForms } from '@/app/(portals)/utils';

import { CHIEF_COMPLAINTS_OBSERVATIONS_ENDPOINT } from '@/app/api/apiRoutes';

export const submitChiefComplaints = async (payload: MedicalFormsType) =>
    submitMedicalForms({
        url: CHIEF_COMPLAINTS_OBSERVATIONS_ENDPOINT,
        body: payload,
    });