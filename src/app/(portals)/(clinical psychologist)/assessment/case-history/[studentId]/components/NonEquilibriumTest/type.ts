export enum NonEquilibriumFormKeys {
    NON_EQUILIBRIUM = 'nonEquilibriumTest',
}

export type NonEquilibriumFormType = {
    [key in NonEquilibriumFormKeys]: string;
};
