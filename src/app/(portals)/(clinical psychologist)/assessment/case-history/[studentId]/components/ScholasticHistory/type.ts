export enum ScholasticHistoryFormKeys {
    STUDENT_ID = 'studentId',
    TYPE_OF_SCHOOL = 'typeOfSchool',
    AGE_OF_ENTRY = 'ageOfEntry',
    SCHOOLING_DETAILS = 'schoolingDetails',
    SCHOLASTIC_PERFORMANCE = 'scholasticPerformance',
    ATTENDANCE = 'attendance',
    REASONS_FOR_IRREGULARITY = 'reasonsForIrregularity',
}

export type ScholasticHistoryHistoryFormType = {
    [key in ScholasticHistoryFormKeys]: string;
};

export type ScholasticHistoryErrorMessagesType = {
    [key in ScholasticHistoryFormKeys]?: string;
};
