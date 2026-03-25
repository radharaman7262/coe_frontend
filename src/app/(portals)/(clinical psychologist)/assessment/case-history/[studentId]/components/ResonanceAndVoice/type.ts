export enum ResonanceAndVoiceFormKeys {
    TYPE_OF_REASON = 'typeOfResonance',
    RESONANCE_CONSISTENCY = 'resonanceConsistency',
    VOICE_QUALITY = 'voiceQuality',
    PITCH = 'pitch',
    LOUDNESS = 'loudness',
    NASAL_TURBULENCE = 'nasalTurbulenceSnorting',
    ORAL_NASAL = 'oralNasalContrastTesting',
}

export type ResonanceAndVoiceFormType = {
    [key in ResonanceAndVoiceFormKeys]: string;
};