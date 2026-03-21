export interface levelOfSupportType {
    id: number;
    level: string;
}

export interface durationDataType {
    id: number;
    name: string;
}

export type subGoalType = {
    id: number;
    subgoaltitle: string;
};

export interface FormValues {
    goalTitle: string;
    behaviour: string;
    levelOfSupport: levelOfSupportType | null;
    Accuracy: string;
    duration: durationDataType | null;
}

export enum GoalSetupFormKeys {
    GOAL_TITLE = 'goalTitle',
    BEHAVIOUR = 'behaviour',
    LEVEL_OF_SUPPORT = 'levelOfSupport',
    ACCURACY = 'accuracy',
    DURATION = 'duration',
}

type StringOnlyGoalSetupFormKeys = Exclude<
    GoalSetupFormKeys,
    GoalSetupFormKeys.DURATION | GoalSetupFormKeys.LEVEL_OF_SUPPORT
>;

type StringFieldMap = {
    [key in StringOnlyGoalSetupFormKeys]: string;
};

export type GoalSetupFormType = StringFieldMap & {
    [GoalSetupFormKeys.DURATION]: [] | null;
    [GoalSetupFormKeys.LEVEL_OF_SUPPORT]: [] | null;
};
export type CenterSetupFormErrorType = {
    [key in GoalSetupFormKeys]?: string;
};

export type ErrorMessagesType = {
    [key in GoalSetupFormKeys]?: string;
};

export interface subGoalPayloadType {
    title: string;
}

export interface bodyPayloadType {
    studentId: number;
    behavior: string;
    accuracy: string;
    title: string;
    levelId: number;
    durationId: number;
    subGoals: subGoalPayloadType[];
}
