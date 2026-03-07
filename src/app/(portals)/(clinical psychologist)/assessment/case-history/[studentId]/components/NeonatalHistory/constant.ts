import { NeonatalHistoryFormKeys, NeonatalHistoryFormType } from './type';

export const INITIAL_STATE: NeonatalHistoryFormType = {
    [NeonatalHistoryFormKeys.BIRTH_CRY]: '',
    [NeonatalHistoryFormKeys.BIRTH_POSITION_TETHERED_CORD]: '',
    [NeonatalHistoryFormKeys.BIRTH_WEIGHT]: '',
    [NeonatalHistoryFormKeys.COMPLICATIONS_DURING_BIRTH]: '',
    [NeonatalHistoryFormKeys.HEAD_INJURY_DURING_BIRTH]: '',
    [NeonatalHistoryFormKeys.NICU_DURATION]: '',
    [NeonatalHistoryFormKeys.NICU_STAY]: '',
    [NeonatalHistoryFormKeys.TERM]: '',
    [NeonatalHistoryFormKeys.TYPE_OF_DELIVERY]: '',
};
