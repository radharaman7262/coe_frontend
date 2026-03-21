export enum AssisstiveDeviceFormKeys {
    COMMENTS = 'comments',
    GENERAL = 'general',
}

export type AssisstiveDeviceFormType = {
    [key in AssisstiveDeviceFormKeys]: string;
};
