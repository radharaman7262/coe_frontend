import { BehavioralSchemaFormKeys, BehavioralSchemaFormType } from './type';

export const INITIAL_STATE: BehavioralSchemaFormType = {
    [BehavioralSchemaFormKeys.IN_HAND_MANIPULATION]: '',
};

export const ALERTNESS = [
    { key: 'hyper-alert', label: 'Hyper-alert', value: 'Hyper-alert' },
    { key: 'inattentive', label: 'Inattentive', value: 'Inattentive' },
    { key: 'variable', label: 'Variable', value: 'Variable' },
    { key: 'wnl', label: 'WNL', value: 'WNL' },
];

export const EYE_CONTACT_OPTIONS = [
    { key: 'appropriate', label: 'Appropriate', value: 'Appropriate' },
    { key: 'fleeting', label: 'Fleeting', value: 'Fleeting' },
    { key: 'absent', label: 'Absent', value: 'Absent' },
    { key: 'avoidant', label: 'Avoidant', value: 'Avoidant' },
];

export const ATTENTION = [
    { key: 'present', label: 'Present', value: 'Present' },
    { key: 'emerging', label: 'Emerging', value: 'Emerging' },
    { key: 'absent', label: 'Absent', value: 'Absent' },
];

export const IMITATION = [
    { key: 'gross', label: 'Gross', value: 'Gross' },
    { key: 'fine', label: 'Fine', value: 'Fine' },
    { key: 'vocal', label: 'Vocal', value: 'Vocal' },
    { key: 'absent', label: 'Absent', value: 'Absent' },
];

export const SITTING_TOLERANCE = [
    { key: 'adequate', label: 'Adequate', value: 'Adequate' },
    { key: 'poor', label: 'Poor', value: 'Poor' },
    { key: 'needs prompts', label: 'Needs prompts', value: 'Needs prompts' },
];

export const SENSORY_BEHAVIOR = [
    { key: 'hyper', label: 'Hyper', value: 'Hyper' },
    { key: 'hypo', label: 'Hypo', value: 'Hypo' },
    { key: 'seeking', label: 'Seeking', value: 'Seeking' },
];

export const TRANSITIONS = [
    { key: 'smooth', label: 'Smooth', value: 'Smooth' },
    { key: 'resists', label: 'Resists', value: 'Resists' },
    { key: 'meltdown', label: 'Meltdown', value: 'Meltdown' },
];

export const EMOTIONAL = [
    { key: 'calm', label: 'Calm', value: 'Calm' },
    { key: 'over-reactive', label: 'Over-reactive', value: 'Over-reactive' },
    { key: 'dysregulated', label: 'Dysregulated', value: 'Dysregulated' },
];
