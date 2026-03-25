import { FormSchemaField } from '@/components/shared/Forms/types/form.types';

import { ClinicalImpressionFormKeys } from '../ClinicalImpression/type';

import { FLUENCY_DIAGNOSIS_OPTIONS, FLUENCY_IMPACT_OPTIONS } from '../ClinicalImpression/constant';

export const CLINICAL_IMPRESSION_SCHEMA: FormSchemaField<ClinicalImpressionFormKeys>[] = [
    {
        name: ClinicalImpressionFormKeys.BASED_ON_SPEECH_SAMPLE,
        label: 'Based on speech sample, behavior, and parent interview',
        type: 'checkbox',
        options: FLUENCY_DIAGNOSIS_OPTIONS ,
    },
    {
        name: ClinicalImpressionFormKeys.FLUENCY_DISORDER_IMPACT,
        label: 'Fluency disorder may impact',
        type: 'checkbox', // or 'date' if supported
        options: FLUENCY_IMPACT_OPTIONS,
    }
];
