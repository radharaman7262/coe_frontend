import { FormSchemaField } from '@/components/shared/Forms/types/form.types';

import { CPProvisionDiagnosisFormKeys } from '../CPProvisionalDiagnosis/type';

export const CP_PROVISION_DIAGNOSIS_SCHEMA: FormSchemaField<CPProvisionDiagnosisFormKeys>[] = [
    {
        name: CPProvisionDiagnosisFormKeys.DESCRIPTION,
        label: '',
        type: 'textArea',
        placeholder: 'Enter here',
        required: true,
        // helperText: 'Expected at 1 year',
        options: [],
    },
];
