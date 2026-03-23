import { MedicalFormsType } from '@/app/(portals)/type';

import { submitMedicalForms } from '@/app/(portals)/utils';

import { DIAGNOSTIC_FORMULATION_ENDPOINT } from '@/app/api/apiRoutes';

export const submitDiagnosticFormulation = async (payload: MedicalFormsType) =>
    submitMedicalForms({
        url: DIAGNOSTIC_FORMULATION_ENDPOINT,
        body: payload,
    });
