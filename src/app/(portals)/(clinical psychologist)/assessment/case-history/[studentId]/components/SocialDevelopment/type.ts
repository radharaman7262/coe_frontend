export enum DevelopmentalSocialFormKeys {
    SOCIAL_SMILE = 'socialSmile',
    RECOGNISES_MOTHER = 'recognisesMother',
    PRETEND_PARALLEL_PLAY = 'pretendPlay',
    ASSOCIATIVE_COOPERATIVE_PLAY = 'associativePlay',
}

export type DevelopmentalSocialFormType = {
    [key in DevelopmentalSocialFormKeys]: string;
};

export type DevelopmentalSocialErrorMessagesType = {
    [key in DevelopmentalSocialFormKeys]?: string;
};
