import { VoiceCaseHistoryFormType , VoiceCaseHistoryKeys } from './type';

export const INITIAL_STATE: VoiceCaseHistoryFormType = {
    [VoiceCaseHistoryKeys.ONSET]: '',
    [VoiceCaseHistoryKeys.DURATION]: '',
    [VoiceCaseHistoryKeys.COURSE]: '',
    [VoiceCaseHistoryKeys.NATURE_OF_CONCERN]: '',
    [VoiceCaseHistoryKeys.ASSOCIATED_SYMPTOMS]: '',
    [VoiceCaseHistoryKeys.VOCAL_MISUSE]: '',
    [VoiceCaseHistoryKeys.MEDICAL_HISTORY]: '',
    [VoiceCaseHistoryKeys.DEVELOPMENTAL_CONCERNS]: '',
    [VoiceCaseHistoryKeys.FAMILY_HISTORY]: '',
    [VoiceCaseHistoryKeys.HEARING_STATUS]: '',
};