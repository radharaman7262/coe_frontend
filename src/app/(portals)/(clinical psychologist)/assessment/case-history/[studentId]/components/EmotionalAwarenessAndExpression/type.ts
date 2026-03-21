export enum EmotionalAwarenessFormKeys {
    BEHAVIOURS = 'behaviors',
}

export type EmotionalAwarenessFormType = {
    [key in EmotionalAwarenessFormKeys]: string;
};
