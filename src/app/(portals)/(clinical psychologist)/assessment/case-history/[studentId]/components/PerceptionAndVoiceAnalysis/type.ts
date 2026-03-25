export enum PerceptionAndVoiceFormKeys {
    DIAGNOSIS = 'diagnosis',
}

export type PerceptionAndVoiceFormType = {
    [key in PerceptionAndVoiceFormKeys]: string | number | boolean;
};
