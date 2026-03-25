import { MedicalHistoryFormKeys, MedicalHistoryFormType } from './type';

export const INITIAL_STATE: MedicalHistoryFormType = {
    [MedicalHistoryFormKeys.COMORBIDITIES]: '',
    [MedicalHistoryFormKeys.DATE_OF_DIAGNOSIS]: '',
    [MedicalHistoryFormKeys.ENT_REPORTS]: '',
    [MedicalHistoryFormKeys.FEEDING_HISTORY]: '',
    [MedicalHistoryFormKeys.HEARING_STATUS]: '',
    [MedicalHistoryFormKeys.LIP_REPAIR]: '',
    // [MedicalHistoryFormKeys.OTHER_SURGERY]: '',
    // [MedicalHistoryFormKeys.PALATE_REPAIR]: '',
    [MedicalHistoryFormKeys.TYPE_OF_CLEFT]: '',
};

export const HEARING_OPTIONS = [
    { label: 'Normal', value: 'normal', key: 'normal' },
    { label: 'Recurrent otitis media', value: 'recurrentOtitisMedia', key: 'recurrentOtitisMedia' },
    { label: 'Hearing loss', value: 'hearingLoss', key: 'hearingLoss' },
];
