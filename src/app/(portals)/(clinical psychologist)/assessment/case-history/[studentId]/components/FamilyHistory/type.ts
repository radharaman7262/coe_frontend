export enum FamilyHistoryFormKeys {
    STUDENT_ID = 'studentId',
    FAMILY_TYPE = 'familyType',
    SOCIOECONOMIC_STATUS = 'socioeconomicStatus',
    HISTORY_OF_ILLNESS = 'historyOfIllness',
    NUMBER_OF_SIBLINGS = 'numberOfSiblings',
    PRIMARY_CAREGIVER = 'primaryCaregivers',
    FAMILY_HISTORY_DELAY = 'familyHistorySpeechHearingDevDelay',
    CONSANGUINITY = 'consanguinity',
    FAMILY_GENOGRAM = 'familyGenogram',
}

export type FamilyHistoryFormType = {
    [key in FamilyHistoryFormKeys]: string;
};

export type FamilyHistoryErrorMessagesType = {
    [key in FamilyHistoryFormKeys]?: string;
};
