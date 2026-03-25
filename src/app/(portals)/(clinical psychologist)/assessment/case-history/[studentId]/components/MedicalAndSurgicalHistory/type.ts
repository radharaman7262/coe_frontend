export enum MedicalHistoryFormKeys {
    TYPE_OF_CLEFT = 'typeOfCleft',
    DATE_OF_DIAGNOSIS = 'dateOfDiagnosis',

    LIP_REPAIR = 'surgicalInterventions',
    // PALATE_REPAIR = 'palateRepair',
    // OTHER_SURGERY = 'otherSurgery',

    HEARING_STATUS = 'hearingStatus',

    ENT_REPORTS = 'entReportsAudiology',

    FEEDING_HISTORY = 'feedingHistoryInfancy',

    COMORBIDITIES = 'comorbidities',
}

export type MedicalHistoryFormType = {
    [key in MedicalHistoryFormKeys]: string;
};
