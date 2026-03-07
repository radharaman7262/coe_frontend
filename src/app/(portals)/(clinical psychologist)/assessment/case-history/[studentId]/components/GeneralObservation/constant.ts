import { GeneralObservationFormKeys, GeneralObservationFormType } from './type';

export const INITIAL_STATE: GeneralObservationFormType = {
    [GeneralObservationFormKeys.STUDENT_ID]: '',
    [GeneralObservationFormKeys.AFFECTIVE_BEHAVIOR]: '',
    [GeneralObservationFormKeys.ATTENTION_SPAN_DISTRACTIBILITY]: '',
    [GeneralObservationFormKeys.GENERAL_APPEARANCE_BEHAVIOUR]: '',
    [GeneralObservationFormKeys.INTELLECTUAL_CAPACITY]: '',
    [GeneralObservationFormKeys.MOTIVATIONAL_INSIGHT]: '',
    [GeneralObservationFormKeys.SPEECH]: '',
    [GeneralObservationFormKeys.SPONTANEOUS_MOBILITY_ACTIVITY]: '',
};
