import { VoiceDiagnosticFormType, VoiceDiagnosticFormKeys } from './type';

export const VOICE_DIAGNOSTIC_IMPRESSION_OPTIONS = [
    { label: 'Functional Dysphonia', value: 'Functional Dysphonia', key: 'functional_dysphonia' },
    {
        label: 'Vocal Nodules / Phonotrauma',
        value: 'Vocal Nodules / Phonotrauma',
        key: 'vocal_nodules_phonotrauma',
    },
    {
        label: 'Neurogenic Voice Disorder',
        value: 'Neurogenic Voice Disorder',
        key: 'neurogenic_voice_disorder',
    },
    {
        label: 'Hyperfunctional / Hypofunctional voice',
        value: 'Hyperfunctional / Hypofunctional voice',
        key: 'hyper_hypofunctional_voice',
    },
    {
        label: 'Resonance disorder (hypernasality/hyponasality)',
        value: 'Resonance disorder (hypernasality/hyponasality)',
        key: 'resonance_disorder',
    },
    {
        label: 'Suspected hearing-related voice disorder',
        value: 'Suspected hearing-related voice disorder',
        key: 'hearing_related_voice_disorder',
    },
    {
        label: 'ASD-related voice pattern (flat prosody, monotone, etc.)',
        value: 'ASD-related voice pattern (flat prosody, monotone, etc.)',
        key: 'asd_voice_pattern',
    },
];

export const INITIAL_STATE: VoiceDiagnosticFormType = {
    [VoiceDiagnosticFormKeys.VOICE_SPEECH_ASSESSMENT]: '',
};
