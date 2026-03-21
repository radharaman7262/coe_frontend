export enum CoordinationFormKeys {
    CO_ORDINATE_TYPES = 'coordinationTypes',
}

export type CoordinationFormType = {
    [key in CoordinationFormKeys]: string;
};
