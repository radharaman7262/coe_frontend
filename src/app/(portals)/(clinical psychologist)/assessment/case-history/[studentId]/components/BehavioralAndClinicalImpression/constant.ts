import { VoiceBehavioralObservationFormKeys, VoiceBehavioralObservationFormType } from './type';

export const INITIAL_STATE: VoiceBehavioralObservationFormType = {
    [VoiceBehavioralObservationFormKeys.ATTENTION]: '',
    [VoiceBehavioralObservationFormKeys.EYE_CONTACT]: '',
    [VoiceBehavioralObservationFormKeys.NON_VERBAL_SIGNS]: '',
    [VoiceBehavioralObservationFormKeys.PARENT_PERCEPTION]: '',
    [VoiceBehavioralObservationFormKeys.SPEAKING_SITUATION]: '',
    [VoiceBehavioralObservationFormKeys.VOCAL_EFFORT]: '',
};

export const NON_VERBAL_SIGNS_OPTIONS = [
    { label: 'Throat clearing',value: 'Throat clearing', key: 'throat_clearing' },
    { label: 'Tension',value: 'Tension', key: 'tension' },
    { label: 'Postural strain', value: 'Postural strain' , key: 'postural_strain' },
];
