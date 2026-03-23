export enum WritingFormKeys {
    SCORES = 'score',
}

export type WritingFormType = {
    [key in WritingFormKeys]: string;
};
