import { MedicalFormsType } from '@/app/(portals)/type';

import { submitMedicalForms } from '@/app/(portals)/utils';

import {  COMPLIANT_DETAIL_ANALYSIS_ENDPOINT } from '@/app/api/apiRoutes';

export const submitCompliantDetailAnalysis = async (payload: MedicalFormsType) =>
    submitMedicalForms({
        url: COMPLIANT_DETAIL_ANALYSIS_ENDPOINT,
        body: payload,
    });