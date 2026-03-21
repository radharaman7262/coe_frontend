export enum ROMFormKeys {
    MUSCLE_TONE = 'muscleTone',
}

export type ROMFormType = {
    [key in ROMFormKeys]: string;
};

export type ROMErrorMessagesType = {
    [key in ROMFormKeys]?: string;
};
