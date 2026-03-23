import { FormSchemaField } from '@/components/shared/Forms/types/form.types';

import { DiagnosticFormulationFormKeys } from '../DiagnosticFormulation/type';

export const DIAGNOSTIC_FORMULATION_SCHEMA: FormSchemaField<DiagnosticFormulationFormKeys>[] = [
    {
        name: DiagnosticFormulationFormKeys.DESCRIPTION,
        label: '',
        type: 'text',
        placeholder: 'Enter here',
        required: true,
        // helperText: 'Expected at 1 year',
        options: [],
    },
];
