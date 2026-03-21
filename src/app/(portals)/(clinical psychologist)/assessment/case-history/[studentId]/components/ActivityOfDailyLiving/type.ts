export enum ActivityOfDailyLivingFormKeys {
    COMMENTS = 'comments',
    GENERAL = 'general',
}

export type ActivityOfDailyLivingFormType = {
    [key in ActivityOfDailyLivingFormKeys]: string;
};
