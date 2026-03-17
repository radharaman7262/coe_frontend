import { FormSchemaField } from '@/components/shared/Forms/types/form.types';

import { DevelopmentalSelfHelpFormKeys } from '../SelfHelpSkills/type';

export const DEVELOPMENTAL_SELF_SKILLS_SCHEMA: FormSchemaField<DevelopmentalSelfHelpFormKeys>[] = [
    {
        name: DevelopmentalSelfHelpFormKeys.FEEDS_INDEPENDENTLY,
        label: 'Feeds independently',
        type: 'text',
        placeholder: 'e.g. 2 months / 2 years',
        // helperText: 'Expected at 18 months',
        required: true,
        options: [],
    },
    {
        name: DevelopmentalSelfHelpFormKeys.BRUSHES_TEETH,
        label: 'Brushes teeth',
        type: 'text',
        placeholder: 'e.g. 2 months / 2 years',
        // helperText: 'Expected at 3 years',
        required: true,
        options: [],
    },
    {
        name: DevelopmentalSelfHelpFormKeys.BOWEL_CONTROL,
        label: 'Bowel control',
        type: 'text',
        placeholder: 'e.g. 2 months / 2 years',
        // helperText: 'Expected at < 4 years',
        required: true,
        options: [],
    },
    {
        name: DevelopmentalSelfHelpFormKeys.BLADDER_CONTROL,
        label: 'Bladder control',
        type: 'text',
        placeholder: 'e.g. 2 months / 2 years',
        // helperText: 'Expected at < 5 years',
        required: true,
        options: [],
    },
    {
        name: DevelopmentalSelfHelpFormKeys.DRESSES_SELF,
        label: 'Dresses self',
        type: 'text',
        placeholder: 'e.g. 2 months / 2 years',
        // helperText: 'Expected at 5 years',
        required: true,
        options: [],
    },
];
