import { MedicalFormsType } from '@/app/(portals)/type';

import { submitMedicalForms } from '@/app/(portals)/utils';

import { VOICE_AERODYNAMIC_PHYSCOLOGICAL_ASPECTS_ENDPOINT } from '@/app/api/apiRoutes';

export const submitAerodynamicAspects = async (payload: MedicalFormsType) =>
    submitMedicalForms({
        url: VOICE_AERODYNAMIC_PHYSCOLOGICAL_ASPECTS_ENDPOINT,
        body: payload,
    });
