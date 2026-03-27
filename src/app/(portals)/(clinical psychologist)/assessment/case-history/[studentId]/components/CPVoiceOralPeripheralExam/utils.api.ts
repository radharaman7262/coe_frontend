import { MedicalFormsType } from '@/app/(portals)/type';

import { submitMedicalForms } from '@/app/(portals)/utils';

import { CP_ORAL_PERIPHERAL_EXAMINATION } from '@/app/api/apiRoutes';

export const submitOralPeripheralMechanismExam = async (payload: MedicalFormsType) =>
    submitMedicalForms({
        url: CP_ORAL_PERIPHERAL_EXAMINATION,
        body: payload,
    });
