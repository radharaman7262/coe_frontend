export enum SocialSkillsFormKeys {
    COMMENTS = 'comments',
    GENERAL = 'general',
}

export type SocialSkillFormType = {
    [key in SocialSkillsFormKeys]: string;
};
