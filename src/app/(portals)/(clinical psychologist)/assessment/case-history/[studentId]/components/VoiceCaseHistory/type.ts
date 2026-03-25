export enum VoiceCaseHistoryKeys {
    ONSET = 'onsetOfVoiceIssue',
    DURATION = 'durationOfSymptoms',
    COURSE = 'course',
    NATURE_OF_CONCERN = 'natureOfConcern',
    ASSOCIATED_SYMPTOMS = 'associatedSymptoms',
    VOCAL_MISUSE = 'vocalMisuseAbuseHabits',
    MEDICAL_HISTORY = 'medicalHistory',
    DEVELOPMENTAL_CONCERNS = 'developmentalConcernsComorbidities',
    FAMILY_HISTORY = 'familyHistoryVoiceHearingSpeechIssues',
    HEARING_STATUS = 'hearingStatus',
}

export type VoiceCaseHistoryFormType = {
    [key in VoiceCaseHistoryKeys]: string;
};
