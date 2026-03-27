import { MedicalFormsType } from '@/app/(portals)/type';

import { submitMedicalForms } from '@/app/(portals)/utils';

import { ORAL_PERIPHERAL_MECHANISMS_EXAMINATION } from '@/app/api/apiRoutes';

export const submitOralPeripheralMechanismExam = async (payload: MedicalFormsType) =>
    submitMedicalForms({
        url: ORAL_PERIPHERAL_MECHANISMS_EXAMINATION,
        body: payload,
    });
