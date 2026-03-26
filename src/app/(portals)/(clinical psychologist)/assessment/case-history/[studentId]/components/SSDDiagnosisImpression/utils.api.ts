import { MedicalFormsType } from '@/app/(portals)/type';

import { submitMedicalForms } from '@/app/(portals)/utils';

import { SSD_DIAGNOSTIC_IMPRESSION_ENDPOINT } from '@/app/api/apiRoutes';

export const submitDiagnosticImpression = async (payload: MedicalFormsType) =>
    submitMedicalForms({
        url: SSD_DIAGNOSTIC_IMPRESSION_ENDPOINT,
        body: payload,
    });
