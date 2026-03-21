import { ChiefComplainsFormKeys, ChiefComplainFormType } from './type';

export const INITIAL_STATE: ChiefComplainFormType = {
    [ChiefComplainsFormKeys.CHIEF_COMPLAINTS]: '',
    [ChiefComplainsFormKeys.GENERAL_OBSERVATION]: '',
};

export const GENERAL_OBSERVATION_OPTION = [
    { label: 'Eye contact', value: 'Eye contact', key: 'EyeContact' },
    {
        label: 'Initiation of interaction',
        value: 'Initiation of interaction',
        key: 'InitiationOfInteraction',
    },
    { label: 'Followed structure', value: 'Followed structure', key: 'FollowedStructure' },
    { label: 'Easily distracted', value: 'Easily distracted', key: 'EasilyDistracted' },
    { label: 'Required breaks', value: 'Required breaks', key: 'RequiredBreaks' },
    { label: 'Cooperative', value: 'Cooperative', key: 'Cooperative' },
    { label: 'Resistance to task', value: 'Resistance to task', key: 'ResistanceToTask' },
    { label: 'Signs of fatigue', value: 'Signs of fatigue', key: 'SignsOfFatigue' },
];
