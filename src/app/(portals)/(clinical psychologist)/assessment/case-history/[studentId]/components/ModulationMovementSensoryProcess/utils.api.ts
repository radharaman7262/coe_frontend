import { MedicalFormsType } from '@/app/(portals)/type';

import { submitMedicalForms } from '@/app/(portals)/utils';
import { OT_MODULATION_SENSORY } from '@/app/api/apiRoutes';

export const modulationMovementSensoryProcessing = async (payload: MedicalFormsType) =>
    submitMedicalForms({
        url: OT_MODULATION_SENSORY,
        body: payload,
    });
