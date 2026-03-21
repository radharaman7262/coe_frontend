export enum SchoolReadinessFormKeys {
    COMMENTS = 'comments',
    GENERAL = 'general',
}

export type SchoolReadinessFormType = {
    [key in SchoolReadinessFormKeys]: string;
};
