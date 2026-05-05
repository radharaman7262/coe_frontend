import { MedicalFormsType } from '@/app/(portals)/type';

import { submitMedicalForms } from '@/app/(portals)/utils';

import { OT_BEHAVIORAL_OUTCOMES_EMOTIONAL } from '@/app/api/apiRoutes';

export const behaviouralOutcomeProcessing = async (payload: MedicalFormsType) =>
    submitMedicalForms({
        url: OT_BEHAVIORAL_OUTCOMES_EMOTIONAL,
        body: payload,
    });
