import { MedicalHistoryFormKeys, MedicalHistoryFormType } from './type';

export const INITIAL_STATE: MedicalHistoryFormType = {
    [MedicalHistoryFormKeys.STUDENT_ID]: '',
    [MedicalHistoryFormKeys.CURRENT_OR_PAST_MEDICAL_CONDITIONS]: '',
    [MedicalHistoryFormKeys.ALLERGIES]: '',
    [MedicalHistoryFormKeys.MAJOR_ILLNESS]: '',
    [MedicalHistoryFormKeys.FREQUENT_INFECTIONS]: '',
    [MedicalHistoryFormKeys.PREVIOUS_TREATMENT]: '',
    [MedicalHistoryFormKeys.DIAGNOSED_DISABILITY]: '',
};
