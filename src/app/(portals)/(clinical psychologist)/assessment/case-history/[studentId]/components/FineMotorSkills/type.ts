export enum FineMotorFormKeys {
    GENERAL = 'selectedOptions',
    HAND_DOMINANCE = 'handDominance',
    COMMENTS = 'comments',
}
export type FineMotorFormType = {
    [key in FineMotorFormKeys]: string;
};

export type ROMErrorMessagesType = {
    [key in FineMotorFormKeys]?: string;
};
