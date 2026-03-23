export enum MathematicalSkillsFormKeys {
    SCORES = 'score',
}

export type MathematicalSkillsFormType = {
    [key in MathematicalSkillsFormKeys]: string;
};
