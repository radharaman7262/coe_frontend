export enum PlaySkillFormKeys {
    COMMENTS = 'comments',
    GENERAL = 'general',
}

export type PlaySkillFormType = {
    [key in PlaySkillFormKeys]: string;
};
