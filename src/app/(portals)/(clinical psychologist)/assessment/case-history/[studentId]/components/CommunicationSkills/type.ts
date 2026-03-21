export enum CommunicationSkillsFormKeys {
    GENERAL = 'general',
    COMMENTS = 'comments',
}

export type CommunicationSkillsFormType = {
    [key in CommunicationSkillsFormKeys]: string;
};
