export enum PersonalBirthHistoryFormKeys {
    STUDENT_ID = 'studentId',
    CONCEPTION_TYPE = 'conceptionType',
    BLEEDING_DURING_LATE_PREGNANCY = 'bleedingDuringLatePregnancy',
    XRAY_EXPOSURE = 'xrayExposure',
    INFECTION_FEVER_RASH_STD = 'infectionFeverRashStd',
    HISTORY_OF_PSYCHOLOGICAL_STRESS = 'historyOfPsychologicalStress',
    MOTHER_AGE_AT_BIRTH = 'motherAgeAtBirth',
    FETAL_GROWTH_RELATED_ISSUES = 'fetalGrowthRelatedIssues',
    CHIEF_COMPLAINTS = 'chiefComplaints',

    // pregnancy health
    PREGNANCY_HEALTH = 'pregnancyHealth',

    PERCENTAGE = 'percentage',
}

export type PersonalBirthHistoryFormType = {
    [key in PersonalBirthHistoryFormKeys]: string | number | boolean;
};

export type PersonalBirthHistoryErrorMessagesType = {
    [key in PersonalBirthHistoryFormKeys]?: string;
};
