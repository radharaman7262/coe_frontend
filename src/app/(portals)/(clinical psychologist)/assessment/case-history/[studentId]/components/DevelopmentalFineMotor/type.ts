export enum DevelopmentalFineMotorHistoryFormKeys {
    MATURE_PINCER_GRASP = 'maturePincerGrasp',
    SCRIBBLES = 'scribbles',
    COPIES_A_CIRCLE = 'copiesCircle',
    IDENTIFIES_BODY_PARTS = 'identifiesBodyParts',
    KNOWS_ADDRESS_RULES_OF_GAMES = 'tellsAddress',
}

export type DevelopmentalFineMotorHistoryFormType = {
    [key in DevelopmentalFineMotorHistoryFormKeys]: string;
};

export type DevelopmentalFineMotorErrorMessagesType = {
    [key in DevelopmentalFineMotorHistoryFormKeys]?: string;
};
