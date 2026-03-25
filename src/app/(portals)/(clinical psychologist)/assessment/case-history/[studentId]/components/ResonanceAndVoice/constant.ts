import { ResonanceAndVoiceFormType, ResonanceAndVoiceFormKeys } from './type';

export const INITIAL_STATE: ResonanceAndVoiceFormType = {
    [ResonanceAndVoiceFormKeys.VOICE_QUALITY]: '',
    [ResonanceAndVoiceFormKeys.TYPE_OF_REASON]: '',
    [ResonanceAndVoiceFormKeys.RESONANCE_CONSISTENCY]: '',
    [ResonanceAndVoiceFormKeys.PITCH]: '',
    [ResonanceAndVoiceFormKeys.ORAL_NASAL]: '',
    [ResonanceAndVoiceFormKeys.NASAL_TURBULENCE]: '',
    [ResonanceAndVoiceFormKeys.LOUDNESS]: '',
};

export const RESONANCE_OPTIONS = [
    { label: 'Normal', value: 'normal', key: 'normal' },
    { label: 'Hypernasal', value: 'hypernasal', key: 'hypernasal' },
    { label: 'Hyponasal', value: 'hyponasal', key: 'hyponasal' },
    { label: 'Mixed', value: 'mixed', key: 'mixed' },
];
