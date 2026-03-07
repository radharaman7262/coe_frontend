export enum GeneralObservationFormKeys {
    STUDENT_ID = 'studentId',
    GENERAL_APPEARANCE_BEHAVIOUR = 'generalAppearanceBehaviour',
    SPONTANEOUS_MOBILITY_ACTIVITY = 'spontaneousMobilityActivityLevel',
    SPEECH = 'speech',
    AFFECTIVE_BEHAVIOR = 'affectiveBehavior',
    ATTENTION_SPAN_DISTRACTIBILITY = 'attentionSpanDistractibility',
    INTELLECTUAL_CAPACITY = 'intellectualCapacity',
    MOTIVATIONAL_INSIGHT = 'motivationalInsight',
}

export type GeneralObservationFormType = {
    [key in GeneralObservationFormKeys]: string;
};

export type GeneralObservationErrorMessagesType = {
    [key in GeneralObservationFormKeys]?: string;
};
