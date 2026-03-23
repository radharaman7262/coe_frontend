import { FormSchemaField } from '@/components/shared/Forms/types/form.types';

import { ProvisionDiagnosisFormKeys } from '../ProvisionalDiagnosis/type';

export const PROVISION_DIAGNOSIS_SCHEMA: FormSchemaField<ProvisionDiagnosisFormKeys>[] = [
    {
        name: ProvisionDiagnosisFormKeys.DESCRIPTION,
        label: '',
        type: 'text',
        placeholder: 'Enter here',
        required: true,
        // helperText: 'Expected at 1 year',
        options: [],
    },
];
