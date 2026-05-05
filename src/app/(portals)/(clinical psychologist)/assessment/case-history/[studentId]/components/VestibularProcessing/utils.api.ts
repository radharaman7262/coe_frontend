import { MedicalFormsType } from '@/app/(portals)/type';

import { submitMedicalForms } from '@/app/(portals)/utils';

import { OT_VESTIBULAR_PROCESSING } from '@/app/api/apiRoutes';

export const vestibularProcessing = async (payload: MedicalFormsType) =>
    submitMedicalForms({
        url: OT_VESTIBULAR_PROCESSING,
        body: payload,
    });
