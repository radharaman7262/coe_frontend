import { BehaviorFormKeys, BehaviorFormType } from './type';

export const INITIAL_STATE: BehaviorFormType = {
    [BehaviorFormKeys.GENERAL]: '',
    [BehaviorFormKeys.COMMENTS]: '',
};

export const OPTIONS = [
    { label: 'Task refusal', value: 'Task refusal', key: 'taskRefusal' },
    { label: 'Non-compliance', value: 'Non-compliance', key: 'nonCompliance' },
    { label: 'Aggression', value: 'Aggression', key: 'aggression' },
    { label: 'Self-injury', value: 'Self-injury', key: 'selfInjury' },
    {
        label: 'Verbal stimming (any age)',
        value: 'Verbal stimming (any age)',
        key: 'verbalStimming',
    },
    { label: 'Physical stimming', value: 'Physical stimming', key: 'physicalStimming' },
    {
        label: 'Hyperactivity (frequent in ADHD)',
        value: 'Hyperactivity (frequent in ADHD)',
        key: 'hyperactivity',
    },
    { label: 'Impulsivity', value: 'impulsivity', key: 'impulsivity' },
    {
        label: 'Reinforcement required for tasks',
        value: 'Reinforcement required for tasks',
        key: 'reinforcementRequired',
    },
    { label: 'Avoidance behaviors', value: 'Avoidance behaviors', key: 'avoidanceBehaviors' },
];
