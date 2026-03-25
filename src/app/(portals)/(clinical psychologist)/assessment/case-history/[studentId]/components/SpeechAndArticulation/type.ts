export enum SpeechAndArticulateFormKeys {
    SPEECH_INTELLIGIBILITY = 'speechIntelligibility',
    ARTICULATION_ERRORS = 'articulationErrors',
    ERROR_SOUNDS = 'specificErrorSounds',
    COMPENSATORY_ARTICULATION = 'compensatoryArticulationPatterns',
    NASAL_EMISSION = 'nasalEmission',
    PRESSURE_CONSONANT = 'pressureConsonantProduction',
    ORAL_NASAL = 'oralNasalContrastTesting',
}

export type SpeechAndArticulateFormType = {
    [key in SpeechAndArticulateFormKeys]: string;
};
