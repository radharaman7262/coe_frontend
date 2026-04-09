import { DiagnosisFormKeys, DiagnosisFormType } from './type';

export const INITIAL_STATE: DiagnosisFormType = {
    [DiagnosisFormKeys.STUDENT_ID]: '',
    [DiagnosisFormKeys.DIAGNOSIS]: '',
    [DiagnosisFormKeys.DIAGNOSIS_FORMULATION]: '',
    [DiagnosisFormKeys.RECOMMENDATION]: '',
    [DiagnosisFormKeys.NOTES]: '',
};
