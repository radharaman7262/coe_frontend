export enum ReadingSkillsFormKeys {
    SCORES = 'score',
}

export type ReadingSkillsFormType = {
    [key in ReadingSkillsFormKeys]: string;
};
