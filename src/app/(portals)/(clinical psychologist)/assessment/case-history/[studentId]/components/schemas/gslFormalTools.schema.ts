import { FormSchemaField } from '@/components/shared/Forms/types/form.types';

import { GSLFormalFormKeys } from '../ProvisionalDiagnosis copy/type';

export const GSL_FORMAL_TOOLS_SCHEMA: FormSchemaField<GSLFormalFormKeys>[] = [
    {
        name: GSLFormalFormKeys.DESCRIPTION,
        label: '',
        type: 'textArea',
        placeholder: 'Enter here',
        required: true,
        // helperText: 'Expected at 1 year',
        options: [],
    },
];
