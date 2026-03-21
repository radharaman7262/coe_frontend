import { EnduranceFormKeys, EnduranceFormType } from './type';

export const INITIAL_STATE: EnduranceFormType = {
    [EnduranceFormKeys.ACTIVITY_SPECIFIC]: '',
    [EnduranceFormKeys.LOWER_LIMB]: '',
    [EnduranceFormKeys.SITTING]: '',
    [EnduranceFormKeys.STANDING]: '',
    [EnduranceFormKeys.UPPER_LIMB]: '',
};
