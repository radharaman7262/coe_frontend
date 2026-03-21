export enum BehaviorFormKeys {
    COMMENTS = 'comments',
    GENERAL = 'general',
}

export type BehaviorFormType = {
    [key in BehaviorFormKeys]: string;
};
