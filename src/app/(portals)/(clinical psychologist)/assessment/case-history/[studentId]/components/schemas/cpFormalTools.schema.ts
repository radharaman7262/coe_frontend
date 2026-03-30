import { FormSchemaField } from '@/components/shared/Forms/types/form.types';

import { CPFormalToolsFormKeys } from '../CPFormalTools/type';

export const CP_FORMAL_TOOLS_SCHEMA: FormSchemaField<CPFormalToolsFormKeys>[] = [
    {
        name: CPFormalToolsFormKeys.DESCRIPTION,
        label: '',
        type: 'textArea',
        placeholder: 'Enter here',
        required: true,
        // helperText: 'Expected at 1 year',
        options: [],
    },
];
