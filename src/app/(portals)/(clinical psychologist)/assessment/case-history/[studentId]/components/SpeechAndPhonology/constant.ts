import { SpeechAndPhonologyFormKeys, SpeechAndPhonologyFormType } from './type';

export const INITIAL_STATE: SpeechAndPhonologyFormType = {
    [SpeechAndPhonologyFormKeys.SPEECH]: '',
    [SpeechAndPhonologyFormKeys.PHONEMES]: '',
    [SpeechAndPhonologyFormKeys.PHONOLOGICAL]: '',
    [SpeechAndPhonologyFormKeys.CONSISTENCY]: '',
    [SpeechAndPhonologyFormKeys.MOTOR_SPEECH]: '',
    [SpeechAndPhonologyFormKeys.CAS_INDICATORS]: '',
};

export const PHONOLOGICAL_PROCESS = [
    { key: 'fronting', label: 'Fronting', value: 'Fronting' },
    { key: 'stopping', label: 'Stopping', value: 'Stopping' },
    { key: 'cluster reduction', label: 'Cluster reduction', value: 'Cluster reduction' },
    { key: 'gliding', label: 'Gliding', value: 'Gliding' },
    {
        key: 'final consonant deletion',
        label: 'Final consonant deletion',
        value: 'Final consonant deletion',
    },
    { key: 'others', label: 'Others', value: 'Others' },
];

export const MOTOR_SPEECH_MARKER_OPTIONS = [
    { key: 'groping', label: 'Groping', value: 'Groping' },
    {
        key: 'inconsistent productions',
        label: 'Inconsistent productions',
        value: 'Inconsistent productions',
    },
    { key: 'voicing errors', label: 'Voicing errors', value: 'Voicing errors' },
];

export const CAS_INDICATORS_OPTIONS = [
    { key: 'inconsistent errors', label: 'Inconsistent errors', value: 'Inconsistent errors' },
    {
        key: 'prosody abnormalities',
        label: 'Prosody abnormalities',
        value: 'Prosody abnormalities',
    },
    {
        key: 'difficulty with transitions',
        label: 'Difficulty with transitions',
        value: 'Difficulty with transitions',
    },
];
