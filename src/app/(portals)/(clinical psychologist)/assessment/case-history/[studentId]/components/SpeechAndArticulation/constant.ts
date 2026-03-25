import { SpeechAndArticulateFormKeys , SpeechAndArticulateFormType } from './type';

export const INITIAL_STATE: SpeechAndArticulateFormType = {
    [SpeechAndArticulateFormKeys.ARTICULATION_ERRORS]: '',
    [SpeechAndArticulateFormKeys.COMPENSATORY_ARTICULATION]: '',
    [SpeechAndArticulateFormKeys.ERROR_SOUNDS]: '',
    [SpeechAndArticulateFormKeys.NASAL_EMISSION]: '',
    [SpeechAndArticulateFormKeys.ORAL_NASAL]: '',
    [SpeechAndArticulateFormKeys.PRESSURE_CONSONANT]: '',
    [SpeechAndArticulateFormKeys.SPEECH_INTELLIGIBILITY]: '',
};

export const ARTICULATION_OPTIONS = [
    { label: 'Substitutions', value: 'Substitutions', key: 'substitutions' },
    { label: 'Omissions', value: 'Omissions', key: 'omissions' },
    { label: 'Distortions', value: 'Distortions', key: 'distortions' },
    { label: 'Glottal stops', value: 'Glottal stops', key: 'glottalStops' },
    { label: 'Nasal emissions', value: 'Nasal emissions', key: 'nasalEmissions' },
];
