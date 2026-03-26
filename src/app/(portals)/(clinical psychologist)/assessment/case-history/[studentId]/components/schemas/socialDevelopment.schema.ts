import { FormSchemaField } from '@/components/shared/Forms/types/form.types';

import { DevelopmentalSocialFormKeys } from '../SocialDevelopment/type';

export const SOCIAL_DEVELOPMENT_SCHEMA: FormSchemaField<DevelopmentalSocialFormKeys>[] = [
    {
        name: DevelopmentalSocialFormKeys.SOCIAL_SMILE,
        label: 'Social Smile',
        type: 'text',
        placeholder: 'e.g. 2 months / 2 years',
        helperText: 'Expected at 2 months',
        required: true,
        options: [],
    },
    {
        name: DevelopmentalSocialFormKeys.RECOGNISES_MOTHER,
        label: 'Recognises Mother',
        type: 'text',
        placeholder: 'e.g. 2 months / 2 years',
        helperText: 'Expected at 3 months',
        required: true,
        options: [],
    },
    {
        name: DevelopmentalSocialFormKeys.PRETEND_PARALLEL_PLAY,
        label: 'Pretend / parallel play',
        type: 'text',
        placeholder: 'e.g. 2 months / 2 years',
        helperText: 'Expected at 2–2.5 years',
        required: true,
        options: [],
    },
    {
        name: DevelopmentalSocialFormKeys.ASSOCIATIVE_COOPERATIVE_PLAY,
        label: 'Associative / cooperative play',
        type: 'text',
        placeholder: 'e.g. 2 months / 2 years',
        helperText: 'Expected at 3–4 years',
        required: true,
        options: [],
    },
];
