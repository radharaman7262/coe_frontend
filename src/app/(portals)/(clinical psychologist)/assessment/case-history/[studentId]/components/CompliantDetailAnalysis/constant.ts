import { PhysicalObservationFormKeys, PhysicalObservationFormType } from './type';

export const INITIAL_STATE: PhysicalObservationFormType = {
    [PhysicalObservationFormKeys.ACTIVITY_LEVEL]: '',
    [PhysicalObservationFormKeys.BEHAVIOR_PATTERN]: '',
    [PhysicalObservationFormKeys.DEFORMITY]: '',
    [PhysicalObservationFormKeys.GAIT]: '',
    [PhysicalObservationFormKeys.GENERAL_APPEARANCE]: '',
    [PhysicalObservationFormKeys.POSTURE]: '',
};