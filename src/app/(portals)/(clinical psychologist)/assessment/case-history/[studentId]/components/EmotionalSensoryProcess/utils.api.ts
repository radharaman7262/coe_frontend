import { MedicalFormsType } from '@/app/(portals)/type';

import { submitMedicalForms } from '@/app/(portals)/utils';
import { OT_EMOTIONAL_SENSORY } from '@/app/api/apiRoutes';

export const emotionalSensoryProcessing = async (payload: MedicalFormsType) =>
    submitMedicalForms({
        url: OT_EMOTIONAL_SENSORY,
        body: payload,
    });
