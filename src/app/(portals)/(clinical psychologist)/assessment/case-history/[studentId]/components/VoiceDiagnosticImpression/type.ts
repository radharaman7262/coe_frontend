export enum VoiceDiagnosticFormKeys {
    VOICE_SPEECH_ASSESSMENT = 'voiceDisorderType',
}

export type VoiceDiagnosticFormType = {
    [key in VoiceDiagnosticFormKeys]: string;
};
