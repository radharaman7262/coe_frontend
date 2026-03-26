export enum SpeechAndPhonologyFormKeys {
    SPEECH = 'speechIntelligibility',
    PHONEMES = 'phonemesPresent',
    PHONOLOGICAL = 'phonologicalProcessesObserved',
    CONSISTENCY = 'consistencyOfErrors',
    MOTOR_SPEECH = 'motorSpeechMarkers',
    CAS_INDICATORS = 'casIndicators',
}

export type SpeechAndPhonologyFormType = {
    [key in SpeechAndPhonologyFormKeys]: string | number | boolean;
};
