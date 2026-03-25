import { CPDiagnosticImpressionFormKeys, CPDiagnosticImpressionFormType } from './type';

export const INITIAL_STATE: CPDiagnosticImpressionFormType = {
    [CPDiagnosticImpressionFormKeys.COMMUNICATION_INTENT]: '',
    [CPDiagnosticImpressionFormKeys.FUNCTIONAL_COMMUNICATION]: '',
    [CPDiagnosticImpressionFormKeys.LANGUAGE_PROFILE]: '',
    [CPDiagnosticImpressionFormKeys.SPEECH_DISORDER]: '',
    [CPDiagnosticImpressionFormKeys.SPEECH_INTELLIGIBILITY]: '',
};