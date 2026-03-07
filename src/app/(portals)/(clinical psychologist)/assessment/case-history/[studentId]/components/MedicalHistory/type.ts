export enum MedicalHistoryFormKeys {
    STUDENT_ID = 'studentId',
    CURRENT_OR_PAST_MEDICAL_CONDITIONS = 'currentPastMedicalConditions',
    ALLERGIES = 'allergies',
    MAJOR_ILLNESS = 'majorIllnesses',
    FREQUENT_INFECTIONS = 'frequentColdFeverEarInfections',
    PREVIOUS_TREATMENT = 'previousTreatmentsMedications',
    DIAGNOSED_DISABILITY = 'diagnosedDisabilities',
}

export type MedicalHistoryFormType = {
    [key in MedicalHistoryFormKeys]: string;
};

export type MedicalHistoryErrorMessagesType = {
    [key in MedicalHistoryFormKeys]?: string;
};
