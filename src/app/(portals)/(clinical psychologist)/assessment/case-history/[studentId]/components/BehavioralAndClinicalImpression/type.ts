export enum VoiceBehavioralObservationFormKeys {
    ATTENTION = 'attentionCompliance',
    EYE_CONTACT = 'eyeContact',
    VOCAL_EFFORT = 'vocalEffort',
    NON_VERBAL_SIGNS = 'nonVerbalSigns',
    PARENT_PERCEPTION = 'parentsPerception',
    SPEAKING_SITUATION = 'speakingSituations',
}

export type VoiceBehavioralObservationFormType = {
    [key in VoiceBehavioralObservationFormKeys]: string;
};
