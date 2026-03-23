import { DiagnosticImpressionFormKeys , DiagnosticImpressionFormType } from './type';

export const INITIAL_STATE: DiagnosticImpressionFormType = {
    [DiagnosticImpressionFormKeys.SPEECH_DIAGNOSIS]: '',
    [DiagnosticImpressionFormKeys.LANGUAGE_DIAGNOSIS]: '',
    [DiagnosticImpressionFormKeys.FUNCTIONAL_COMMUNICATION]: '',
};

export const PREGNANCY_HEALTH_OPTIONS = [
    { label: 'Gestational Diabetes', value: 'Gestational Diabetes', key: 'gestationalDiabetes' },
    { label: 'Hypertension', value: 'Hypertension', key: 'hypertension' },
    { label: 'Jaundice', value: 'Jaundice', key: 'jaundice' },
    { label: 'Hyperthyroidism', value: 'Hyperthyroidism', key: 'hyperthyroidism' },
];
