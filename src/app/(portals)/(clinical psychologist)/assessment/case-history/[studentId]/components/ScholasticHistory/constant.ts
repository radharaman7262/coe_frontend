import { ScholasticHistoryFormKeys, ScholasticHistoryHistoryFormType } from './type';

export const INITIAL_STATE: ScholasticHistoryHistoryFormType = {
    [ScholasticHistoryFormKeys.STUDENT_ID]: '',
    [ScholasticHistoryFormKeys.AGE_OF_ENTRY]: '',
    [ScholasticHistoryFormKeys.ATTENDANCE]: '',
    [ScholasticHistoryFormKeys.REASONS_FOR_IRREGULARITY]: '',
    [ScholasticHistoryFormKeys.SCHOLASTIC_PERFORMANCE]: '',
    [ScholasticHistoryFormKeys.SCHOOLING_DETAILS]: '',
    [ScholasticHistoryFormKeys.TYPE_OF_SCHOOL]: '',
};
