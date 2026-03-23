export enum FunctionalReadingFormKeys {
    SCORES = 'score',
}

export type FunctionalReadingFormType = {
    [key in FunctionalReadingFormKeys]: string;
};
