export enum SelfRegulationFormKeys {
    BEHAVIOURS = 'behaviour',
}

export type SelfRegulationFormType = {
    [key in SelfRegulationFormKeys]: string;
};
