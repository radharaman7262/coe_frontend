import { FamilyHistoryFormKeys, FamilyHistoryFormType } from './type';

export const INITIAL_STATE: FamilyHistoryFormType = {
    [FamilyHistoryFormKeys.STUDENT_ID]: '',
    [FamilyHistoryFormKeys.FAMILY_TYPE]: '',
    [FamilyHistoryFormKeys.SOCIOECONOMIC_STATUS]: '',
    [FamilyHistoryFormKeys.HISTORY_OF_ILLNESS]: '',
    [FamilyHistoryFormKeys.NUMBER_OF_SIBLINGS]: '',
    [FamilyHistoryFormKeys.PRIMARY_CAREGIVER]: '',
    [FamilyHistoryFormKeys.FAMILY_HISTORY_DELAY]: '',
    [FamilyHistoryFormKeys.CONSANGUINITY]: '',
    [FamilyHistoryFormKeys.FAMILY_GENOGRAM]: '',
};
