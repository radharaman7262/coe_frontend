import { FluencyObservationFormType , FluencyObservationKeys } from './type';

export const INITIAL_STATE: FluencyObservationFormType = {
    [FluencyObservationKeys.ASSOCIATED_MOTOR_BEHAVIOR]: '',
    [FluencyObservationKeys.AVOIDANCE_BEHAVIOR]: '',
    [FluencyObservationKeys.EYE_CONTACT]: '',
    [FluencyObservationKeys.PHYSICAL_TENSION]: '',
    [FluencyObservationKeys.SPEAKING_SITUATION]: '',
    [FluencyObservationKeys.SPEECH_INITIATION]: '',
};