import { MedicalFormsType } from '@/app/(portals)/type';

import { submitMedicalForms } from '@/app/(portals)/utils';

import { OT_BEHAVIORAL_OUTCOMES_SENSORY } from '@/app/api/apiRoutes';

export const behaviouralSensoryProcessing = async (payload: MedicalFormsType) =>
    submitMedicalForms({
        url: OT_BEHAVIORAL_OUTCOMES_SENSORY,
        body: payload,
    });
