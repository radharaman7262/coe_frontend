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

export const OPTIONS = [
    { label: 'School refusal', value: 'School refusal', key: 'SchoolRefusal' },
    { label: 'Fearful', value: 'Fearful', key: 'Fearful' },
    { label: 'Financial problems', value: 'Financial problems', key: 'FinancialProblems' },
    { label: 'Poor progress', value: 'Poor progress', key: 'PoorProgress' },
    { label: 'Behavioral problems', value: 'Behavioral problems', key: 'BehavioralProblems' },
    { label: 'Others', value: 'Others', key: 'Others' },
    { label: 'none elicited', value: 'none elicited', key: 'none elicited' },
];
