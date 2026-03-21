export enum ReflexesFormKeys {
    REFLEXES = 'reflexes',
}

export type ReflexesFormType = {
    [key in ReflexesFormKeys]: string;
};

export type ROMErrorMessagesType = {
    [key in ReflexesFormKeys]?: string;
};
