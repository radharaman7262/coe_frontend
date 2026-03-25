export enum FluencyObservationKeys {
    EYE_CONTACT = 'eyeContact',
    PHYSICAL_TENSION = 'physicalTension',
    AVOIDANCE_BEHAVIOR = 'avoidanceBehaviors',
    ASSOCIATED_MOTOR_BEHAVIOR = 'associatedMotorBehavior',
    SPEECH_INITIATION = 'speechInitiation',
    SPEAKING_SITUATION = 'speakingSituations',
}

export type FluencyObservationFormType = {
    [key in FluencyObservationKeys]: string;
};