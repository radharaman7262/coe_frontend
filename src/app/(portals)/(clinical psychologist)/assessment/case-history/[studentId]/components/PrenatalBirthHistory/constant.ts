import { PersonalBirthHistoryFormType, PersonalBirthHistoryFormKeys } from './type';

export const INITIAL_STATE: PersonalBirthHistoryFormType = {
    [PersonalBirthHistoryFormKeys.STUDENT_ID]: 23,
    [PersonalBirthHistoryFormKeys.CONCEPTION_TYPE]: '',
    [PersonalBirthHistoryFormKeys.BLEEDING_DURING_LATE_PREGNANCY]: '',
    [PersonalBirthHistoryFormKeys.XRAY_EXPOSURE]: '',
    [PersonalBirthHistoryFormKeys.INFECTION_FEVER_RASH_STD]: '',
    [PersonalBirthHistoryFormKeys.HISTORY_OF_PSYCHOLOGICAL_STRESS]: '',
    [PersonalBirthHistoryFormKeys.MOTHER_AGE_AT_BIRTH]: '',
    [PersonalBirthHistoryFormKeys.FETAL_GROWTH_RELATED_ISSUES]: '',
    [PersonalBirthHistoryFormKeys.PREGNANCY_HEALTH]: '',
    [PersonalBirthHistoryFormKeys.CHIEF_COMPLAINTS]: '',
    [PersonalBirthHistoryFormKeys.PERCENTAGE]: 0,
};

export const PREGNANCY_HEALTH_OPTIONS = [
    { label: 'Gestational Diabetes', value: 'Gestational Diabetes', key: 'gestationalDiabetes' },
    { label: 'Hypertension', value: 'Hypertension', key: 'hypertension' },
    { label: 'Jaundice', value: 'Jaundice', key: 'jaundice' },
    { label: 'Hyperthyroidism', value: 'Hyperthyroidism', key: 'hyperthyroidism' },
];
