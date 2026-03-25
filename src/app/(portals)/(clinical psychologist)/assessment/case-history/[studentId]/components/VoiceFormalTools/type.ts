export enum VoiceFormalToolFormKeys {
    VOICE_SPEECH_ASSESSMENT = 'voiceSpeechAssessmentTools',
}

export type VoiceFormalToolFormType = {
    [key in VoiceFormalToolFormKeys]: string;
};
