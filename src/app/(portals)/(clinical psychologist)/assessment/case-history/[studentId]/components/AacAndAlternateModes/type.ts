export enum AlternateModesFormKeys {
    AAC_TRIAL = 'aacTrial',
    TYPE = 'type',
    ACCEPTANCE_PREFERENCE = 'acceptancePreference',
    COMMUNICATIVE_INTENT = 'communicativeIntent',
}

export type AlternateModesFormType = {
    [key in AlternateModesFormKeys]: string;
};
