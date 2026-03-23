export enum EnduranceFormKeys {
    ENDURANCE = 'endurance',
}

export type EnduranceFormType = {
    [key in EnduranceFormKeys]: string;
};

export type ROMErrorMessagesType = {
    [key in EnduranceFormKeys]?: string;
};
