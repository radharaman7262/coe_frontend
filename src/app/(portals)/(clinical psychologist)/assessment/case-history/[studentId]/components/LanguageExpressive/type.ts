export enum LanguageExpressionFormKeys {
    SCORES = 'score',
}

export type LanguageExpressionFormType = {
    [key in LanguageExpressionFormKeys]: string;
};
