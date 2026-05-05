import { MedicalFormsType } from '@/app/(portals)/type';

import { submitMedicalForms } from '@/app/(portals)/utils';

import { OT_SENSORY_AUDITORY_PROCESS } from '@/app/api/apiRoutes';

export const auditoryProcessing = async (payload: MedicalFormsType) =>
    submitMedicalForms({
        url: OT_SENSORY_AUDITORY_PROCESS,
        body: payload,
    });
