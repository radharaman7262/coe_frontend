export enum ProvisionDiagnosisFormKeys {
    DESCRIPTION = 'description',
}

export type ProvisionDiagnosisFormType = {
    [key in ProvisionDiagnosisFormKeys]: string;
};
