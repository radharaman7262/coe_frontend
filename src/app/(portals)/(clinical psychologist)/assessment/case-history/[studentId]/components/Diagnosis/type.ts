export enum DiagnosisFormKeys {
    STUDENT_ID = 'studentId',
    DIAGNOSIS_FORMULATION = 'diagnosticFormulation',
    DIAGNOSIS = 'diagnosis',
    RECOMMENDATION = 'recommendation',
    NOTES = 'notes',
}

export type DiagnosisFormType = {
    [key in DiagnosisFormKeys]: string;
};

export type GeneralObservationErrorMessagesType = {
    [key in DiagnosisFormKeys]?: string;
};
