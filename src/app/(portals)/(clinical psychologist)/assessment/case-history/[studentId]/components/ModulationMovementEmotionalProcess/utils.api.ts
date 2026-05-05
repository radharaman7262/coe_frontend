import { MedicalFormsType } from '@/app/(portals)/type';

import { submitMedicalForms } from '@/app/(portals)/utils';
import { OT_MODULATION_VISUAL_SENSORY } from '@/app/api/apiRoutes';

export const modulationMovementEmotionalProcessing = async (payload: MedicalFormsType) =>
    submitMedicalForms({
        url: OT_MODULATION_VISUAL_SENSORY,
        body: payload,
    });
