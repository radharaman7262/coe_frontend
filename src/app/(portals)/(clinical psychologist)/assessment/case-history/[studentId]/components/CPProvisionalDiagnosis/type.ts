export enum CPProvisionDiagnosisFormKeys {
    DESCRIPTION = 'diagnosis',
}

export type CPProvisionDiagnosisFormType = {
    [key in CPProvisionDiagnosisFormKeys]: string;
};
