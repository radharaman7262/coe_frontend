import { MedicalFormsType } from '@/app/(portals)/type';

import { submitMedicalForms } from '@/app/(portals)/utils';

import { SCHOOL_READINESS_ENDPOINT } from '@/app/api/apiRoutes';

export const submitSchoolReadiness = async (payload: MedicalFormsType) =>
    submitMedicalForms({
        url: SCHOOL_READINESS_ENDPOINT,
        body: payload,
    });
