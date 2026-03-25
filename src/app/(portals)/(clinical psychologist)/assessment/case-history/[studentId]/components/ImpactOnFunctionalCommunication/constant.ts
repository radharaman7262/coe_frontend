import { ImpactOnCommunicationFormKeys , ImpactOnCommunicationFormType } from './type';

export const INITIAL_STATE: ImpactOnCommunicationFormType = {
    [ImpactOnCommunicationFormKeys.EMOTIONAL_SOCIAL_IMPACT]: '',
};

export const EMOTIONAL_SOCIAL_IMPACT_OPTIONS = [
    {
        label: 'Avoids speaking in group settings',
        value: 'Avoids speaking in group settings',
        key:'avoids_group_speaking'
    },
    {
        label: 'Shows reduced participation in class',
        value: 'reduced_participation',
        key: 'reduced_participation',
    },
    {
        label: 'Shows reduced participation in class',
        value: 'prefers_non_verbal',
        key: 'prefers_non_verbal',
    },
    {
        label: 'Exhibits signs of frustration / embarrassment',
        value: 'Exhibits signs of frustration / embarrassment',
        key: 'frustration_embarrassment',
    },
    {
        label: 'Gets teased or mocked',
        value: 'Gets teased or mocked',
        key: 'teased_mocked',
    },
    {
        label: 'Displays emotional reactions (crying, refusal to speak)',
        value: 'Displays emotional reactions (crying, refusal to speak)',
        key: 'emotional_reactions',
    },
];