export enum VisualPerceptionFormKeys {
    SCORES = 'score',
}

export type VisualPerceptionFormType = {
    [key in VisualPerceptionFormKeys]: string;
};
