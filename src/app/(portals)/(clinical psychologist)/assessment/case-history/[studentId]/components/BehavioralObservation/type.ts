export enum BehavioralSchemaFormKeys {
    ALERTNESS = 'alertness',
    EYE_CONTACT = 'eyeContact',
    JOINT_ATTENTION = 'jointAttention',
    IMITATION = 'imitation',
    SITTING_TOLERANCE = 'sittingTolerance',
    SENSORY_BEHAVIORS = 'sensoryBehaviors',
    TRANSITIONS = 'transitions',
    EMOTIONAL_REGULATION = 'emotionalRegulation',
}

export type BehavioralSchemaFormType = {
    [key in BehavioralSchemaFormKeys]: string;
};
