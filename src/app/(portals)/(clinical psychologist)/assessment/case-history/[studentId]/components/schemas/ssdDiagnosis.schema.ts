import { FormSchemaField } from '@/components/shared/Forms/types/form.types';

import {
    FUNCTIONAL_COMMUNICATION_OPTIONS,
    LANGUAGE_PROFILE_OPTIONS,
    SSD_DIAGNOSIS_IMPRESSION,
} from '../SSDDiagnosisImpression/constant';

import { SSDDiagnosisImpressionFormKeys } from '../SSDDiagnosisImpression/type';

export const SSD_DIAGNOSIS_IMPRESSION_SCHEMA: FormSchemaField<SSDDiagnosisImpressionFormKeys>[] = [
    {
        name: SSDDiagnosisImpressionFormKeys.SPEECH_DISORDER,
        label: 'Speech diagnosis',
        type: 'radio',
        required: true,
        options: SSD_DIAGNOSIS_IMPRESSION,
    },
    {
        name: SSDDiagnosisImpressionFormKeys.LANGUAGE_PROFILE,
        label: 'Language profile',
        type: 'radio',
        required: true,
        options: LANGUAGE_PROFILE_OPTIONS,
    },
    {
        name: SSDDiagnosisImpressionFormKeys.COMMUNICATION_INTENT,
        label: 'Functional Communication',
        type: 'radio',
        required: true,
        options: FUNCTIONAL_COMMUNICATION_OPTIONS,
    },
];
